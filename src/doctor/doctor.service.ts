import { CreateDoctorDto } from './dto/create-doctor.dto';
import { Doctor } from './doctor.entity';
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor) private doctorRepo: Repository<Doctor>,
  ) {}

  async create(body: CreateDoctorDto) {
    const isExist = await this.getByEmail(body?.email);

    if (isExist) {
      throw new BadRequestException('Doctor already exists');
    }
    const doctor = this.doctorRepo.create(body);

    return this.doctorRepo.save(doctor);
  }

  async get() {
    return await this.doctorRepo.find();
  }

  async getByEmail(email: string) {
    const doctor = this.doctorRepo.findOne({ where: { email } });

    return doctor;
  }

  async getById(id: string) {
    const doctor = await this.doctorRepo.findOne({ where: { id } });

    if (!doctor) throw new NotFoundException('doctor not found');

    return doctor;
  }

  async deleteById(id: string) {
    const doctor = await this.getById(id);

    if (!doctor) throw new NotFoundException('doctor not found');

    return this.doctorRepo.delete(doctor);
  }
}

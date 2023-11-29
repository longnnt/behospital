import { CreateDoctorDto } from './dto/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor) private doctorRepo: Repository<Doctor>,
  ) {}

  async create(body: CreateDoctorDto) {
    const doctor = this.doctorRepo.create(body);

    return this.doctorRepo.save(doctor);
  }

  async get() {
    return await this.doctorRepo.find();
  }

  async getById(id: string) {
    const doctor = this.doctorRepo.findOne({ where: { id } });

    return doctor;
  }
}

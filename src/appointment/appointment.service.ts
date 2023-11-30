import { UserService } from './../user/user.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DoctorService } from 'src/doctor/doctor.service';
import { Repository } from 'typeorm';
import { Appointment } from './appointment.entity';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';
@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepo: Repository<Appointment>,
    private doctorService: DoctorService,
    private userService: UserService,
  ) {}

  async create(body: CreateAppointmentDto) {
    const doctor = await this.doctorService.getById(body?.doctorId);

    const user = await this.userService.getById(body?.userId);

    if (!doctor || !user) {
      throw new NotFoundException('patient or doctor not found');
    }

    const appointment = this.appointmentRepo.create(body);

    return this.appointmentRepo.save(appointment);
  }

  async getAppointmentByDoctorId(doctorId: string) {
    const appointment = await this.appointmentRepo
      .createQueryBuilder('appointment')
      .where('appointment."doctorId" =:doctorId', { doctorId })
      .getMany();

    console.log(appointment);
    return 'nothing';
  }
}

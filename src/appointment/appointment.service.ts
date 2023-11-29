import { CreateAppointmentDto } from './dtos/create-appointment.dto';
import { Appointment } from './appointment.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepo: Repository<Appointment>,
  ) {}

  create(body: CreateAppointmentDto) {
    const appointment = this.appointmentRepo.create(body);

    return this.appointmentRepo.save(appointment);
  }
}

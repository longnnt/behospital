import { PatientService } from './../patient/patient.service';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';
import { Appointment } from './appointment.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DoctorService } from 'src/doctor/doctor.service';
@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private appointmentRepo: Repository<Appointment>,
    private doctorService: DoctorService,
    private patientService: PatientService,
  ) {}

  async create(body: CreateAppointmentDto) {
    const patient = await this.patientService.getById(body?.patientId);

    const doctor = await this.doctorService.getById(body?.doctorId);

    if (!patient || !doctor) {
      throw new NotFoundException('patient or doctor not found');
    }

    const appointment = this.appointmentRepo.create(body);

    return this.appointmentRepo.save(appointment);
  }
}

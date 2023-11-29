import { Body, Controller, Post } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';

@Controller()
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Post()
  create(@Body() body: CreateAppointmentDto) {
    const appointment = this.appointmentService.create(body);

    return appointment;
  }
}

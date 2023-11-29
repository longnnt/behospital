import { Body, Controller, Post } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Appointment')
@Controller('appointment')
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Post()
  create(@Body() body: CreateAppointmentDto) {
    const appointment = this.appointmentService.create(body);

    return appointment;
  }
}

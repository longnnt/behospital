import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Appointment')
@Controller('appointment')
export class AppointmentController {
  constructor(private appointmentService: AppointmentService) {}

  @Get('/:id')
  @ApiOperation({ summary: 'get appointment by doctor id' })
  async getAppointmentByDoctorId(@Param('id') doctorId: string) {
    return await this.appointmentService.getAppointmentByDoctorId(doctorId);
  }

  @Post()
  @ApiOperation({ summary: 'create appointment' })
  create(@Body() body: CreateAppointmentDto) {
    const appointment = this.appointmentService.create(body);

    return appointment;
  }
}

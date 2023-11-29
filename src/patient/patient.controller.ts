import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dtos/create-patient.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('patient')
@ApiTags('Patient')
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Get()
  async get() {
    return await this.patientService.get();
  }

  @Post('/:id')
  @ApiOperation({ summary: 'create patient with user id' })
  create(@Body() body: CreatePatientDto, @Param('id') id: string) {
    const patient = this.patientService.create({ ...body, userId: id });

    return patient;
  }
}

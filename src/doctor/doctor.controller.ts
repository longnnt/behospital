import { DoctorService } from './doctor.service';
import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('doctor')
@ApiTags('Doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @Get()
  @ApiOperation({ summary: 'Get all doctor' })
  async getDoctor() {
    return await this.doctorService.get();
  }

  @ApiOperation({ summary: 'Create information doctor with user id' })
  @Post('/:id')
  async create(@Body() body: CreateDoctorDto, @Param('id') id: string) {
    const doctor = await this.doctorService.create({ ...body, userId: id });

    return doctor;
  }
}

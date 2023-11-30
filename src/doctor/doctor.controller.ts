import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';

@Controller('doctor')
@ApiTags('Doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @Get()
  @ApiOperation({ summary: 'Get all doctor' })
  async getDoctor() {
    return await this.doctorService.get();
  }

  @Post('/:id')
  @ApiOperation({ summary: 'Create information doctor with user id' })
  async create(@Body() body: CreateDoctorDto, @Param('id') id: string) {
    const doctor = await this.doctorService.create({ ...body, userId: id });

    return { doctorId: doctor?.id };
  }

  @Get('/:id')
  @ApiOperation({ summary: 'get details doctor with doctor id' })
  async getDoctorById(@Param('id') id: string) {
    const doctor = await this.doctorService.getById(id);

    return doctor;
  }
}

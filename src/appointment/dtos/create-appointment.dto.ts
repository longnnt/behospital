import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAppointmentDto {
  @IsString()
  @ApiProperty()
  patientId: string;

  @IsString()
  @ApiProperty()
  doctorId: string;

  @IsString()
  @ApiProperty()
  date: string;
}

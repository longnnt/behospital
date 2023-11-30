import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateAppointmentDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  phone: string;

  @ApiProperty()
  @IsNumber()
  age: number;

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

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { User } from 'src/user/user.entity';
import { DeepPartial } from 'typeorm';

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
  userId: string;

  @IsString()
  @ApiProperty()
  doctorId: string;

  @IsString()
  @ApiProperty()
  date: string;
}

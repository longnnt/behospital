import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty({ default: 'patient', enum: ['patient', 'doctor'] })
  @IsString()
  role: 'patient' | 'doctor' = 'patient';
}

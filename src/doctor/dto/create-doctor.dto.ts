import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CreateDoctorDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  @IsPhoneNumber('VN')
  phone: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  userId: string;
}

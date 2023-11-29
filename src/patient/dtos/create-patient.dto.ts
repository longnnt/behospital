import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  @IsPhoneNumber('VN')
  phone: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  userId: string;
}

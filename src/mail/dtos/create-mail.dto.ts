import { IsString } from 'class-validator';

export class CreateMailDto {
  @IsString()
  patientId: string;

  @IsString()
  doctorId: string;

  @IsString()
  date: string;

  @IsString()
  name: string;

  @IsString()
  age: string;
}

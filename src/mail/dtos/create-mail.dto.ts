import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMailDto {
  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  doctorId: string;

  @ApiProperty()
  @IsString()
  date: string;

  @ApiProperty()
  @IsString()
  time: string;

  @ApiProperty()
  @IsString()
  name: string;
}

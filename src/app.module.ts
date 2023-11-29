import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Appointment } from './appointment/appointment.entity';
import { Doctor } from './doctor/doctor.entity';
import { Patient } from './patient/patient.entity';
import { AppointmentModule } from './appointment/appointment.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [Appointment, Doctor, Patient, User],
    }),
    AppointmentModule,
    DoctorModule,
    PatientModule,
    UserModule,
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

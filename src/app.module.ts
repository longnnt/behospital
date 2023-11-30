import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentModule } from './appointment/appointment.module';
import { DoctorModule } from './doctor/doctor.module';
import { MailModule } from './mail/mail.module';
import { PatientModule } from './patient/patient.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'db/sql',
    //   synchronize: true,
    //   entities: [Appointment, Doctor, Patient, User],
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:
        'localhost' ||
        'postgres://demo_clinic_user:rAxW4cQNEiorbogH2VAnmp4Ux5SW9Hct@dpg-clk4je6ukbfc7390s0q0-a/demo_clinic',
      port: 5432,
      username: 'admin' || 'demo_clinic_user',
      password: '412805@long' || 'rAxW4cQNEiorbogH2VAnmp4Ux5SW9Hct',
      database: 'demo_clinic' || 'demo_clinic',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
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

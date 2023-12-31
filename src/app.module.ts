import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentModule } from './appointment/appointment.module';
import { DoctorModule } from './doctor/doctor.module';
import { MailModule } from './mail/mail.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'db/sql',
    //   synchronize: true,
    //   entities: [Appointment, Doctor, Patient, User],
    // }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:
        process.env.DB_HOSTNAME ||
        'postgres://demo_clinic_user:rAxW4cQNEiorbogH2VAnmp4Ux5SW9Hct@dpg-clk4je6ukbfc7390s0q0-a/demo_clinic',
      port: 5432,
      username: process.env.DB_USERNAME || 'demo_clinic_user',
      password: process.env.DB_PASSWORD || 'rAxW4cQNEiorbogH2VAnmp4Ux5SW9Hct',
      database: process.env.DB_DATABASE || 'demo_clinic',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AppointmentModule,
    DoctorModule,
    UserModule,
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

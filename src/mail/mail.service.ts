import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMailDto } from './dtos/create-mail.dto';
import { UserService } from 'src/user/user.service';
import { DoctorService } from 'src/doctor/doctor.service';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private doctorService: DoctorService,
    private userService: UserService,
  ) {}

  async sendUserConfirmation(body: CreateMailDto) {
    const { name, doctorId, userId, date, time } = body;

    const doctor = await this.doctorService.getById(doctorId);

    const user = await this.userService.getById(userId);

    await this.mailerService.sendMail({
      from: '"Clinic Demo" <noreply@hospital.com>',
      to: user?.email,
      subject: 'Lịch khám sức khỏe của Clinic Demo',
      template: './testhandlebar',
      context: {
        name,
        doctorName: doctor?.name,
        date: date,
        address: 'test',
        time: time,
      },
    });
  }
}

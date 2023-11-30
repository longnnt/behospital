import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: any, name?: 'Thanh Long') {
    await this.mailerService.sendMail({
      from: '"Clinic Demo" <noreply@hospital.com>',
      to: 'genryusai.tech@gmail.com',
      subject: 'Lịch khám sức khỏe của Clinic Demo',
      template: './testhandlebar',
      context: {
        name: 'Thanh Long',
        doctorName: 'Thanh Long 1',
        date: '2023-12-20',
        address: 'test',
        time: '17h',
      },
    });
  }
}

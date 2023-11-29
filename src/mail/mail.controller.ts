import { Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private mailerService: MailService) {}

  @Post()
  sendMailConfirm() {
    const user = { email: 'longnnt@gmail.com', name: 'TLONG' };

    const token = Math.floor(1000 + Math.random() * 9000).toString();

    return this.mailerService.sendUserConfirmation(user, token);
  }
}

import { CreateMailDto } from './dtos/create-mail.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private mailerService: MailService) {}

  @Post()
  sendMailConfirm(@Body() body: any) {
    const user = { email: 'longnnt@gmail.com', name: 'TLONG' };

    return this.mailerService.sendUserConfirmation(user);
  }
}

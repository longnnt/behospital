import { CreateMailDto } from './dtos/create-mail.dto';
import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Mail')
@Controller('mail')
export class MailController {
  constructor(private mailerService: MailService) {}

  @Post()
  sendMailConfirm(@Body() body: CreateMailDto) {
    return this.mailerService.sendUserConfirmation(body);
  }
}

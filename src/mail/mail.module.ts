import { Module } from '@nestjs/common';
import { MailerController } from './mail.controller';
import { Mailservice } from './mail.service';

@Module({
  controllers: [MailerController],
  providers: [Mailservice]
})
export class MailModule {}
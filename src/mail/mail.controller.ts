import { Body, Controller, Post } from "@nestjs/common";
import { Mailservice } from "./mail.service";
import { SendMailDto } from "./dto";

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailService: Mailservice) {}

  @Post('send')
  sendEmail( 
    @Body() dto: SendMailDto 
  ) {
    return this.mailService.send(dto)
  }
}
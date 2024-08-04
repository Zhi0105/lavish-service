import { ForbiddenException, Injectable } from "@nestjs/common";
import { MailerService } from "@nestjs-modules/mailer";
import { ConfigService } from "@nestjs/config";
import { SendMailDto } from "./dto";

@Injectable()
export class Mailservice {
  constructor(private readonly mailerService: MailerService, private configService: ConfigService) {}

  async send( dto: SendMailDto ) {
    const sent = await this.mailerService.sendMail({
      from: dto.email,
      to: this.configService.get('EMAIL'),
      subject: `Lavish Avenue - from (${dto.email})`,
      template: './confirmation',
      context: {
        name: dto.name,
        address: dto.address,
        mobile: dto.mobile,
        email: dto.email,
        service: dto.service,
        tor: dto.tor
      }
    })

    if(!sent) {
      throw new ForbiddenException('Access to resources denied')
    }
    return "email successfully sent"
  }
}
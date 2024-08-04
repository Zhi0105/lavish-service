import { IsNotEmpty, IsOptional, IsString  } from "class-validator";

export class SendMailDto {

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  address: string
 
  @IsString()
  @IsNotEmpty()
  mobile: string

  @IsString()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  service: string

  @IsOptional()
  tor: string
}
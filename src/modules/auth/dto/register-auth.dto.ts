import { PartialType } from "@nestjs/mapped-types";
import { LoginAutothDto } from "./login-auth.dto";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class RegisterAuthDto extends PartialType(LoginAutothDto){
 id?: number;
 @IsNotEmpty()
 name?: string;
 @IsNotEmpty()
 @IsEmail()
 email: string;
 @MaxLength(6)
 @MinLength(25)
 @IsNotEmpty()
password: string;
}
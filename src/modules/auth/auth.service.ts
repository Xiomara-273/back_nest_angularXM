import { Injectable } from '@nestjs/common';
import { LoginAutothDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService){}
    login(credenciales: LoginAutothDto){

        let payload={email:"admin@gmail.com", id:1}
        const token= this.jwtService.sign(payload)
        return {token:token};
    }
}

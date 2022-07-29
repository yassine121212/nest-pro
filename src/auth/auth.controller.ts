import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { AuthDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}
  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.service.signup(dto);
  }
  @Post('signin')
  signin(@Body() dto: AuthDto) {
    return this.service.signin(dto);
  }
}

import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard, GoogleAuthGuard } from './utils/Guard';

@Controller('auth')
export class AuthController {
  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'Google Authentication' };
  }

  // api/auth/google/redirect
  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return { msg: 'OK' };
  }

  @Get('status')
  @UseGuards(AuthenticatedGuard)
  user(@Req() request) {
    if ((request as any).user) {
      return { msg: 'Authenticated' };
    } else {
      return { msg: 'Not Authenticated' };
    }
  }
}

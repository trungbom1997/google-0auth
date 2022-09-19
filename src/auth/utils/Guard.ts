import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  async canActivate(context: ExecutionContext) {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    const activate = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();
    super.logIn(request);
    return activate;
  }
}

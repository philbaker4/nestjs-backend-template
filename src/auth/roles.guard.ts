import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // required roles
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const userRoles = user[`${process.env.AUDIENCE}/roles`];
    const hasRole = () => userRoles.some((role) => roles.includes(role));
    if (!(user && userRoles && hasRole())) {
      throw new UnauthorizedException();
    }
    return true;
  }
}

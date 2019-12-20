import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    // required roles
    const roles = this.reflector.get<string[]>('permissions', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () => user.permissions.some((role) => roles.includes(role));
    if (!(user && user.permissions && hasRole())) {
      throw new UnauthorizedException();
    }
    return true;
  }
}

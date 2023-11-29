import { ExecutionContext } from '@nestjs/common/interfaces';
import { Reflector } from '@nestjs/core';
import { CanActivate } from '@nestjs/common';
import { ROLES_KEY } from './role.decorator';
import { Role } from './role.enum';

export class RoleGuard implements CanActivate {
  constructor(private refector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.refector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getClass(),
      context.getHandler(),
    ]);

    if (!requiredRoles) return true;

    const { user } = context.switchToHttp().getRequest();

    return requiredRoles.some((role) => user?.role?.include(role));
  }
}

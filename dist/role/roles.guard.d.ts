import { ExecutionContext } from '@nestjs/common/interfaces';
import { Reflector } from '@nestjs/core';
import { CanActivate } from '@nestjs/common';
export declare class RoleGuard implements CanActivate {
    private refector;
    constructor(refector: Reflector);
    canActivate(context: ExecutionContext): boolean;
}

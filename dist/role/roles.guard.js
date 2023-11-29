"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuard = void 0;
const role_decorator_1 = require("./role.decorator");
class RoleGuard {
    constructor(refector) {
        this.refector = refector;
    }
    canActivate(context) {
        const requiredRoles = this.refector.getAllAndOverride(role_decorator_1.ROLES_KEY, [
            context.getClass(),
            context.getHandler(),
        ]);
        if (!requiredRoles)
            return true;
        const { user } = context.switchToHttp().getRequest();
        return requiredRoles.some((role) => { var _a; return (_a = user === null || user === void 0 ? void 0 : user.role) === null || _a === void 0 ? void 0 : _a.include(role); });
    }
}
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=roles.guard.js.map
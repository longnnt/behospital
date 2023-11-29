"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const crypto_1 = require("crypto");
const util_1 = require("util");
const user_service_1 = require("./user.service");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signup(body) {
        const { email, password, role } = body;
        const user = await this.userService.find(email);
        if (user) {
            throw new common_1.BadRequestException('email in use');
        }
        const salt = (0, crypto_1.randomBytes)(8).toString('hex');
        const hash = (await scrypt(password, salt, 32));
        const result = `${salt}.${hash.toString('hex')}`;
        return this.userService.create({
            email,
            password: result,
            role,
        });
    }
    async signin(body) {
        const user = await this.userService.find(body === null || body === void 0 ? void 0 : body.email);
        if (!user) {
            throw new common_1.NotFoundException('user not found');
        }
        const [salt, storedHash] = user === null || user === void 0 ? void 0 : user.password.split('.');
        const hash = (await scrypt(body === null || body === void 0 ? void 0 : body.password, salt, 32));
        const payload = { sub: user === null || user === void 0 ? void 0 : user.id, email: user === null || user === void 0 ? void 0 : user.email, role: user === null || user === void 0 ? void 0 : user.role };
        if (storedHash === hash.toString('hex')) {
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        }
        throw new common_1.BadRequestException('bad request');
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
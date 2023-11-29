import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dtos/create-user.dto';
import { SignInDto } from './dtos/sign-in.dto';
import { UserService } from './user.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signup(body: CreateUserDto): Promise<import("./user.entity").User>;
    signin(body: SignInDto): Promise<{
        access_token: string;
    }>;
}

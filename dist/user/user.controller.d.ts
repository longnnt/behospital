import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { SignInDto } from './dtos/sign-in.dto';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    private authService;
    constructor(userService: UserService, authService: AuthService);
    getAllUser(): Promise<import("./user.entity").User[]>;
    get(id: string): Promise<import("./user.entity").User>;
    signup(body: CreateUserDto): Promise<string>;
    signin(body: SignInDto): Promise<{
        access_token: string;
    }>;
}

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { scrypt as _scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';
import { CreateUserDto } from './dtos/create-user.dto';
import { SignInDto } from './dtos/sign-in.dto';
import { UserService } from './user.service';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(body: CreateUserDto) {
    const { email, password, role } = body;

    const user = await this.userService.find(email);

    if (user) {
      throw new BadRequestException('email in use');
    }

    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    const result = `${salt}.${hash.toString('hex')}`;

    return this.userService.create({
      email,
      password: result,
      role,
    });
  }

  async signin(body: SignInDto) {
    const user = await this.userService.find(body?.email);

    if (!user) {
      throw new NotFoundException('user not found');
    }

    const [salt, storedHash] = user?.password.split('.');

    const hash = (await scrypt(body?.password, salt, 32)) as Buffer;

    const payload = { sub: user?.id, email: user?.email, role: user?.role };

    if (storedHash === hash.toString('hex')) {
      return {
        access_token: await this.jwtService.signAsync(payload),
        payload,
      };
    }

    throw new BadRequestException('bad request');
  }
}

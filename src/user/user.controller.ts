import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { SignInDto } from './dtos/sign-in.dto';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get('/all')
  async getAllUser() {
    const users = await this.userService.getAll();

    return users;
  }

  @Get('/:id')
  get(@Param('id') id: string) {
    const user = this.userService.getById(id);

    return user;
  }

  @Post('/signup')
  async signup(@Body() body: CreateUserDto) {
    const user = await this.authService.signup(body);

    return user?.id;
  }

  @Post('/signin')
  async signin(@Body() body: SignInDto) {
    const user = await this.authService.signin(body);

    return user;
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { SignInDto } from './dtos/sign-in.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'get all users' })
  async getAllUser() {
    const users = await this.userService.getAll();

    return users;
  }

  @Get('/:id')
  @ApiOperation({ summary: 'get user by id' })
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

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  create(body: CreateUserDto) {
    const user = this.userRepo.create(body);

    return this.userRepo.save(user);
  }

  async find(email: string) {
    const user = await this.userRepo.findOne({ where: { email } });

    return user;
  }

  async getAll() {
    const users = await this.userRepo.find();
    return users;
  }

  async getById(id: string) {
    return await this.userRepo.findOne({ where: { id } });
  }
}

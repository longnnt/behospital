import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
export declare class UserService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    create(body: CreateUserDto): Promise<User>;
    find(email: string): Promise<User>;
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User>;
}

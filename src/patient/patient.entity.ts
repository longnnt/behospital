import { User } from './../user/user.entity';
import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsString()
  name: string;

  @Column()
  address: string;

  @Column()
  @IsPhoneNumber()
  phone: string;

  @Column()
  @IsEmail()
  email: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  userId: string;
}

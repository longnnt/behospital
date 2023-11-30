import { IsEmail, IsString } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './../user/user.entity';
import { Appointment } from 'src/appointment/appointment.entity';

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsString()
  name: string;

  @Column()
  major: string;

  @Column()
  position: string;

  @Column()
  education: string;

  @Column()
  work_experience: string;

  @Column()
  age: string;

  @Column()
  @IsEmail()
  email: string;

  @OneToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  userId: string;

  @OneToMany(() => Appointment, (appointment) => appointment.doctorId)
  appointment: Appointment[];
}

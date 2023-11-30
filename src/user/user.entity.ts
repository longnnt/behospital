import { IsEmail, IsString, Length } from 'class-validator';
import { Appointment } from 'src/appointment/appointment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Length(20)
  id: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  password: string;

  @Column()
  @IsString()
  role: 'patient' | 'doctor';

  @OneToMany(() => Appointment, (appointment) => appointment.userId)
  appointment: User[];
}

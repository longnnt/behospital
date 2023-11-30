import { Doctor } from './../doctor/doctor.entity';
import { Patient } from '../patient/patient.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  age: number;

  @ManyToOne(() => Patient, (patient) => patient.id)
  @JoinColumn({ name: 'patientId' })
  patient_id: Patient;

  @ManyToOne(() => Doctor, (doctor) => doctor.id)
  @JoinColumn({ name: 'doctorId' })
  doctor_id: Doctor;

  @Column()
  date: string;
}

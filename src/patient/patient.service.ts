import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';
import { CreatePatientDto } from './dtos/create-patient.dto';
@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient) private patientRepo: Repository<Patient>,
  ) {}

  create(body: CreatePatientDto) {
    const patient = this.patientRepo.create(body);

    return this.patientRepo.save(patient);
  }

  get() {
    const patients = this.patientRepo.find();

    return patients;
  }
}

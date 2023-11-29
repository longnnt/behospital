import { Repository } from 'typeorm';
import { Patient } from './patient.entity';
import { CreatePatientDto } from './dtos/create-patient.dto';
export declare class PatientService {
    private patientRepo;
    constructor(patientRepo: Repository<Patient>);
    create(body: CreatePatientDto): Promise<Patient>;
    get(): Promise<Patient[]>;
}

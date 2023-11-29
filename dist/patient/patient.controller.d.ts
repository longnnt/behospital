import { PatientService } from './patient.service';
import { CreatePatientDto } from './dtos/create-patient.dto';
export declare class PatientController {
    private patientService;
    constructor(patientService: PatientService);
    get(): Promise<import("./patient.entity").Patient[]>;
    create(body: CreatePatientDto, id: string): Promise<import("./patient.entity").Patient>;
}

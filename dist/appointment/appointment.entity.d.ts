import { Doctor } from './../doctor/doctor.entity';
import { Patient } from '../patient/patient.entity';
export declare class Appointment {
    id: string;
    patient_id: Patient;
    doctor_id: Doctor;
    date: string;
}

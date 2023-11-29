import { CreateDoctorDto } from './dto/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { Repository } from 'typeorm';
export declare class DoctorService {
    private doctorRepo;
    constructor(doctorRepo: Repository<Doctor>);
    create(body: CreateDoctorDto): Promise<Doctor>;
    get(): Promise<Doctor[]>;
}

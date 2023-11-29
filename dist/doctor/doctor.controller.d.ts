import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
export declare class DoctorController {
    private doctorService;
    constructor(doctorService: DoctorService);
    getDoctor(): Promise<import("./doctor.entity").Doctor[]>;
    create(body: CreateDoctorDto, id: string): Promise<import("./doctor.entity").Doctor>;
}

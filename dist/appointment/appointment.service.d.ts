import { CreateAppointmentDto } from './dtos/create-appointment.dto';
import { Appointment } from './appointment.entity';
import { Repository } from 'typeorm';
export declare class AppointmentService {
    private appointmentRepo;
    constructor(appointmentRepo: Repository<Appointment>);
    create(body: CreateAppointmentDto): Promise<Appointment>;
}

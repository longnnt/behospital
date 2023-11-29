import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dtos/create-appointment.dto';
export declare class AppointmentController {
    private appointmentService;
    constructor(appointmentService: AppointmentService);
    create(body: CreateAppointmentDto): Promise<import("./appointment.entity").Appointment>;
}

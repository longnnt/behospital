"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const user_entity_1 = require("./user/user.entity");
const user_module_1 = require("./user/user.module");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const appointment_entity_1 = require("./appointment/appointment.entity");
const doctor_entity_1 = require("./doctor/doctor.entity");
const patient_entity_1 = require("./patient/patient.entity");
const appointment_module_1 = require("./appointment/appointment.module");
const doctor_module_1 = require("./doctor/doctor.module");
const patient_module_1 = require("./patient/patient.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'db/sql',
                synchronize: true,
                entities: [appointment_entity_1.Appointment, doctor_entity_1.Doctor, patient_entity_1.Patient, user_entity_1.User],
            }),
            appointment_module_1.AppointmentModule,
            doctor_module_1.DoctorModule,
            patient_module_1.PatientModule,
            user_module_1.UserModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
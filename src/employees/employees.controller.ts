/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Post()
    async createEmployee() {
        return this.employeesService.createEmployee();
    }

    @Get()
    async findAllEmployees() {
        return this.employeesService.findAllEmployees();
    }
}

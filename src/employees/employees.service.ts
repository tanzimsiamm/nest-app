/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async createEmployee(): Promise<Employee> {
    const profile = await new this.profileModel({
      name: 'John Doe',
      age: 30,
      position: 'Developer',
    }).save();

    const employee = new this.employeeModel({
      employeeId: 'E123',
      department: 'Engineering',
      profile: profile._id,
    });
    return employee.save();
  }

  async findAllEmployees(): Promise<Employee[]> {
    return this.employeeModel.find().populate('profile').exec();
  }
}

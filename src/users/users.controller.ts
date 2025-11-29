/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser() {
        return this.usersService.createUser();
    }

    @Get()
    async findAllUsers() {
        return this.usersService.findAllUsers();
    }
}

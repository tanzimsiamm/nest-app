/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from './student.schema';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }])
    ],
    providers: [StudentsService],
    controllers: [StudentsController],
})
export class StudentsModule {}

/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: 'Alice',age:20 },
        { id: 2, name: 'Siyam',age:21 },
    ];

    // Get all students
    getAllStudents() {
        return this.students;
    }

    // Get student by ID
    getStudentById(id: number) {
        const student = this.students.find(student => student.id === id);
        if(!student) throw new NotFoundException('Student not found');
        return student;
    }

    //post student
    createStudent(data: {name: string, age: number}) {
        const newStudent = {
            id: Date.now(),
            ...data
        };
        this.students.push(newStudent);
        return newStudent;
    }

    //put
    updateStudent(id: number, data:{name: string, age: number}){
        const index = this.students.findIndex(student => student.id === id);
        if(index === -1) throw new NotFoundException('Student not found');
        this.students[index] = {id, ...data};
        return this.students[index];
    }

    //patch
    patchStudent(id:number, data: Partial<{name: string, age: number}>){
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    //delete
    deleteStudent(id:number){
        const index = this.students.findIndex(student => student.id === id);
        if(index === -1) throw new NotFoundException('Student not found');
        const deletedStudent = this.students.splice(index, 1);
        return {message: 'Student deleted successfully', student: deletedStudent[0]};
    }

}
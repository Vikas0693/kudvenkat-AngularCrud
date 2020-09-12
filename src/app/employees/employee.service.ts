import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

//providedIn can be added here or we can inject this service at module/component level using providers which we did at root level
@Injectable(/* {
    providedIn: 'root'
} */)
export class EmployeeService {
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mark@pragimtech.com',
            dateOfBirth: new Date('10/25/1988'),
            department: '3',
            isActive: true,
            photoPath: 'assets/images/mark.png'
        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: 2345978640,
            dateOfBirth: new Date('11/20/1979'),
            department: '2',
            isActive: true,
            photoPath: 'assets/images/mary.png'
        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 5432978640,
            dateOfBirth: new Date('3/25/1976'),
            department: '3',
            isActive: false,
            photoPath: 'assets/images/john.png'
        },
    ];
    constructor(private httpClient:HttpClient){
    }
    getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>('http://localhost:3000/employees')
        .pipe(catchError(this.handleError));
    }

    saveEmployee(employee: Employee){
        if(employee.id === null)//this shows it is a new employee
        {
            //use array.reduce method to find largest id in list
            const maxId = this.listEmployees.reduce((e1 ,e2) =>{
                return e1.id > e2.id ? e1 : e2;
            }).id;
            employee.id = maxId + 1;
            //before pushing we have to set its id
            this.listEmployees.push(employee);
        }
        else{
            const index = this.listEmployees.findIndex(emp => emp.id === employee.id);
            this.listEmployees[index] = employee;
        }
    }

    getEmployee(id: number): Employee{
        return this.listEmployees.find(e => e.id==id);
    }

    deleteEmployee(id: number){
        const index = this.listEmployees.findIndex(emp => emp.id === id);
        if(index != -1){
            this.listEmployees.splice(index, 1);
        }
    }

    private handleError(errorResponse: HttpErrorResponse){
        //Error event occurrs bcoz of client side or n/w error
        if(errorResponse.error instanceof ErrorEvent){
            console.error('Client side error : '+errorResponse.error.message);
        }
        else{
            //server side error
            console.error('Server sidde error : ',errorResponse);
        }
        return throwError('There is a problem with service. Please try again later.');
    }
}
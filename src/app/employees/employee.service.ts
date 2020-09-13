import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';

//providedIn can be added here or we can inject this service at module/component level using providers which we did at root level
@Injectable(/* {
    providedIn: 'root'
} */)
export class EmployeeService {
    
    baseUrl: string = "http://localhost:3000/employees";
    constructor(private httpClient: HttpClient) {
    }
    getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(this.baseUrl)
            .pipe(catchError(this.handleError));
    }

    addEmployee(employee: Employee): Observable<Employee> {
        return this.httpClient.post<Employee>(this.baseUrl, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
            .pipe(catchError(this.handleError));
    }

    updateEmployee(employee: Employee): Observable<void> {
        return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
            .pipe(catchError(this.handleError));
    }

    getEmployee(id: number): Observable<Employee> {
        return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    deleteEmployee(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        //Error event occurrs bcoz of client side or n/w error
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client side error : ' + errorResponse.error.message);
        }
        else {
            //server side error
            console.error('Server sidde error : ', errorResponse);
        }
        return throwError('There is a problem with service. Please try again later.');
    }
}
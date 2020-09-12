import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';
import { ResolvedEmployeeList } from './resolved-employee-list.model';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[] | string>{

    constructor(private _employeeService: EmployeeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): import("rxjs").Observable<Employee[] | string> {
        return this._employeeService.getEmployees()
        .pipe(
            catchError((error: any) => of(error))
        );
    }
}
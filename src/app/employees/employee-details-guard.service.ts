import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeDetailsGuardService implements CanActivate{

    constructor(private _employeeService: EmployeeService, private _router: Router){
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const empExists:boolean = !!this._employeeService.getEmployee(+route.paramMap.get('id'));
        if(empExists)
            return true;
        else{
            this._router.navigate(['notfound']);
            return false;
        }
    }

}
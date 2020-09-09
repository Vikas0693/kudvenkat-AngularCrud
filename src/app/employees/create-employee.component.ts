import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  previewPhoto : boolean = false;
  datePickerConfig: Partial<BsDatepickerConfig>;
  gender: string = 'male';
  department: string = '3';
  isActive: boolean = true;
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: '-101',
    isActive: null,
    photoPath: null
  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  constructor(private _employeeService: EmployeeService, private _router: Router) { 
    this.datePickerConfig = { 
      containerClass: 'theme-dark-blue', 
      dateInputFormat: 'DD/MM/YYYY'
    };
  }

  ngOnInit(): void {
  }

  saveEmployee(): void {
    this._employeeService.saveEmployee(this.employee);
    this._router.navigate(['list']);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngAfterViewChecked(){
    //your code to update the model
    console.log('ngView changes!!!!!!');
 }
}

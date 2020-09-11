import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  panelTitle:string;
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
  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) { 
    this.datePickerConfig = { 
      containerClass: 'theme-dark-blue', 
      dateInputFormat: 'DD/MM/YYYY'
    };
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe((parameterMap)=>{
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    })
  }

  private getEmployee(id: number){
    if(id===0){
      this.panelTitle = 'Create Employee';
      this.employee = {
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
      this.createEmployeeForm.reset();
    }
    else {
      this.panelTitle = 'Edit Employee';
      //filling existing data to new object and asigning it to this.employee
      Object.assign(this.employee,this._employeeService.getEmployee(id));
    }
  }

  saveEmployee(): void {
    const newEmployee:Employee = Object.assign({}, this.employee);
    this._employeeService.saveEmployee(newEmployee);
    this.createEmployeeForm.reset();
    this._router.navigate(['list']);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
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
    photoPath: null,
    confirmPassword: null,
    password: null
  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  constructor() { 
    this.datePickerConfig = { 
      containerClass: 'theme-dark-blue', 
      dateInputFormat: 'DD/MM/YYYY'
    };
  }

  ngOnInit(): void {
  }
  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
  ngAfterViewChecked(){
    //your code to update the model
    console.log('ngView changes!!!!!!');
 }
}

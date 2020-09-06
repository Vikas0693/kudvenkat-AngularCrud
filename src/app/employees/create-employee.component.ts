import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { Department } from '../models/department.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  dateOfBirth: Date = new Date(2018,1,14);
  datePickerConfig: Partial<BsDatepickerConfig>;
  gender: string = 'male';
  department: string = '3';
  isActive: boolean = true;
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  constructor() { 
    this.datePickerConfig = { 
      containerClass: 'theme-dark-blue', 
      showWeekNumbers: false,
      minDate: new Date(2018,0,1),
      maxDate: new Date(),
      dateInputFormat: 'DD/MM/YYYY'
    };
  }

  ngOnInit(): void {
  }
  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm);
  }
  updateTimeZone(date: Date): Date{
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    return date;
  }
}

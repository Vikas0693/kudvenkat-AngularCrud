import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Input() employee: Employee;

  constructor() { }
  ngOnInit(): void {
  }

  handleClick() {
    this.notify.emit(this.employee);
  }
}

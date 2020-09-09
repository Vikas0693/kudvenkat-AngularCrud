import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
    name: 'employeeFilter', pure: false
})
export class EmployeeFilterPipe implements PipeTransform {
    private _counter=0;
    transform(employees: Employee[], searchTerm: string): Employee[] {
        this._counter++;
        console.log('Filter executed count = '+this._counter);
        if (!employees || !searchTerm) {
            return employees;
        }

        return employees.filter(employee =>
            employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}
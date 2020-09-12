import { Employee } from '../models/employee.model';
export class ResolvedEmployeeList {
    
    //any = null means default value if not passed is null
    constructor(public employeeList: Employee[],public error: any = null){}
}
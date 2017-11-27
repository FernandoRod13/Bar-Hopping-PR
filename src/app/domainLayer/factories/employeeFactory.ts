import { Injectable } from '@angular/core';
import { Employee } from '../structures/Employee';

@Injectable()
export class EmployeeFactory {
    /**This function will contrusct an employee from a json from the database. */
    createEmployee(json: any): Employee {
        const data = json.data();
        const name = data.firstName + ' ' + data.lastName;
        return new Employee(json.id, name, data.phone, data.email, data.role, data.startDate, null);
    }
}

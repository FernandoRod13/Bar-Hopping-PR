import {Address} from './Address';
import { last } from '@angular/router/src/utils/collection';
export class Employee {
    eId: string;
    firstName: string;
    lastName: string;
    address: Address;
    phone: string;
    email: string;
    role: string;
    startDate: Date;

    constructor(id: string, firstName: string, lastName: string, phone: string, email: string, role: string, start: Date, address: Address) {
        this.eId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.role = role;
        this.address = address;
        this.startDate = start;
    }
    /**This fucntion will format this employee's data for database update purposes. */
    
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}


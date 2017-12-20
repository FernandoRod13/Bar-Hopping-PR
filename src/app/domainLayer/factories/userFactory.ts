import { Injectable } from '@angular/core';
import { Employee } from '../structures/Employee';
import { Customer } from '../structures/Customer';
import { Address } from '../structures/Address';
@Injectable()
export class UserFactory {
    /**This function will contrusct an employee from a json from the database. */
    composeEmployee(json: any): Employee {
        const data = json.data();
        const name = data.firstName + ' ' + data.lastName;
        const addressRef = data.address;
        const address = new Address(addressRef.city, addressRef.line1, addressRef.line2, addressRef.state, addressRef.zip);
        return new Employee(json.id, name, data.phone, data.email, data.role, data.startDate, address);
    }

    composeCustomer(json: any): Customer {
        return null;
    }
}

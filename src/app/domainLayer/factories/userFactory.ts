import { Injectable } from '@angular/core';
import { Employee } from '../structures/Employee';
import { Customer } from '../structures/Customer';
import { Address } from '../structures/Address';
@Injectable()
export class UserFactory {
    /**This function will contrusct an employee from a json from the database. */
    composeEmployee(json: any): Employee {
        console.log("The info: ")
        console.log(json.data());
        const data = json.data();
        const addressRef = data.address;
        const address = new Address(addressRef.city, addressRef.line1, addressRef.line2, addressRef.state, addressRef.zip);
        return new Employee(json.id, data.firstName, data.lastName, data.phone, data.email, data.role, data.startDate, address);
    }
    composeEmptyEmployeee() {
        const address = new Address('', '', '', '', '');
        return new Employee('', '', '', '', '', '', new Date(), address);
    }

    composeCustomer(data: any): any {
        console.log(data);
        if(data.userType == "Employee"){
            return this.composeEmployee(data);
        }
        
        return new Customer(data.name, data.email)
    }
}

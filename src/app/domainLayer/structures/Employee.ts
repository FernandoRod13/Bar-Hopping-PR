import {Address} from './Address';
export class Employee {
    eId: string;
    address: Address;
    name: string;
    phone: string;
    email: string;
    role: string;
    startDate: Date;

    constructor(id: string, name: string, phone: string, email: string, role: string, start: Date, address: Address) {
        this.eId = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.role = role;
        this.address = address;
        this.startDate = start;
    }
    /**This fucntion will format this employee's data for database update purposes. */
    exportData(): any {
        return null;
    }
}

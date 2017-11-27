import {Address} from './Address';
export class Employee {
    id: string;
    address: Address;
    name: string;
    phone: string;
    email: string;
    role: string;
    startDate: Date;

    constructor(json: any) {
        const data = json.data();
        this.id = json.id;
        this.name = data.firstName + ' ' + data.lastName;
        this.phone = data.phone;
        this.email = data.email;
        this.role = data.role;
        this.address = null;
        this.startDate = data.startDate;
    }
}

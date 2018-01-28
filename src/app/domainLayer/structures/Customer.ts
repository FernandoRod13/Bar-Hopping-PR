export class Customer {
    cId?: string;
    firstName: string;
    lastName: string;
    email: string;
    userType: string;

    constructor(firstName: string, lastName: string, email: string, id?: string, ) {
        if (id) {
            this.cId = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.userType = "Customer"
        }
        else {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.userType = 'Customer';
        }

    }
}

export class Customer {
    cId?: string;
    name: string;
    email: string;
    userType: string;

    constructor(name: string, email: string, id?: string) {
        if (id) {
            this.cId = id;
        }
        this.name = name;
        this.email = email;
        this.userType = 'Customer';
    }

}

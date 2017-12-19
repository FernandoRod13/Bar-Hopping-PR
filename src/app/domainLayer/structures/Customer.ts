export class Customer {
    cId?: string;
    name: string;
    email: string;

    constructor(id: string, name: string, email: string) {
        this.cId = id;
        this.name = name;
        this.email = email;
    };

    parseToJSON(): any {
    var customer = {
        name: this.name,
        email: this.email
    };
    return customer;
    }
}
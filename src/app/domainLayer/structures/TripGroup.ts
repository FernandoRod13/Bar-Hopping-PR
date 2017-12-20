export class TripGroup {
    customerId: string;
    customerName: string;
    guests: [string];

    constructor(customerID: string, customerName: string, guests: [string]) {
        this.customerId = customerID;
        this.customerName = customerName;
        this.guests = guests;
    }

    parseToJSON(): any {
        var tripGroup = {
            customerName: this.customerName,
            guests: this.guests
        };
        return tripGroup;
    } 
    
}



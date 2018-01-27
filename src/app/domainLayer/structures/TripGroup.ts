export class TripGroup {
    tripId: string;
    customerId: string;
    customerName: string;
    guests: [string];
    size: number;
    emergencyContactName: string;
    emergencyContactNumber: string;


    constructor(tripId: string, customerID: string, customerName: string, guests: [string], size: number,
        emergencyContactName: string, emergencyContactNumber: string) {
        this.tripId = tripId;
        this.customerId = customerID;
        this.customerName = customerName;
        this.guests = guests;
        this.size = size;
        this.emergencyContactName = emergencyContactName;
        this.emergencyContactNumber =emergencyContactNumber;
    }
    
}



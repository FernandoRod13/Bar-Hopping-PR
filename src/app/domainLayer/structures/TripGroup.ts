export class TripGroup {
    tripGroupId?: string;
    tripId: string;
    customerId: string;
    customerName: string;
    guests: any[];
    size: number;
    emergencyContactName: string;
    emergencyContactNumber: string;


    constructor(tripId: string, customerId: string, customerName: string, guests: string[], size: number,
        emergencyContactName: string, emergencyContactNumber: string, tripGroupId?: string) {

        // To show 
        if (tripGroupId) {
            this.tripGroupId = tripGroupId;
            this.tripId = tripId;
            this.customerId = customerId;
            this.customerName = customerName;
            this.guests = guests;
            this.size = size;
            this.emergencyContactName = emergencyContactName;
            this.emergencyContactNumber = emergencyContactNumber;
        }
        // To send to the DB
        else {

            this.tripId = tripId;
            this.customerId = customerId;
            this.customerName = customerName;
            this.guests = guests;
            this.size = size;
            this.emergencyContactName = emergencyContactName;
            this.emergencyContactNumber = emergencyContactNumber;
        }


    }

} 



export class Trip {
    id?: string;
    capacity: number;
    date: Date;
    seatsTaken: number;
    tripRoute: [string]; // the ids of the Partners
    typeOfTrip: string;
    staff: [string]; // the ids of the employees


    constructor(id: string, capacity: number, date: Date, tripRoute: [string],
        typeOfTrip: string, staff: [string]) {


        this.id = id;
        this.capacity = capacity;
        this.date = date;
        this.seatsTaken = 0;
        this.tripRoute = tripRoute;
        this.typeOfTrip = typeOfTrip;
        this.staff = staff;


    }


}


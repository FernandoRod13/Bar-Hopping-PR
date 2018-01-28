export class Trip {
    id?: string;
    name: string;
    capacity: number;
    date: Date;
    seatsTaken: number;
    tripRoute: [string]; // the ids of the Partners
    typeOfTrip: string;
    staff: [string]; // the ids of the employees
    


    constructor(id: string, name: string, capacity: number, date: Date, tripRoute: [string],
        typeOfTrip: string, staff: [string], seatsTaken?: number) {

        if(seatsTaken){
        this.id = id;
        this.name = name;
        this.capacity = capacity;
        this.date = date;
        this.tripRoute = tripRoute;
        this.typeOfTrip = typeOfTrip;
        this.staff = staff;
        this.seatsTaken = seatsTaken;
        }
        else{
        this.id = id;
        this.name = name;
        this.capacity = capacity;
        this.date = date;
        this.tripRoute = tripRoute;
        this.typeOfTrip = typeOfTrip;
        this.staff = staff;
        this.seatsTaken = 0;

        }

    }


}


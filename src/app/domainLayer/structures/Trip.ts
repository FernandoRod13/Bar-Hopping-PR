
import { TripManifest } from './TripManifest';


export class Trip {
    id?: string;
    capacity: number;
    date: Date;
    manifest?: TripManifest;
    tripRoute: [string]; // the ids of the Partners
    typeOfTrip: string;
    staff: [string]; // the ids of the employees

 
    constructor(id: string, capacity: number, date: Date, tripRoute: [string],
        typeOfTrip: string, staff: [string], manifest?: TripManifest) {

        if (manifest) {
            this.id = id;
            this.capacity = capacity;
            this.date = date;
            this.manifest = manifest;
            this.tripRoute = tripRoute;
            this.typeOfTrip = typeOfTrip;
            this.staff = staff;
        }
        else {
            this.id = id;
            this.capacity = capacity;
            this.date = date;
            this.tripRoute = tripRoute;
            this.typeOfTrip = typeOfTrip;
            this.staff = staff;
        }
    }


}


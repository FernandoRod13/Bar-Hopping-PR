
import { TripManifest } from './TripManifest';
import { TripRoute } from './TripRoute';

export class Trip {
    id: string;
    capacity: number;
    date: Date;
    manifest: TripManifest;
    tripRoute: TripRoute;
    typeOfTrip: string;
    staff: [string]; // the ids of the employees


    constructor(id: string, capacity: number, date: Date, manifest: TripManifest,
        tripRoute: TripRoute, typeOfTrip: string, staff: [string]) {

        this.id = id;
        this.capacity = capacity;
        this.date = date;
        this.manifest = manifest;
        this.tripRoute = tripRoute;
        this.typeOfTrip = typeOfTrip;
        this.staff = staff;

    }

    
    parseToJSON(): any {
        var trip = {
            capacity: this.capacity,
            date:  this.date,
            manifest:  this.manifest,
            tripRoute:  this.tripRoute,
            typeOfTrip:  this.typeOfTrip,
            staff:  this.staff,
           
        };
        return trip;
    }
}


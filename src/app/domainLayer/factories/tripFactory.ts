import { Injectable } from '@angular/core';
import { Address } from '../structures/Address';
import { Trip } from '../structures/Trip'
import { TripGroup } from '../structures/TripGroup'

@Injectable()
export class TripFactory {
    /**This function will contrusct an employee from a json from the database. */


    composeTripFromDB(json: any): Trip {
        const data = json.data();

        console.log(data)
        return new Trip(json.id, data.name, data.capacity, data.date, data.tripRoute, 
            data.typeOfTrip, data.staff,data.seatsTaken)
    }

    composeNewTrip(name: string, capacity: number, date: Date, tripRouteList: [string], staff: [string],
         type: string, seatsTaken: number): Trip {

        return new Trip('', name, capacity, date, tripRouteList, type, staff, seatsTaken );

    }

    composeEmptyTrip() {

        const date = new Date()
        let tripRoute: [string];
        let staff: [string];

        return new Trip('', '' ,25, date, tripRoute, 'default', staff, 0);
    }

}
import { Injectable } from '@angular/core';
import { Address } from '../structures/Address';
import { TripManifest } from '../structures/TripManifest';
import { Trip } from '../structures/Trip'
import { TripGroup } from '../structures/TripGroup'

@Injectable()
export class TripFactory {
    /**This function will contrusct an employee from a json from the database. */


    composeTripFromDB(json: any): Trip {
        const data = json.data();
        
        // Create the manifest 
        if (data.manifest) {
            const tripGroupsJSON = data.manifest.participants;

            let tripGroups: [TripGroup]
            for (let entry of tripGroupsJSON) {
                var tripGroup = new TripGroup(entry.customerID, entry.customerName, entry.guests);
                tripGroups.push(tripGroup);
            }
            const tripManifest = new TripManifest(tripGroups, data.manifest.size)
            
            return new Trip(json.id, data.capacity, data.date, data.tripRoute, data.typeOfTrip, data.staff, tripManifest);
        }

        else {
            return new Trip(json.id, data.capacity, data.date, data.tripRoute, data.typeOfTrip, data.staff);
        }


    }

    composeNewTrip(capacity: number, date: Date, tripRouteList: [string], staff: [string], type: string): Trip {

        return new Trip('', capacity, date, tripRouteList, type, staff);

    }

    composeEmptyTrip() {

        const date = new Date()
        let participants: [TripGroup];

        const manifest = new TripManifest(participants, 0)
        let tripRoute: [string];
        let staff: [string];

        return new Trip('', 25, date, tripRoute, 'default', staff);
    }

}
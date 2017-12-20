import { Injectable } from '@angular/core';
import { Address } from '../structures/Address';
import { TripManifest } from '../structures/TripManifest';
import { TripRoute } from '../structures/TripRoute';
import { Trip } from '../structures/Trip'
import { TripGroup } from '../structures/TripGroup'

@Injectable()
export class TripFactory {
    /**This function will contrusct an employee from a json from the database. */
    composeTrip(json: any): Trip {
        const data = json.data();
        // Create the manifest
        const tripGroupsJSON = data.manifest.participants;
        let tripGroups: [TripGroup];
        for (let entry of tripGroupsJSON) {
            var tripGroup = new TripGroup(entry.customerID, entry.customerName, entry.guests);
            tripGroups.push(tripGroup);
        }
        const tripManifest = new TripManifest(tripGroups, data.manifest.size);

        const tripDate = new Date();
        const tripRoute = new TripRoute(data.tripRoute);

        return new Trip(data.id, data.capacity, tripDate, tripManifest, tripRoute , data.type, data.staff);
    }

}
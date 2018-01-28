import { Injectable } from '@angular/core';
import { Address } from '../structures/Address';
import { Trip } from '../structures/Trip'
import { TripGroup } from '../structures/TripGroup'



@Injectable()
export class TripGroupFactory {
    /**This function will contrusct an employee from a json from the database. */


    composeTripFromDB(json: any): TripGroup {
        const data = json.data();

        return new TripGroup(
            json.tripId,
            data.customerId,
            data.customerName,
            data.guests,
            data.size,
            data.emergencyContactName,
            data.emergencyContactNumber,
            data.tripGroupId)
    }

    composeNewTrip(tripId: string, customerId: string, customerName: string, guests: [string], size: number,
        emergencyContactName: string, emergencyContactNumber: string, tripGroupId: string): TripGroup {

        return new TripGroup(
            tripId,
            customerId,
            customerName,
            guests,
            size,
            emergencyContactName,
            emergencyContactNumber,
            tripGroupId)
    }

    NewTripTemplate(json: any): TripGroup {
        

        

        return new TripGroup(json.tripId, json.customerId, json.customerName, json.guests,
            0, '', '')
    }
}
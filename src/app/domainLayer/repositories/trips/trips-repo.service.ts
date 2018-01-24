import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Trip } from '../../structures/Trip';
import { TripGroup } from '../../structures/TripGroup';
import { TripManifest } from '../../structures/TripManifest';

import { TripFactory } from '../../factories/tripFactory';



@Injectable()
export class TripsRepoService {

  private tripsCollection: AngularFirestoreCollection<Trip>;

  constructor(db: AngularFirestore, private factory: TripFactory) {
    this.tripsCollection = db.collection('trips')
  }

  /**This function will add a new trip to the database if trip was successful. */
  addNewTrip(tripDetails: Trip): void {
    this.tripsCollection.add(this.parseTripToJSON(tripDetails));
  }


  /**This function will edit a trip date */
  editTrip(tripDetails: Trip): void {

    this.getSpecificTrip(tripDetails.id).subscribe(trip => {


      this.tripsCollection.doc(tripDetails.id).update(this.parseTripToJSON(tripDetails));
    });

  }






  /**This function will edit a trip max capacity */
  addBussesToTheTrip(addedCapacity: number, tripId: string): void {

    this.getSpecificTrip(tripId).subscribe(trip => {
      var maxCapacity = trip.capacity
      var newMaxCapacity = maxCapacity + addedCapacity;
      trip.capacity = newMaxCapacity;
      this.tripsCollection.doc(tripId).update(this.parseTripToJSON(trip));
    });



  }



  /**This function will edit a trip date */
  editTripDate(newDate: Date, tripId: string): void {

    this.getSpecificTrip(tripId).subscribe(trip => {

      trip.date = newDate;
      this.tripsCollection.doc(tripId).update(this.parseTripToJSON(trip));
    });

  }

  /**This function will add a group to the trip */
  addGroupToTrip(tripGroup: TripGroup, tripId: string): void {
    this.getSpecificTrip(tripId).subscribe(trip => {

      trip.manifest.participants.push(this.parseTripGroupToJSON(tripGroup));
      this.tripsCollection.doc(tripId).update(this.parseTripToJSON(trip));
    });

  }

  /**This function will delete a group from the trip */
  deleteGroupFromTrip(customerId: string, tripId: string): void {
    this.getSpecificTrip(tripId).subscribe(trip => {

      var i = 0;
      var tripGroups = trip.manifest.participants;
      var participantsAmmount = trip.manifest.size;
      var tripGroupSizeToRemove = 0;
      var indexOfTripGroupToRemove = -1

      for (let entry of tripGroups) {
        if (entry.customerId == customerId) {
          tripGroupSizeToRemove = entry.guests.length + 1; // The plus one is the leader
          indexOfTripGroupToRemove = i;
        }
        i++;
      }

      if (indexOfTripGroupToRemove != -1) {
        trip.manifest.participants.splice(indexOfTripGroupToRemove, 1);
        trip.manifest.size = trip.manifest.size - tripGroupSizeToRemove;
        this.tripsCollection.doc(tripId).update(this.parseTripToJSON(trip));
      }
      else {
        console.log('Trip Group not found');
      }
    });
  }

  /**This function will add a stop to the trip */
  addStopToTrip(partnerId: string, tripId: string): void {
    this.getSpecificTrip(tripId).subscribe(trip => {

      trip.tripRoute.push(partnerId);
      this.tripsCollection.doc(tripId).update(this.parseTripToJSON(trip));

    });

  }

  /**This function will delete a stop from the trip */
  deleteStopFromTrip(partnerId: string, tripId: string): void {

    this.getSpecificTrip(tripId).subscribe(trip => {

      var tripStopIds = trip.tripRoute;
      var i = 0;
      var indexOfPartnerIdToRemove = -1;

      for (let entry of tripStopIds) {
        if (entry == partnerId) {
          indexOfPartnerIdToRemove = i;
        }
        i++;
      }
      if (indexOfPartnerIdToRemove != -1) {
        trip.tripRoute.splice(indexOfPartnerIdToRemove, 1);
        this.tripsCollection.doc(tripId).update(this.parseTripToJSON(trip));
      }
      else {
        console.log('Trip Stop not found');
      }

    });
  }

  /**This function will add the staff to the trip */
  addStaffToTrip(newStaffId: string, tripId: string): void {
    this.getSpecificTrip(tripId).subscribe(trip => {
      trip.staff.push(newStaffId);
      this.tripsCollection.doc(tripId).update(this.parseTripToJSON(trip));
    });
  }

  /**This function will delete a staff from the trip */
  deleteStaffFromTrip(staffToRemoveId: string, tripId: string): void {
    this.getSpecificTrip(tripId).subscribe(trip => {

      var staffIds = trip.staff;
      var indexOfStaffToRemove = -1;
      var i = 0;

      for (let entry of staffIds) {
        if (entry == staffToRemoveId) {
          indexOfStaffToRemove = i;
        }
        i++;
      }
      if (indexOfStaffToRemove != -1) {
        trip.staff.splice(indexOfStaffToRemove, 1);
        this.tripsCollection.doc(tripId).update(this.parseTripToJSON(trip));
      }
      else {
        console.log('Staff id not found');
      }


    });

  }

  /**This fucntion will query for all trips. */
  getAllTrips(): Observable<Trip[]> {

    return this.tripsCollection.snapshotChanges().map(item => {
      return item.map(data => {
        return this.factory.composeTripFromDB(data.payload.doc);
      });
    });

  }

  /**This fucntion will query for all trips on the given date. */
  getTripByDate(date: Date): Observable<any> {
    return null;
    //TO DOOOOOO
  }

  /**This fucntion will query for the manifest of that trip. */
  getTripManifest(tripId: string): Observable<TripManifest> {
    return this.tripsCollection.doc(tripId).snapshotChanges().map(item => {
      var trip = this.factory.composeTripFromDB(item.payload);
      return trip.manifest;
    })

  }
  /**This fucntion will query for all trips registered to a specific user int the database. */
  getUserTrips(userID: string): Observable<any> {
    return null;

  }
  getSpecificTrip(tripId: string): Observable<Trip> {
    return this.tripsCollection.doc(tripId).snapshotChanges().map(item => {
      return this.factory.composeTripFromDB(item.payload);
    });
  }

  removeTrip(tripId: string): void {
    this.tripsCollection.doc(tripId).ref.delete();
  }


  parseTripToJSON(tripDetails: Trip): any {

    if (tripDetails.manifest) {
      var trip = {
        capacity: tripDetails.capacity,
        date: tripDetails.date,
        manifest: this.parseManifestToJSON(tripDetails.manifest),
        tripRoute: tripDetails.tripRoute,
        typeOfTrip: tripDetails.typeOfTrip,
        staff: tripDetails.staff,

      };
      return trip;
    }
    else {
      var tripWithoutManifest = {
        capacity: tripDetails.capacity,
        date: tripDetails.date,
        tripRoute: tripDetails.tripRoute,
        typeOfTrip: tripDetails.typeOfTrip,
        staff: tripDetails.staff,

      };
      return tripWithoutManifest


    }
  }

  parseManifestToJSON(tripManifestDetails: TripManifest): any {
    var listOfparticipants = []

    for (let tripGroup of tripManifestDetails.participants) {
      listOfparticipants.push(this.parseTripGroupToJSON(tripGroup))
    }


    var tripManifest = {
      participants: listOfparticipants,
      size: tripManifestDetails.size
    }

    return tripManifest;
  }

  parseTripGroupToJSON(tripGroupDetails: TripGroup): any {
    var tripGroupToReturn = {
      customerName: tripGroupDetails.customerName,
      customerId:tripGroupDetails.customerId,
      // guests: tripGroupDetails.guests
    };
    return tripGroupToReturn;
  }

}

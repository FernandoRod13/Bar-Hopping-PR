import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Trip } from '../../structures/Trip';
import { TripFactory } from '../../factories/tripFactory';
import { TripGroup } from '../../structures/TripGroup';

@Injectable()
export class TripsRepoService {

  private tripsCollection: AngularFirestoreCollection<Trip>;

  constructor(db: AngularFirestore, private factory: TripFactory) {
    this.tripsCollection = db.collection('trips')
  }

  /**This function will add a new trip to the database if trip was successful. */
  addNewTrip(tripDetails: Trip): void {
    this.tripsCollection.add(tripDetails.parseToJSON());
  }

  /**This function will edit a trip max capacity */
  addBussesToTheTrip(addedCapacity: number, tripId: string): void {

    this.getSpecificTrip(tripId).subscribe( trip => {
      var maxCapacity = trip.capacity
      var newMaxCapacity = maxCapacity + addedCapacity;
      trip.capacity = newMaxCapacity;
      this.tripsCollection.doc(tripId).update(trip.parseToJSON());
    });
    
    

  }

  /**This function will edit a trip date */
  editTripDate(newDate: Date, tripId: string): void {
    
    this.getSpecificTrip(tripId).subscribe( trip => {
      
      trip.date = newDate;
      this.tripsCollection.doc(tripId).update(trip.parseToJSON());
    });
    
  }

  /**This function will add a group to the trip */
  addGroupToTrip(tripGroup: TripGroup, tripId: string): void {
    this.getSpecificTrip(tripId).subscribe( trip => {
      
      trip.manifest.participants.push(tripGroup.parseToJSON());
      this.tripsCollection.doc(tripId).update(trip.parseToJSON());
    });

  }

  /**This function will delete a group from the trip */
  deleteGroupFromTrip(tripGroup: any, tripDetails: any): void {

  }

  /**This function will add a stop to the trip */
  addStopToTrip(tripStop: any, tripDetails: any): void {

  }

  /**This function will delete a stop from the trip */
  deleteStopFromTrip(tripStop: any, tripDetails: any): void {

  }

  /**This function will add the staff to the trip */
  addStaffToTrip(newStaff: any, tripDetails: any): void {

  }

  /**This function will delete a staff from the trip */
  deleteStaffFromTrip(staffToRemove: any, tripDetails: any): void {

  }

  /**This fucntion will query for all trips. */
  getAllTrips(): Observable<any> {
    return null;

  }

  /**This fucntion will query for all trips on the given date. */
  getTripByDate(date: Date): Observable<any> {
    return null;

  }

  /**This fucntion will query for the manifest of that trip. */
  getTripManifest(tripDetails: any): Observable<any> {
    return null;
  }
  /**This fucntion will query for all trips registered to a specific user int the database. */
  getUserTrips(userID: string): Observable<any> {
    return null;

  }
  getSpecificTrip(tripID: string): Observable<Trip> {
    return this.tripsCollection.doc(tripID).snapshotChanges().map(item => {
      return this.factory.composeTrip(item.payload);
    });
  }

}

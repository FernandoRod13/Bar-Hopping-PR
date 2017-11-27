import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TripsRepoService {

  constructor(db: AngularFirestore) { }
 
  /**This function will add a new trip to the database if trip was successful. */
  addNewTrip(tripDetails: any): void {

  }

  /**This function will edit a trip max capacity */
  editTripCapacity(newCapacity: any): void {
    
  }

  /**This function will edit a trip date */
  editTripDate(newDate: any): void {
    
  }    

  /**This function will add a group to the trip */
  addGroupToTrip(tripGroup: any, tripDetails: any): void {
    
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
  getTripByDate(date:Date): Observable<any> {
    return null;

  }

  /**This fucntion will query for the manifest of that trip. */
  getTripManifest(tripDetails:any):Observable<any> {
    return null;
  }
  /**This fucntion will query for all trips registered to a specific user int the database. */
  getUserTrips(userID: string): Observable<any> {
    return null;
  
  }

  /**This function will query for all trips in the database. */
  getStatement(): Observable<any> {
    
    return null;
  }
}

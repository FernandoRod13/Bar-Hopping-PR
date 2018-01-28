import { Injectable } from '@angular/core';

@Injectable()
export class TripSpecificationsService {

  constructor() { }



  public spaceAvailable(tripCapacity: number, seatsTaken: number, groupSize: number): boolean {

    if (seatsTaken + groupSize > tripCapacity) {
      return false;
    }
    else {
      return true;
      
    }
  }


}

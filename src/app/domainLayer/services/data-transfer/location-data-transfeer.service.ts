import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Location } from './../../structures/Location';
@Injectable()
export class LocationDataTransfeerService {
  private locationSubject = new Subject<Location>();

  constructor() { }

  public locationObservable = this.locationSubject.asObservable();

  public announceLocation(location: Location) {
    this.locationSubject.next(location);
  }

}

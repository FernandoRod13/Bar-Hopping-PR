import { Component, OnInit, OnDestroy } from '@angular/core';
import { TripsRepoService } from './../../../../domainLayer/repositories/trips/trips-repo.service';
import { Trip } from './../../../../domainLayer/structures/Trip';
import { TripFactory } from './../../../../domainLayer/factories/tripFactory'
@Component({
  selector: 'app-trip-manager',
  templateUrl: './trip-manager.component.html',
  styleUrls: ['./trip-manager.component.css']
})
export class TripManagerComponent implements OnInit, OnDestroy {
  private tripListRef: any;
  public tripList: Trip[];
  
  public addingNewTrip: boolean;
  public updatingTrip: boolean;
  public trip: Trip;


  constructor(private repo: TripsRepoService , private factory: TripFactory) { }

  ngOnInit() {
    this.addingNewTrip = false;
    this.updatingTrip = false;
    this.trip = null;
    this.tripListRef = this.repo.getAllTrips().subscribe(trips => {
      this.tripList = trips;

    });
  }

  onShowForm() {
    this.addingNewTrip = !this.addingNewTrip;
  }

  onAddNewTrip() {
    this.updatingTrip = false;
    this.trip = this.factory.composeEmptyTrip();
    this.onShowForm();
  }

  onUpdateTrip(trip: Trip) {
    this.updatingTrip = true;
    this.trip = trip;
    this.onShowForm();
  }

  onSubmitForm(form: any) {
    if (this.updatingTrip) {
      if (form.valid) {
        //this.repo.editPartnerInfo(this.partner);// Have to implement this in a different way
        this.trip = null;
        this.updatingTrip = false;
        this.addingNewTrip = false;
        console.log('update Succefull');
      } else {
        console.log('empty fields');
      }
    } else {
      if (form.valid) {
        //this.repo.addNewTrip(this.trip);
        this.trip = null;
        this.updatingTrip = false;
        this.addingNewTrip = false;
        console.log('Insert Succefull');
      } else {
        console.log('empty fields');
      }

    }
  }


  onRemoveTrip(trip: Trip) {
    this.repo.removeTrip(trip.id);
  }


  ngOnDestroy() {
    this.tripListRef.unsubscribe();
  }

}

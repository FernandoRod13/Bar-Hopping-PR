import { Component, OnInit, OnDestroy } from '@angular/core';
import { TripsRepoService } from './../../../../domainLayer/repositories/trips/trips-repo.service';
import { PartnersRepoService } from './../../../../domainLayer/repositories/partners/partners-repo.service';
import { Trip } from './../../../../domainLayer/structures/Trip';
import { Employee } from './../../../../domainLayer/structures/Employee';
import { Partner } from './../../../../domainLayer/structures/Partner';
import { TripGroup } from './../../../../domainLayer/structures/TripGroup';
import { TripFactory } from './../../../../domainLayer/factories/tripFactory'
import { TripGroupFactory } from './../../../../domainLayer/factories/tripGroupFactory'

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {


  private tripListRef: any;
  private partnerListRef: any;

  private tripList: Trip[];

  private tripGroup: TripGroup;


  private partnerList: Partner[];
  private partnersNames: { [id: string]: string; } = {}

  private payForm: boolean;
  private createTripGroupForm: boolean;
  private showTrips: boolean;
  private trip: any;
  private guestList: string[];


  constructor(private tripsRepo: TripsRepoService,
    private partnerRepo: PartnersRepoService, private factory: TripGroupFactory) { }

  ngOnInit() {

    this.createTripGroupForm = false;
    this.payForm = false;
    this.showTrips = true;
    this.trip = null;
    this.tripGroup = null;

    this.guestList = new Array<string>();
    this.guestList.push('jesus')

    this.tripListRef = this.tripsRepo.getAllTrips().subscribe(trips => {
      this.tripList = trips;
    });

    this.partnerListRef = this.partnerRepo.getAllPartners().subscribe(partners => {
      this.partnerList = partners;

      for (let partner of partners) {

        this.partnersNames[partner.pId] = partner.name;
      }
    });

  }

  onShowTrips() {
    this.createTripGroupForm = false;
    this.payForm = false;
    this.showTrips = true;
  }

  onCreateTripGroup() {
    this.payForm = false;
    this.showTrips = false;
    this.createTripGroupForm = true;
  }

  onPayFormButton() {
    this.createTripGroupForm = false;
    this.showTrips = false;
    this.payForm = true;
  }



  OnCreateTripGroupForm(trip: Trip) {
    console.log(trip);

    this.trip = trip;


    // I Need Customer info to create the TripGroup

    let dataToCreateTripGroup = {
      tripId: trip.id,
      customerId: '',
      customerName: '',
      guests: this.guestList
    }

    this.tripGroup = this.factory.NewTripTemplate(dataToCreateTripGroup)
    this.onCreateTripGroup()
  }

  increaseSifeOfGuestsList() {
    this.guestList.push('Helloo');
  }


  onReserveTripSubmit() {

    console.log(this.tripGroup)

    this.tripGroup.guests = this.guestList;
    this.tripGroup.size = 1 + this.guestList.length

    console.log(this.tripGroup);

    this.onPayFormButton()

  }

  
  onPayFormSubmit() {

    this.onShowTrips()
  }






  ngOnDestroy() {
    this.tripListRef.unsubscribe();
    this.partnerListRef.unsubscribe();
  }

}


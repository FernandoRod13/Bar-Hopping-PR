import { Component, OnInit, OnDestroy } from '@angular/core';
import { TripsRepoService } from './../../../../domainLayer/repositories/trips/trips-repo.service';
import { PartnersRepoService } from './../../../../domainLayer/repositories/partners/partners-repo.service';
import { Trip } from './../../../../domainLayer/structures/Trip';
import { Employee } from './../../../../domainLayer/structures/Employee';
import { Partner } from './../../../../domainLayer/structures/Partner';
import { TripGroup } from './../../../../domainLayer/structures/TripGroup';
import { TripFactory } from './../../../../domainLayer/factories/tripFactory'
import { TripGroupFactory } from './../../../../domainLayer/factories/tripGroupFactory'
import { AuthenticationService } from '../../../../domainLayer/services/authentication/authentication.service'
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  private tripListRef: any;
  private partnerListRef: any;

  private tripList: Trip[];

  private tripGroup: TripGroup;
  private userInfo: any;


  private partnerList: Partner[];
  private partnersNames: { [id: string]: string; } = {}

  private payForm: boolean;
  private createTripGroupForm: boolean;
  private showTrips: boolean;
  private trip: any;
  private guestList: any;


  constructor(private tripsRepo: TripsRepoService,private auth: AuthenticationService,
    private partnerRepo: PartnersRepoService, private factory: TripGroupFactory) { }

  ngOnInit() {

    this.createTripGroupForm = false;
    this.payForm = false;
    this.showTrips = true;
    this.trip = null;
    this.tripGroup = null;

    this.guestList = new Array<any>();
    this.guestList = [{name: "helloo"}]

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

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.guestList.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(guest: any): void {
    let index = this.guestList.indexOf(guest);

    if (index >= 0) {
      this.guestList.splice(index, 1);
    }
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

    

    // this.auth.getUserInfo().subscribe( data => function(data){
    //   this.userInfo = data;
    //   console.log(data);

    // });

    let dataToCreateTripGroup = {
      tripId: trip.id,
      customerId: '',
      customerName: '', //this.userInfo.firstName + this.userInfo.lasttName,
      guests: this.guestList
    }
    // I Need Customer info to create the TripGroup
    this.tripGroup = this.factory.NewTripTemplate(dataToCreateTripGroup)
    this.onCreateTripGroup()
   
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


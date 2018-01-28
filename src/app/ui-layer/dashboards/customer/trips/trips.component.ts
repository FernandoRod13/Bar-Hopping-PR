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
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { TripSpecificationsService } from './../../../../domainLayer/specifications/trip-specifications.service'

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit, OnDestroy {

  visible = true;
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
  private partnersNames: { [id: string]: string; } = {};
  public payForm: boolean;
  public createTripGroupForm: boolean;
  public showTrips: boolean;
  private trip: any;
  public guestList: any = []
  public priceToPay = (this.guestList.length * 25) + 25
  public wrongForm = false;
  public errorMessage = ''



  constructor(
    private tripsRepo: TripsRepoService,
    private auth: AuthenticationService,
    private partnerRepo: PartnersRepoService,
    private factory: TripGroupFactory,
    private router: Router, 
    private specifications: TripSpecificationsService
  ) { }

  ngOnInit() {

    this.createTripGroupForm = false;
    this.payForm = false;
    this.showTrips = true;
    this.trip = null;
    this.tripGroup = null;
    

    this.guestList = new Array<any>();

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
    const input = event.input;
    const value = event.value;

    // Add our guest
    if ((value || '').trim()) {
      this.guestList.push({ name: value.trim() });
      this.priceToPay += 25;

      if(this.specifications.spaceAvailable(this.trip.capacity, this.trip.seatsTaken, this.guestList.length + 1 )){
        //Its ok
      }
      else{
        this.wrongForm = true;
        this.errorMessage = 'There is no space available';
      }

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(guest: any): void {
    const index = this.guestList.indexOf(guest);

    if (index >= 0) {
      this.guestList.splice(index, 1);
      this.priceToPay -= 25;
      if(this.specifications.spaceAvailable(this.trip.capacity, this.trip.seatsTaken, this.guestList.length + 1 )){
        this.wrongForm = false;
      }
      else{
        
      }
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
    
    this.trip = trip;

    this.auth.getUserInfo().subscribe(data => {
    
      const dataToCreateTripGroup = {
        tripId: trip.id,
        customerId: data.uid,
        customerName: data.firstName + ' ' + data.lastName,
        guests: this.guestList
      };
      // I Need Customer info to create the TripGroup
      this.tripGroup = this.factory.NewTripTemplate(dataToCreateTripGroup);
      this.onCreateTripGroup();
    });
  }



  onReserveTripSubmit() {
    this.tripGroup.guests = this.guestList;
    this.tripGroup.size = 1 + this.guestList.length;
    console.log(this.tripGroup);

    this.onPayFormButton();
  }

  onPayFormSubmit() {
    this.tripsRepo.addNewTripGroup(this.tripGroup)
    this.router.navigate(['/dashboard/confirmation']);

  }

  ngOnDestroy() {
    this.tripListRef.unsubscribe();
    this.partnerListRef.unsubscribe();
  }

}


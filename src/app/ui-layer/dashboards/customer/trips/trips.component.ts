import { Component, OnInit, OnDestroy } from '@angular/core';
import { TripsRepoService } from './../../../../domainLayer/repositories/trips/trips-repo.service';
import { PartnersRepoService } from './../../../../domainLayer/repositories/partners/partners-repo.service';
import { EmployeesRepoService } from './../../../../domainLayer/repositories/employees/employees-repo.service';
import { Trip } from './../../../../domainLayer/structures/Trip';
import { Employee } from './../../../../domainLayer/structures/Employee';
import { Partner } from './../../../../domainLayer/structures/Partner';
import { TripFactory } from './../../../../domainLayer/factories/tripFactory'

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {


  private tripListRef: any;
  private partnerListRef: any;
  
  private tripList: Trip[];
  


  private partnerList: Partner[];
  private partnersNames: { [id: string]: string; } = {}

  private payForm: boolean;
  private reserveTrip: boolean;
  private showTrips: boolean;
  
  private trip: any;


  constructor(private tripsRepo: TripsRepoService, private employeeRepo: EmployeesRepoService,
    private partnerRepo: PartnersRepoService, private factory: TripFactory) { }

  ngOnInit() {
    
    this.reserveTrip = false;
    this.payForm = false;
    this.showTrips = true;
    this.trip = null;
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
    this.reserveTrip = false;
    this.payForm = false;
    this.showTrips = true;

  }

  onReserveTripButton(){
    this.reserveTrip = true;
    this.showTrips = false;
    this.payForm = false;
  }

  onReserveTrip(){





    this.reserveTrip = false;
    this.payForm = false;
    this.showTrips = true;
  }




  ngOnDestroy() {
    this.tripListRef.unsubscribe();
    this.partnerListRef.unsubscribe();
  }

}


import { Component, OnInit, OnDestroy } from '@angular/core';
import { TripsRepoService } from './../../../../domainLayer/repositories/trips/trips-repo.service';
import { PartnersRepoService } from './../../../../domainLayer/repositories/partners/partners-repo.service';
import { EmployeesRepoService } from './../../../../domainLayer/repositories/employees/employees-repo.service';
import { Trip } from './../../../../domainLayer/structures/Trip';
import { Employee } from './../../../../domainLayer/structures/Employee';
import { Partner } from './../../../../domainLayer/structures/Partner';
import { TripFactory } from './../../../../domainLayer/factories/tripFactory'
@Component({
  selector: 'app-trip-manager',
  templateUrl: './trip-manager.component.html',
  styleUrls: ['./trip-manager.component.css']
})
export class TripManagerComponent implements OnInit, OnDestroy {
  private tripListRef: any;
  private partnerListRef: any;
  private employeesRef: any;


  private tripList: Trip[];
  private employeesList: Employee[];
  private employeesNames: { [id: string]: string; } = {};


  private partnerList: Partner[];
  private partnersNames: { [id: string]: string; } = {};

  public addingNewTrip: boolean;
  public updatingTrip: boolean;
  public showTrips: boolean;
 
  private trip: any;


  constructor(private tripsRepo: TripsRepoService, private employeeRepo: EmployeesRepoService,
    private partnerRepo: PartnersRepoService, private factory: TripFactory) { }

  ngOnInit() {
    this.addingNewTrip = false;
    this.updatingTrip = false;
    
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

    this.employeesRef = this.employeeRepo.getAllEmployees().subscribe(employees => {
      this.employeesList = employees;

      for (let employee of employees) {

        this.employeesNames[employee.eId] = employee.firstName;
      }
    });
  }

  onAddNewTrip() {
    this.addingNewTrip = true;
    this.updatingTrip = false;
    this.showTrips = false;
    
    this.trip = this.factory.composeEmptyTrip();
  }

  onShowTrips() {
    this.addingNewTrip = false;
    this.updatingTrip = false;
    this.showTrips = true;
    

  }


  onUpdateTrip(trip: Trip) {

    this.updatingTrip = true;
    this.showTrips = false;
    this.addingNewTrip = false;
    this.trip = trip;
  }



  onSubmitAddingTrip(form: any) {
    if (form.valid) {


      const dateToUse = new Date(this.trip.date)

      const trip = this.factory.composeNewTrip(this.trip.name, this.trip.capacity, dateToUse, this.trip.tripRoute,
        this.trip.staff, this.trip.typeOfTrip, this.trip.seatsTaken)


      this.tripsRepo.addNewTrip(trip);
      console.log('Insert succesfull');
      this.trip = null;
      this.updatingTrip = false;
      this.addingNewTrip = false;
      this.showTrips = true;
      

    } else {
      console.log('empty fields');
    }

  }



  onSubmitEditTrip(form: any) {
    if (form.valid) {

      console.log(form);
      console.log("trp");
      console.log(this.trip);
      this.tripsRepo.editTrip(this.trip)
      console.log('edit succesfull');

      this.updatingTrip = false;
      this.addingNewTrip = false;
      this.showTrips = true;
      
      this.trip = null;

    } else {
      console.log('empty fields');
    }

  }

  onRemoveTrip(trip: Trip) {
    this.tripsRepo.removeTrip(trip.id);
  }


  ngOnDestroy() {
    this.tripListRef.unsubscribe();
    this.partnerListRef.unsubscribe();
    this.employeesRef.unsubscribe();
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { TripsRepoService } from './../../../../domainLayer/repositories/trips/trips-repo.service';
import { Trip } from './../../../../domainLayer/structures/Trip';
@Component({
  selector: 'app-trip-manager',
  templateUrl: './trip-manager.component.html',
  styleUrls: ['./trip-manager.component.css']
})
export class TripManagerComponent implements OnInit, OnDestroy {
  private tripListRef: any;
  public tripList: Trip[];
  constructor(private repo: TripsRepoService) { }

  ngOnInit() {
    this.tripListRef = this.repo.getAllTrips().subscribe(trips => {
      this.tripList = trips;
    });
  }

  ngOnDestroy() {
    this.tripListRef.unsubscribe();
  }

}

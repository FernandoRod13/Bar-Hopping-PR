import { Component, OnInit, OnDestroy } from '@angular/core';
import { PartnersRepoService } from './../../../../domainLayer/repositories/partners/partners-repo.service';
import { Observable } from 'rxjs/Observable';
import { Partner } from './../../../../domainLayer/structures/Partner';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit, OnDestroy {

  private partnersRef: any;
  private partnerList: any;

  public latitude = 18.2194106;
  public longitude = -66.8002616;
  public zoom = 9;
  constructor (
    private repo: PartnersRepoService,
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
    this.partnersRef = this.repo.getAllPartners().subscribe(partners => {
      this.partnerList = partners;
    });
    this.mapsAPILoader.load()
  }




  ngOnDestroy() {
    this.partnersRef.unsubscribe();
  }

}

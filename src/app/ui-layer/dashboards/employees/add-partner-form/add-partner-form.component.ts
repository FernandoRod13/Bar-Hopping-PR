import { Component, OnInit } from '@angular/core';
import { Partner } from '../../../../domainLayer/structures/Partner';
import { PartnerFactory } from './../../../../domainLayer/factories/partnerFactory';
import { LocationDataTransfeerService } from './../../../../domainLayer/services/data-transfer/location-data-transfeer.service';
import { Location } from '@angular/common';
import { GooglePlacesResult } from './../../../../domainLayer/structures/GooglePlacesResult';
import { PartnersRepoService } from './../../../../domainLayer/repositories/partners/partners-repo.service';
@Component({
  selector: 'app-add-partner-form',
  templateUrl: './add-partner-form.component.html',
  styleUrls: ['./add-partner-form.component.css']
})
export class AddPartnerFormComponent implements OnInit {
  public partner: Partner;

  constructor (
    private factory: PartnerFactory,
    private locationData: LocationDataTransfeerService,
    private repo: PartnersRepoService
  ) { }

  ngOnInit() {
    this.partner = this.factory.composeEmptyPartner();
  }

  public recieveLocation (place: GooglePlacesResult) {
    this.partner.location = place.location;
    this.partner.name = place.name;
    this.partner.phone = place.phone;
    this.partner.website = place.website;
  }

  public submit() {
    this.repo.addNewPartner(this.partner).then(() => {
      console.log("added");
    }) ;
  }


}

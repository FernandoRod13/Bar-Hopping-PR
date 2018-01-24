import { Component, OnInit } from '@angular/core';
import { Partner } from '../../../../domainLayer/structures/Partner';
import { PartnerFactory } from './../../../../domainLayer/factories/partnerFactory';
import { LocationDataTransfeerService } from './../../../../domainLayer/services/data-transfer/location-data-transfeer.service';
@Component({
  selector: 'app-add-partner-form',
  templateUrl: './add-partner-form.component.html',
  styleUrls: ['./add-partner-form.component.css']
})
export class AddPartnerFormComponent implements OnInit {
  public partner: Partner;

  constructor (
    private factory: PartnerFactory,
    private locationData: LocationDataTransfeerService
  ) { }

  ngOnInit() {
    this.partner = this.factory.composeEmptyPartner();
    this.locationData.locationObservable.subscribe( location => {
      if (location != null) {
        console.log(location);
      }
    });
  }



}

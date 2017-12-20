import { Component, OnInit, OnDestroy } from '@angular/core';
import { PartnersRepoService } from './../../../../domainLayer/repositories/partners/partners-repo.service';
import { Partner } from './../../../../domainLayer/structures/Partner';
import { PartnerFactory } from './../../../../domainLayer/factories/partnerFactory';
@Component({
  selector: 'app-partner-manager',
  templateUrl: './partner-manager.component.html',
  styleUrls: ['./partner-manager.component.css']
})
export class PartnerManagerComponent implements OnInit, OnDestroy {
  public partnerList: Partner[];
  private partnerListRef: any;
  public addingNewPartner: boolean;
  public updatingData: boolean;
  public partner: Partner;
  constructor( private repo: PartnersRepoService, private factory: PartnerFactory) { }

  ngOnInit() {
    this.addingNewPartner = false;
    this.updatingData = false;
    this.partner = null;
    this.partnerListRef = this.repo.getAllPartners().subscribe( partners => {
      this.partnerList = partners;
    });
  }

  ngOnDestroy() {
    this.partnerListRef.unsubscribe();
  }

  onShowForm() {
    this.addingNewPartner = !this.addingNewPartner;
  }

  onAddNewPartner() {
    this.updatingData = false;
    this.partner = this.factory.composeEmptyPartner();
    this.onShowForm();
  }

  onUpdatePartner(partner: Partner) {
    this.updatingData = true;
    this.partner = partner;
    this.onShowForm();
  }

  onSubmitForm(form: any) {
    this.updatingData = false;
    console.log('submitted');
  }


}

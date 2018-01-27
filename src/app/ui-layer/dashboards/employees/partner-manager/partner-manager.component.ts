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
  public partnerFormHidden: boolean;
  public selectedPartner: Partner;
  constructor(private repo: PartnersRepoService, private factory: PartnerFactory) { }

  
  ngOnInit() {
    this.partnerFormHidden = true;
    this.selectedPartner = null;
    this.partnerListRef = this.repo.getAllPartners().subscribe(partners => {
      this.partnerList = partners;
    });
  }

  ngOnDestroy() {
    this.partnerListRef.unsubscribe();
  }

  showPartnerForm() {
    this.partnerFormHidden = false;
  }

  hidePartnerForm() {
    this.partnerFormHidden = true;
  }

  onUpdatePartner(partner: Partner) {
    this.selectedPartner = partner;
    this.showPartnerForm();
  }

  onAddNewPartner() {
    this.selectedPartner = null;
    this.showPartnerForm();
  }

  onRemovePartner(part: Partner) {
    this.repo.removePartner(part);
  }

  public monitorCancel(cancel: boolean) {
    this.hidePartnerForm();
  }


}

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
  constructor(private repo: PartnersRepoService, private factory: PartnerFactory) { }

  
  ngOnInit() {
    this.addingNewPartner = false;
    this.updatingData = false;
    this.partner = null;
    this.partnerListRef = this.repo.getAllPartners().subscribe(partners => {
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
    if (this.updatingData) {
      if (form.valid) {
        this.repo.editPartnerInfo(this.partner);
        this.partner = null;
        this.updatingData = false;
        this.addingNewPartner = false;
        console.log('update Succefull');
      } else {
        console.log('empty fields');
      }
    } else {
      if (form.valid) {
        this.repo.addNewPartner(this.partner);
        this.partner = null;
        this.updatingData = false;
        this.addingNewPartner = false;
        console.log('Insert Succefull');
      } else {
        console.log('empty fields');
      }

    }
  }

  onRemovePartner(part: Partner) {
    this.repo.removePartner(part);
  }


}

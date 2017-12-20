import { Component, OnInit, OnDestroy } from '@angular/core';
import { PartnersRepoService} from './../../domainLayer/repositories/partners/partners-repo.service';
import { Observable } from 'rxjs/Observable';
import { Partner } from './../../domainLayer/structures/Partner';
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit, OnDestroy {
  
  private partnersRef: any;
  

  constructor(private repo: PartnersRepoService) { }

  ngOnInit() {
    this.partnersRef = this.repo.getAllPartners().subscribe();
    console.log(this.partnersRef);
  }
  ngOnDestroy() {
    this.partnersRef.unsubscribe();
  }

}

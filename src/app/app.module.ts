import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { CustomersRepoService } from './repositories/customers/customers-repo.service';
import { EmployeesRepoService } from './repositories/employees/employees-repo.service';
import { PartnersRepoService } from './repositories/partners/partners-repo.service';
import { TransactionsRepoService } from './repositories/transactions/transactions-repo.service';
import { TripsRepoService } from './repositories/trips/trips-repo.service';

import { LocationService } from './domainLayer/services/location/location.service'
import { TransactionsService } from './domainLayer/services/transactions/transactions.service'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [CustomersRepoService, EmployeesRepoService, PartnersRepoService, TransactionsRepoService, TripsRepoService ,
              LocationService, TransactionsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

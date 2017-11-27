import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

import { CustomersRepoService } from './repositories/customers/customers-repo.service';
import { EmployeesRepoService } from './repositories/employees/employees-repo.service';
import { PartnersRepoService } from './repositories/partners/partners-repo.service';
import { TransactionsRepoService } from './repositories/transactions/transactions-repo.service';
import { TripsRepoService } from './repositories/trips/trips-repo.service';
import { AuthenticationService } from './domainLayer/services//authentication/authentication.service';
import { LocationService } from './domainLayer/services/location/location.service';
import { TransactionsService } from './domainLayer/services/transactions/transactions.service';
import { EmployeeFactory } from './domainLayer/factories/employeeFactory';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [CustomersRepoService, EmployeesRepoService, PartnersRepoService, TransactionsRepoService, TripsRepoService ,
              LocationService, TransactionsService, AuthenticationService, EmployeeFactory],
  bootstrap: [AppComponent]
})
export class AppModule { }

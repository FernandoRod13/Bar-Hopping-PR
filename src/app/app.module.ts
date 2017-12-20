import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material.module';
import { RoutingModule } from './app-routing.module';

import { CustomersRepoService } from './domainLayer/repositories/customers/customers-repo.service';
import { EmployeesRepoService } from './domainLayer/repositories/employees/employees-repo.service';
import { PartnersRepoService } from './domainLayer/repositories/partners/partners-repo.service';
import { TransactionsRepoService } from './domainLayer/repositories/transactions/transactions-repo.service';
import { TripsRepoService } from './domainLayer/repositories/trips/trips-repo.service';
import { AuthenticationService } from './domainLayer/services//authentication/authentication.service';
import { LocationService } from './domainLayer/services/location/location.service';
import { TransactionsService } from './domainLayer/services/transactions/transactions.service';
import { UserFactory } from './domainLayer/factories/userFactory';
import { PartnerFactory } from './domainLayer/factories/partnerFactory';
import { TransactionFactory } from './domainLayer/factories/transactionFactory';
import { LoginComponent } from './ui-layer/authentication/login/login.component';
import { HomePageComponent } from './ui-layer/homePage/homePage.component';
import { PartnersComponent } from './ui-layer/partners/partners.component';
import { TripsComponent } from './ui-layer/trips/trips.component';
import { AccountComponent } from './ui-layer/account/account.component';
import { CreateAccountComponent } from './ui-layer/authentication/create-account/create-account.component';
import { EmployeeManagerComponent } from './ui-layer/dashboards/employees/employee-manager/employee-manager.component';
import { EmployeeContainerComponent } from './ui-layer/dashboards/employees/employee-container/employee-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    PartnersComponent,
    TripsComponent,
    AccountComponent,
    CreateAccountComponent,
    EmployeeManagerComponent,
    EmployeeContainerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RoutingModule
  ],
  providers: [
    CustomersRepoService,
    EmployeesRepoService,
    PartnersRepoService,
    TransactionsRepoService,
    TripsRepoService,
    LocationService,
    TransactionsService,
    AuthenticationService,
    PartnerFactory,
    TransactionFactory,
    UserFactory
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

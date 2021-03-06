import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router/src/router';
import { HomePageComponent } from './ui-layer/homePage/homePage.component';
import { LoginComponent } from './ui-layer/authentication/login/login.component';
import { CreateAccountComponent } from './ui-layer/authentication/create-account/create-account.component';
import { PartnersComponent } from './ui-layer/dashboards/customer/partners/partners.component';
import { TripsComponent } from './ui-layer/dashboards/customer/trips/trips.component';
import { AccountComponent } from './ui-layer/dashboards/account/account.component';
import { EmployeeManagerComponent } from './ui-layer/dashboards/employees/employee-manager/employee-manager.component';
import { EmployeeContainerComponent } from './ui-layer/dashboards/employees/employee-container/employee-container.component';
import { PartnerManagerComponent } from './ui-layer/dashboards/employees/partner-manager/partner-manager.component';
import { TripManagerComponent } from './ui-layer/dashboards/employees/trip-manager/trip-manager.component';
import { AuthGuardService } from './domainLayer/services/authentication/auth-guard.service';
import { LogInEmployeeComponent } from './ui-layer/authentication/log-in-employee/log-in-employee.component';
import { ConfirmationComponent } from './ui-layer/dashboards/customer/confirmation/confirmation.component'
import { CustomerContainerComponent} from './ui-layer/dashboards/customer/customer-container/customer-container.component';
import { ContactComponent} from './ui-layer/dashboards/customer/contact/contact.component';
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'login-employee', component: LogInEmployeeComponent },
    { path: 'home', component: HomePageComponent },
    // { path: 'catalogue', component: PartnersComponent },
    // { path: 'trips', component: TripsComponent },
    // { path: 'account', component: AccountComponent },
    // { path: 'partners', component: PartnersComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'dashboard', redirectTo: '/dashboard/catalogue', pathMatch: 'full'},
    { path: 'dashboard', canActivate: [AuthGuardService], component: CustomerContainerComponent, children: [
        { path: 'trips', component: TripsComponent },
        { path: 'catalogue', component: PartnersComponent },
        { path: 'account', component: AccountComponent },
        { path: 'confirmation', component: ConfirmationComponent },
        { path: 'contact', component: ContactComponent }
    ]},
    { path: 'employee', redirectTo: '/employee/hr', pathMatch: 'full'},
    { path: 'employee', canActivate: [AuthGuardService], component: EmployeeContainerComponent, children: [
        { path: 'account', component: AccountComponent },
        { path: 'hr', component: EmployeeManagerComponent },
        { path: 'partners', component: PartnerManagerComponent },
        { path: 'trips', component: TripManagerComponent },
    ]},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {}

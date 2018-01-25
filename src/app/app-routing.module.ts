import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router/src/router';
import { HomePageComponent } from './ui-layer/homePage/homePage.component';
import { LoginComponent } from './ui-layer/authentication/login/login.component';
import { CreateAccountComponent } from './ui-layer/authentication/create-account/create-account.component';
import { PartnersComponent } from './ui-layer/partners/partners.component';
import { TripsComponent } from './ui-layer/trips/trips.component';
import { AccountComponent } from './ui-layer/account/account.component';
import { EmployeeManagerComponent } from './ui-layer/dashboards/employees/employee-manager/employee-manager.component';
import { EmployeeContainerComponent } from './ui-layer/dashboards/employees/employee-container/employee-container.component';
import { PartnerManagerComponent } from './ui-layer/dashboards/employees/partner-manager/partner-manager.component';
import { TripManagerComponent } from './ui-layer/dashboards/employees/trip-manager/trip-manager.component';
import { AuthGuardService } from './domainLayer/services/authentication/auth-guard.service';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomePageComponent },
    // { path: 'catalogue', component: PartnersComponent },
    // { path: 'trips', component: TripsComponent },
    // { path: 'account', component: AccountComponent },
    // { path: 'partners', component: PartnersComponent },
    { path: 'create-account', component: CreateAccountComponent },
    
    
    { path: 'dashboard', children: [
        { path: 'trips', component: TripsComponent },
        { path: 'catalogue', component: PartnersComponent },
        { path: 'account', component: AccountComponent },
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

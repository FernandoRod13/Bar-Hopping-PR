import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router/src/router';
import { HomePageComponent } from './ui-layer/homePage/homePage.component';
import { LoginComponent } from './ui-layer/authentication/login/login.component';
import { PartnersComponent } from './ui-layer/partners/partners.component';
import { TripsComponent } from './ui-layer/trips/trips.component';
import { AccountComponent } from './ui-layer/account/account.component';
import { EmployeeDashboardComponent } from './ui-layer/dashboards/employee-dashboard/employee-dashboard.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'catalogue', component: PartnersComponent },
    { path: 'trips', component: TripsComponent },
    { path: 'account', component: AccountComponent },
    { path: 'dashboard', children: [
        {path: 'employees', component: EmployeeDashboardComponent}
    ]},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
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

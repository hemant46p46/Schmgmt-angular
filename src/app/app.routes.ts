import { Routes } from '@angular/router';
import { DashboardComponent } from './schmgmt/components/dashboard.component/dashboard.component';
import { LoginComponent } from './schmgmt/components/login.component/login.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

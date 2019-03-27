import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { FlightsComponent } from './flights/flights/flights.component';
import { EditFlightComponent } from './flights/edit-flight/edit-flight.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: <any> LoginComponent,
  },
  {
    path: 'dashboard',
    component: <any> DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'flights',
        pathMatch: 'full',
      },
      {
        path: 'flights',
        component: <any> FlightsComponent,
      },
      {
        path: 'flights/:key',
        component: <any> EditFlightComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

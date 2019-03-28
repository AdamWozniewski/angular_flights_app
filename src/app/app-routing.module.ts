import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { FlightsComponent } from './flights/flights/flights.component';
import { EditFlightComponent } from './flights/edit-flight/edit-flight.component';
import { AuthGuard } from './core/services/auth.guard';
import { WildcardComponent } from './core/wildcard/wildcard.component';

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
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'flights',
        pathMatch: 'full',
      },
      {
        path: 'flights',
        loadChildren: './flights/flights.module#FlightsModule',
      },
    ]
  },
  {
    path: '**',
    component: <any> WildcardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

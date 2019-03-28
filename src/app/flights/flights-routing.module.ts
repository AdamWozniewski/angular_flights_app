import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';

const routes: Routes = [
  {
    path: '',
    component: <any> FlightsComponent,
  },
  {
    path: ':key',
    component: <any> EditFlightComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }

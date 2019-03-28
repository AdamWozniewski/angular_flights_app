import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights/flights.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { MaterialModule } from '../material/material.module';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import { FlightsRoutingModule } from './flights-routing.module';

@NgModule({
  declarations: [FlightsComponent, FlightCardComponent, NewFlightComponent, FlightFormComponent, DetailsComponent, EditFlightComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlightsRoutingModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ // komponenty dynamiczne
    NewFlightComponent, 
    DetailsComponent,
  ],
  exports: [FlightsComponent],
})
export class FlightsModule { }
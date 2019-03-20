import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights/flights.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { MaterialModule } from '../material/material.module';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FlightsComponent, FlightCardComponent, NewFlightComponent, FlightFormComponent],
  imports: [
    CommonModule,
    MaterialModule,

    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [ // komponenty dynamiczne
    NewFlightComponent, 
  ],
  exports: [FlightsComponent],
})
export class FlightsModule { }
import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/core/services/flights.service';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/core/models/Flight';
import { MatDialog } from '@angular/material';
import { NewFlightComponent } from './../new-flight/new-flight.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.styl']
})
export class FlightsComponent {
  private flights$: Observable<Flight[]> = this.flightsService.getFlights() // $ to skrót od .subscribe()
  constructor(
    private flightsService: FlightsService,
    private dialog: MatDialog,
    ) { }

  openNewFlightModal() {
    this.dialog.open(NewFlightComponent); // przekazanie jaki komponent ma zadzialac
  }
}

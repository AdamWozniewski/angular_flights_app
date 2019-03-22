import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { FlightsService } from 'src/app/core/services/flights.service';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.styl']
})
export class NewFlightComponent {
  @ViewChild('flightForm') flightForm: FlightFormComponent;
  constructor(
    private dialogRef: MatDialogRef<NewFlightComponent>,
    private flightService: FlightsService,
    private toast: MatSnackBar,
  ) { }

  createFlight() {
    this.flightService.addFlight(this.flightForm.form.value)
      .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this))
  }
  private onCreatingSuccess() {
    this.toast.open('Lot dodany poprawnie', '', {
      panelClass: 'toast-success'
    })
    this.dialogRef.close();
  }
  private onCreatingFailure(error) {
    this.toast.open(error.message, '', {
      panelClass: 'toast-error'
    });
  }
}

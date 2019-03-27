import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FlightsService } from 'src/app/core/services/flights.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { Flight } from 'src/app/core/models/Flight';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.styl']
})
export class EditFlightComponent implements AfterViewInit {
  @ViewChild('flightForm') flightForm: FlightFormComponent;
  flight: Flight;
  constructor(
    private route: ActivatedRoute,
    private flightService: FlightsService,
    private toast: MatSnackBar,
    private router: Router,
  ) { }
  ngAfterViewInit() {
    this.loadFlight()
  }
  private loadFlight() {
    const key = this.route.snapshot.params['key'];
    this.flightService.getFlight(key)
      .pipe(tap(flight => this.flightForm.setFlight(flight)))
        .subscribe(flight => this.flight = flight);
  }
  editFlight() {
    this.flightService.editFlight(this.flight.key, this.flightForm.form.value)
      .then(() => {
        this.onEditSuccess();
        this.router.navigate(['/dashboard']);
      })
      .catch(() => this.onEditFailure());
  }
  private onEditSuccess() {
    this.toast.open('Edycja udana', '', {
      panelClass: 'toast-success',
    });
  }
  private onEditFailure() {
    this.toast.open('Edycja nieudana', '', {
      panelClass: 'toast-error',
    });
  }

  removeFlight() {
    this.flightService.deleteFlight(this.flight.key)
      .then(() => {
        this.onEditSuccess();
        this.router.navigate(['/dashboard']);
      })
      .catch(() => this.onEditFailure());
  }
}

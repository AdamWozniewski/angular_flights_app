import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Flight } from 'src/app/core/models/Flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.styl'],
  changeDetection: ChangeDetectionStrategy.OnPush, // nasłuchiwanie wydarzen TYLKO w tym komponencie
})
export class FlightCardComponent {
  @Input() flightInput: Flight;
  // constructor(private cd: ChangeDetectorRef) {} // wymuszanie uruchomienie detektorów
}

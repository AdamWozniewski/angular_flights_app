import { Component, OnInit, Input } from '@angular/core';
import { Flight } from 'src/app/core/models/Flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.styl']
})
export class FlightCardComponent {
  @Input() flightInput: Flight;
}

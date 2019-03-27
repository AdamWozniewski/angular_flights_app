import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flight } from './../models/Flight';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private API_URL = 'flights';

  constructor(private db: AngularFireDatabase) {}

  getFlights(): Observable<Flight[]> {
    return this.db.list<Flight>(this.API_URL).snapshotChanges()
      .pipe(map(response => response.map(fligh => this.assignKey(fligh))));
  }

  addFlight(flight: Flight) {
    return this.db.list<Flight>(this.API_URL).push(flight);
  }

  private assignKey(flight) {
    return {...flight.payload.val(), key: flight.key};
  }

  getFlight(id: string): Observable<Flight> {
    return this.db.object<Flight>(`${this.API_URL}/${id}`)
      .snapshotChanges()
      .pipe(map(flight => this.assignKey(flight)));
  }

  editFlight(key: string, flight: Flight) {
    return this.db.object<Flight>(`${this.API_URL}/${key}`).update(flight);
  }

  deleteFlight(key: string) {
    return this.db.object<Flight>(`${this.API_URL}/${key}`).remove();
  }
}

import { Component, OnInit, Input, Inject } from '@angular/core';
import { Flight } from 'src/app/core/models/Flight';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.styl']
})
export class DetailsComponent {
  flight: Flight;
  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<DetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Flight,
  ) {
    this.flight = data;
  }
  closeDialog() {
    this.dialogRef.close();
  }
  gotToEditFlight() {
    this.closeDialog();
    this.router.navigate(['/dashboard/flights', this.flight.key]);
  }
}

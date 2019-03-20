import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Crew } from 'src/app/core/models/Flight';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.styl']
})
export class FlightFormComponent implements OnInit {
  form: FormGroup;
  jobs = [
    {
      label: 'Stwaredess',
      value: 'stwaredess',
    },
    {
      label: 'Starszy załogant',
      value: 'senior_cabin_crew',
    },
    {
      label: 'Pilot',
      value: 'pilot',
    },
    {
      label: 'Główny pilot',
      value: 'co_pilot',
    },
    {
      label: 'Mechanik pokładowy',
      value: 'mechanic',
    },
  ];
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }
  buildCrewMember() {
    return this.formBuilder.group({
      name: '',
      job: '',
    });
  }
  get crew() {
    return this.form.get('crew') as FormArray;
  }
  addCrewMember() {
    this.crew.push(this.buildCrewMember());
  }
  removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      origin: '',
      destination: '',
      departureTime: '',
      returnTime: '',
      code: '',
      additionalInformation: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array([this.buildCrewMember()])
    });
  }
}

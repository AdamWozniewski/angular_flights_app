import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Crew, Flight } from 'src/app/core/models/Flight';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.styl']
})
export class FlightFormComponent implements OnInit {
  @Input() editMode = false;
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
  buildCrewMember(crewMember: Crew = {} as Crew ) {
    return this.formBuilder.group({
      name: crewMember.name || '',
      job: crewMember.job || '',
    });
  }
  get crew() {
    return this.form.get('crew') as FormArray;
  }
  addCrewMember(crewMember?: Crew) {
    this.crew.push(this.buildCrewMember(crewMember));
  }
  removeCrewMember(i: number) {
    this.crew.removeAt(i);
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      origin: ['', { validators: [Validators.required] }],
      destination: ['', { validators: [Validators.required] }],
      departureTime: ['', { validators: [Validators.required] }],
      returnTime: ['', { validators: [Validators.required] }],
      code: ['SK-', { validators: [Validators.required, Validators.minLength(4), Validators.maxLength(7)] }],
      additionalInformation: '',
      withSKPlanesDiscount: false,
      crew: this.formBuilder.array(this.editMode ? [] : [this.buildCrewMember()])
    });
  }

  setFlight(flight: Flight) {
    const { key, ...formData } = flight;
    this.form.patchValue(formData);
    formData.crew.forEach(crewMember => this.addCrewMember(crewMember))
  }
}

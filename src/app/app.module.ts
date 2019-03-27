import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './material/material.module';
import { CoreModule } from './core/core.module';
import { FlightsModule } from './flights/flights.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase), // inicjalizacja firebase
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    // nasze moduły
    CoreModule,
    MaterialModule,
    FlightsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

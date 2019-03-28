import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { WildcardComponent } from './wildcard/wildcard.component';

@NgModule({
  declarations: [DashboardComponent, LoginComponent, WildcardComponent],

  imports: [
    FormsModule,
    
    CommonModule,
    RouterModule,
    
    MaterialModule,
  ],
  exports: [DashboardComponent, LoginComponent],
})
export class CoreModule { }

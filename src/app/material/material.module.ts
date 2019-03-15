import { NgModule } from '@angular/core';

const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
  disableClose: true,
  width: '700px',
  hasBackdrop: true,
}

import {
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatDialogConfig,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material';

const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
]
@NgModule({
  declarations: [],
  exports: [...MATERIAL_MODULES],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: MAT_DIALOG_GLOBAL_CONFIG,
    },
  ]
})
export class MaterialModule { }

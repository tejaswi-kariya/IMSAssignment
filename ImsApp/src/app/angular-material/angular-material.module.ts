import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [],
  imports: [
    MatCardModule, MatFormFieldModule, MatIconModule, MatToolbarModule, 
    MatAutocompleteModule,  MatSelectModule, MatDialogModule,
    MatTooltipModule, MatListModule, MatInputModule, MatButtonModule, 
    MatGridListModule, MatSnackBarModule,  MatTabsModule, FlexLayoutModule
  ],
  exports: [
    MatCardModule, MatFormFieldModule, MatIconModule, MatToolbarModule, 
    MatAutocompleteModule,  MatSelectModule, MatDialogModule,
    MatTooltipModule, MatListModule, MatInputModule, MatButtonModule, 
    MatGridListModule, MatSnackBarModule,  MatTabsModule, FlexLayoutModule
  ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [ { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }]
})
export class AngularMaterialModule { }

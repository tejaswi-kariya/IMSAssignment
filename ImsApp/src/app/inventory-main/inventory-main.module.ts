import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MatButtonModule } from '@angular/material/button';
import { AddEditInventoryItemComponent } from './add-edit-inventory-item/add-edit-inventory-item.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [InventoryListComponent, AddEditInventoryItemComponent, ConfirmationDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    GridModule, HttpClientModule
  ],
  exports: [AngularMaterialModule],
  entryComponents: [AddEditInventoryItemComponent, ConfirmationDialogComponent],
})
export class InventoryMainModule { }

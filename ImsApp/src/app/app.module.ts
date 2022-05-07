import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AddEditInventoryItemComponent } from './inventory-main/add-edit-inventory-item/add-edit-inventory-item.component';
import { InventoryListComponent } from './inventory-main/inventory-list/inventory-list.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from './inventory-main/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddEditInventoryItemComponent,
    InventoryListComponent,ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    GridModule, HttpClientModule, FormsModule
  ],
  entryComponents: [AddEditInventoryItemComponent, ConfirmationDialogComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

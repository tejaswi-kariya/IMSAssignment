import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MatButtonModule } from '@angular/material/button';
import { AddEditInventoryItemComponent } from './add-edit-inventory-item/add-edit-inventory-item.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';



@NgModule({
  declarations: [InventoryListComponent, AddEditInventoryItemComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [AngularMaterialModule],
  entryComponents: [AddEditInventoryItemComponent],
})
export class InventoryMainModule { }

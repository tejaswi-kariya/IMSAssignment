import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddInventoryItem } from '../inventory-main-constants';

@Component({
  selector: 'app-add-edit-inventory-item',
  templateUrl: './add-edit-inventory-item.component.html',
  styleUrls: ['./add-edit-inventory-item.component.css']
})
export class AddEditInventoryItemComponent implements OnInit {
  
  public isEdit :boolean = false;
  public addInventoryItemReq: AddInventoryItem = new AddInventoryItem();
  public blink : boolean = false;

  constructor(private dialogRef: MatDialogRef<AddEditInventoryItemComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: any) { }

  ngOnInit() {
    if(this.dialogData && this.dialogData.data){
      this.isEdit = true;
      this.addInventoryItemReq = this.dialogData.data;
    }
  }
  
  addInventory(){
    if(this.addInventoryItemReq.name === undefined || this.addInventoryItemReq.inventoryType === undefined || this.addInventoryItemReq.price === undefined ){
      this.blink = true;
      setTimeout(function(){this.blink = false;}.bind(this),1000)
    return
    }
    if (this.addInventoryItemReq) {
      this.dialogRef.close(this.addInventoryItemReq);
    }
  }
}

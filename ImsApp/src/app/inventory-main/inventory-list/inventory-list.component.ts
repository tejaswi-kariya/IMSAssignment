import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { State, process, SortDescriptor } from '@progress/kendo-data-query';
import { AddEditInventoryItemComponent } from '../add-edit-inventory-item/add-edit-inventory-item.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { PaginationObject } from '../inventory-main-constants';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  
  public gridData: GridDataResult = {data: [], total: 0};
  public  state: State = {
    skip: 0, take: 5
  };
  private inventoryList: any[] = [];
  public paginationObject: PaginationObject = new PaginationObject();

  constructor(private httpClient: HttpClient, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getInventoryList();
  }

  getInventoryList() {
    this.httpClient.get('assets/inventoryItemList.json').subscribe((response: any) => {
      this.inventoryList = response;
      this.processData();
    });
  }

  processData(){
    this.gridData = process(this.inventoryList, this.state)
  }

  onPageChange(event: PageChangeEvent) {
    this.state.skip = event.skip;
    this.paginationObject.pageNumber = event.skip / event.take + 1;
    this.paginationObject.pageSize = event.take;
    this.processData();
  }

  sortChange(sort: SortDescriptor[]): void {
    this.state.skip = 0;
    this.state.sort = sort;
    this.processData();
  }

  filterChange(event){
    this.state = event;
    this.processData(); 
  }

  onAddItem(){
    this.dialog.open(AddEditInventoryItemComponent).afterClosed().subscribe((result) => {
      if (result) {
        result['id'] = Math.floor(Math.random() * 100000);
        console.log(result['id'])
        this.openSnackBar('Item succefully added.', '')
        this.inventoryList.push(result);
        this.processData();
      }
    });
  }

  removeItem(item){
    this.dialog.open(ConfirmationDialogComponent,  )
    .afterClosed().subscribe((result) => {
    if (result) {
      let findIndex = this.inventoryList.findIndex(o => o.id == item.id);
      if (findIndex > -1) {
        this.inventoryList.splice(findIndex, 1);
        this.openSnackBar('Succefully deleted.', '')
        this.processData();
      }
     }
    });
    
  }

  editItem(item){
    console.log(item)
    const dialogData = {
      data: JSON.parse(JSON.stringify(item)),
    };
    this.dialog.open(AddEditInventoryItemComponent, 
      {data: dialogData }
    ).afterClosed().subscribe((result) => {
      if (result) {
        let index = this.inventoryList.findIndex(o => o.id === item.id);
        if (index > -1) {
          this.inventoryList[index] = result;
        }
        this.openSnackBar('Succefully updated.', '');
        this.processData();
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 2000 });
  }
}

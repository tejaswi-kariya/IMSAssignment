import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInventoryItemComponent } from './add-edit-inventory-item.component';

describe('AddEditInventoryItemComponent', () => {
  let component: AddEditInventoryItemComponent;
  let fixture: ComponentFixture<AddEditInventoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditInventoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInventoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

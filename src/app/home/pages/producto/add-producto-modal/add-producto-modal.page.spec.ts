import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductoModalPage } from './add-producto-modal.page';

describe('AddProductoModalPage', () => {
  let component: AddProductoModalPage;
  let fixture: ComponentFixture<AddProductoModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

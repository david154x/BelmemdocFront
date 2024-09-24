import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTipoProductoModalPage } from './add-tipo-producto-modal.page';

describe('AddTipoProductoModalPage', () => {
  let component: AddTipoProductoModalPage;
  let fixture: ComponentFixture<AddTipoProductoModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTipoProductoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

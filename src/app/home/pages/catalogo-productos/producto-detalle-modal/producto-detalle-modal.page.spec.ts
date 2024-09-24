import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoDetalleModalPage } from './producto-detalle-modal.page';

describe('ProductoDetalleModalPage', () => {
  let component: ProductoDetalleModalPage;
  let fixture: ComponentFixture<ProductoDetalleModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoDetalleModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

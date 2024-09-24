import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TipoProductoPage } from './tipo-producto.page';

describe('TipoProductoPage', () => {
  let component: TipoProductoPage;
  let fixture: ComponentFixture<TipoProductoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

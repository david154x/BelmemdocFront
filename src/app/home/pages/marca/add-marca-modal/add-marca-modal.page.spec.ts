import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMarcaModalPage } from './add-marca-modal.page';

describe('AddMarcaModalPage', () => {
  let component: AddMarcaModalPage;
  let fixture: ComponentFixture<AddMarcaModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarcaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

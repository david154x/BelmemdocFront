import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoDetalleModalPageRoutingModule } from './producto-detalle-modal-routing.module';

import { ProductoDetalleModalPage } from './producto-detalle-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoDetalleModalPageRoutingModule
  ],
  declarations: [ProductoDetalleModalPage]
})
export class ProductoDetalleModalPageModule {}

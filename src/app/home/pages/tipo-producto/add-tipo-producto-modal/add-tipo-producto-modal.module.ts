import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddTipoProductoModalPageRoutingModule } from './add-tipo-producto-modal-routing.module';

import { AddTipoProductoModalPage } from './add-tipo-producto-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTipoProductoModalPageRoutingModule
  ],
  declarations: [AddTipoProductoModalPage]
})
export class AddTipoProductoModalPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddProductoModalPageRoutingModule } from './add-producto-modal-routing.module';

import { AddProductoModalPage } from './add-producto-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddProductoModalPageRoutingModule
  ],
  declarations: [AddProductoModalPage]
})
export class AddProductoModalPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMarcaModalPageRoutingModule } from './add-marca-modal-routing.module';

import { AddMarcaModalPage } from './add-marca-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMarcaModalPageRoutingModule
  ],
  declarations: [AddMarcaModalPage]
})
export class AddMarcaModalPageModule {}

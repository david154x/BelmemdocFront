import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatalogoProductosPageRoutingModule } from './catalogo-productos-routing.module';

import { CatalogoProductosPage } from './catalogo-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogoProductosPageRoutingModule
  ],
  declarations: [CatalogoProductosPage]
})
export class CatalogoProductosPageModule {}

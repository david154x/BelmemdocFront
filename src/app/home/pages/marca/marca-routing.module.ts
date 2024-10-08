import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcaPage } from './marca.page';

const routes: Routes = [
  {
    path: '',
    component: MarcaPage
  },  {
    path: 'add-marca-modal',
    loadChildren: () => import('./add-marca-modal/add-marca-modal.module').then( m => m.AddMarcaModalPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcaPageRoutingModule {}

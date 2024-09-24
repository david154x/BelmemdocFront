import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TipoProductoService } from '../../../services/tipo-producto.service';
import { TipoProductoDTO } from './tipo-producto.dto';
import { AddTipoProductoModalPage } from './add-tipo-producto-modal/add-tipo-producto-modal.page';

@Component({
  selector: 'app-tipo-producto',
  templateUrl: './tipo-producto.page.html',
  styleUrls: ['./tipo-producto.page.scss'],
})
export class TipoProductoPage implements OnInit {

  tipoProductoDTO : TipoProductoDTO[] = [];

  constructor(
    private tipoProductoService: TipoProductoService,
    private alertController: AlertController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.loadTiposProductos();
  }

  loadTiposProductos() {
    this.tipoProductoService.getTiposDeProductos().subscribe({
      next: (data) => {
        this.tipoProductoDTO = data;
      },
      error: (err) => {
        console.error('Error al cargar marcas:', err);
      },
    });
  }

  async openAddTipoProductoModal() {
    const modal = await this.modalController.create({
      component: AddTipoProductoModalPage,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data === 'refresh') {
        this.loadTiposProductos();
      }
    });

    return await modal.present();
  }

  async deleteTipoProducto(id: number) {
    
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas eliminar este tipo de producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.tipoProductoService.deleteTipoProducto(id).subscribe({
              next: () => {
                this.tipoProductoDTO = this.tipoProductoDTO.filter(tipoProducto => tipoProducto.idTipoProducto !== id);
                this.loadTiposProductos();
              },
              error: (err) => {
                console.error('Error al eliminar tipo de producto:', err);
              }
            });
          },
        },
      ],
    });
  
    await alert.present();
  }

}

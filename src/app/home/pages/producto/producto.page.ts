import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ProductoCreateDTO } from './producto-create.dto';
import { ProductoDTO } from './producto.dto';
import { ProductoService } from 'src/app/services/producto.service';

import { AddProductoModalPage } from './add-producto-modal/add-producto-modal.page'; 

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  productos: ProductoDTO[] = [];

  marcas: any[] = []; 

  tiposProducto: any[] = [];

  constructor(
    private productoService : ProductoService,
    
    private alertController: AlertController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.loadProductos();
  }

  loadProductos() {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
      },
      error: (err) => {
        console.error('Error al cargar marcas:', err);
      },
    });
  }
  
  async openAddProductoModal() {
    const modal = await this.modalController.create({
      component: AddProductoModalPage,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data === 'refresh') {
        this.loadProductos();
      }
    });

    return await modal.present();
  }

  async deleteProducto(id: number) {
    
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas eliminar esta marca?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.productoService.deleteProducto(id).subscribe({
              next: () => {
                this.productos = this.productos.filter(productos => productos.idProducto !== id);
                this.loadProductos();
              },
              error: (err) => {
                console.error('Error al eliminar la marca:', err);
              }
            });
          },
        },
      ],
    });
  
    await alert.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoDetalleModalPage } from './producto-detalle-modal/producto-detalle-modal.page';

@Component({
  selector: 'app-catalogo-productos',
  templateUrl: './catalogo-productos.page.html',
  styleUrls: ['./catalogo-productos.page.scss'],
})
export class CatalogoProductosPage implements OnInit {

  productos!: any;
  productosConImagenes: any[] = [];

  constructor(
    private modalCtrl: ModalController,
    private productoService: ProductoService
  ) { }

  ngOnInit() {
    console.log('Este es el catalogo');
    this.loadProductos();
  }

  loadProductos() {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productosConImagenes = data.map((producto) => {
          return {
            ...producto,
            // Aquí asumimos que ubicacionFoto ya es un string en base64
            ubicacionFoto: `data:image/jpeg;base64,${producto.ubicacionFoto}` // Asegúrate de que el tipo MIME sea correcto
          };
        });
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
      },
    });
  }

  
  async verDetalles(producto: any) {
    const modal = await this.modalCtrl.create({
      component: ProductoDetalleModalPage,
      componentProps: {
        producto: producto
      }
    });
    return await modal.present();
  }

}

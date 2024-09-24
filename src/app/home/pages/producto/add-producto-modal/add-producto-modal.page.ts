import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MarcaService } from '../../../../services/marca.service';
import { TipoProductoService } from '../../../../services/tipo-producto.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ProductoCreateDTO } from '../producto-create.dto';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-add-producto-modal',
  templateUrl: './add-producto-modal.page.html',
  styleUrls: ['./add-producto-modal.page.scss'],
})
export class AddProductoModalPage implements OnInit {

  productoCreate: ProductoCreateDTO = {
    idTipoProducto : 0,
    idMarca : 0,
    nombreProducto : '',
    descripcionProducto : '',
    valorProducto : 0,
    ubicacionFoto: ''
  };

  marcas: any[] = []; 

  tiposProducto: any[] = [];

  constructor(
    private modalCtrl: ModalController,
    private marcaService: MarcaService,
    private tipoProductoService: TipoProductoService,
    private productoService: ProductoService
  ) { }

  ngOnInit() {
    console.log();
    this.loadMarcas();
    this.loadTiposProductos();
  }

  loadProductos() {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.marcas = data; // Aquí estás usando el DTO
      },
      error: (err) => {
        console.error('Error al cargar marcas:', err);
      },
    });
  }
  
  loadMarcas() {
    this.marcaService.getMarcas().subscribe({
      next: (data) => {
        this.marcas = data;
      },
      error: (err) => {
        console.error('Error al cargar marcas:', err);
      },
    });
  }

  loadTiposProductos() {
    this.tipoProductoService.getTiposDeProductos().subscribe({
      next: (data) => {
        this.tiposProducto = data;
      },
      error: (err) => {
        console.error('Error al cargar marcas:', err);
      },
    });
  }

  guardarProducto() {
    const producto = {
        // asignar los valores correctamente, por ejemplo:
        idTipoProducto: this.productoCreate.idTipoProducto,
        idMarca: this.productoCreate.idMarca,
        nombreProducto: this.productoCreate.nombreProducto,
        descripcionProducto: this.productoCreate.descripcionProducto,
        valorProducto: this.productoCreate.valorProducto,
        ubicacionFoto: this.productoCreate.ubicacionFoto // Asegúrate de que esto sea un Blob
    };

    this.productoService.addProducto(producto).subscribe({
        next: (response) => {
          this.modalCtrl.dismiss('refresh');
        },
        error: (err) => {
            console.error('Error al agregar el producto:', err);
        }
    });
}

async takePicture() {
  const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Base64,  // Convertimos directamente a base64
    source: CameraSource.Camera
  });

  if (image.base64String) {
    this.productoCreate.ubicacionFoto = image.base64String; // Almacenamos la imagen en base64 en el objeto
  }
}

  dismiss() {
    this.modalCtrl.dismiss();
  }
  

}

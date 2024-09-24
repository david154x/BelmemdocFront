import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TipoProductoService } from '../../../../services/tipo-producto.service';

@Component({
  selector: 'app-add-tipo-producto-modal',
  templateUrl: './add-tipo-producto-modal.page.html',
  styleUrls: ['./add-tipo-producto-modal.page.scss'],
})
export class AddTipoProductoModalPage implements OnInit {

  nombreTipoProducto!: string;

  constructor(
    private modalController: ModalController,
    private tipoProductoService: TipoProductoService

  ) { }

  ngOnInit() {
    console.log('Todo bien');
  }

  closeModal() {
    this.modalController.dismiss();
  }

  addTipoProducto() {
    this.tipoProductoService.addTipoDeProducto(this.nombreTipoProducto).subscribe({
        next: () => {
            this.modalController.dismiss('refresh');
        },
        error: (err) => {
            console.error('Error al agregar la marca:', err);
        }
    });
  }

}

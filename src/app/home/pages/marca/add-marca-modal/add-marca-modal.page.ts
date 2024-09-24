import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MarcaService } from '../../../../services/marca.service';

@Component({
  selector: 'app-add-marca-modal',
  templateUrl: './add-marca-modal.page.html',
  styleUrls: ['./add-marca-modal.page.scss']
})
export class AddMarcaModalPage {
  
  nombreMarca!: string;

  constructor(
    private modalController: ModalController,
    private marcaService: MarcaService
  ) {}

  closeModal() {
    this.modalController.dismiss();
  }

  addMarca() {
    this.marcaService.addMarca(this.nombreMarca).subscribe({
        next: () => {
            this.modalController.dismiss('refresh');
        },
        error: (err) => {
            console.error('Error al agregar la marca:', err);
        }
    });
  }
}

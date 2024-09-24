import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { MarcaService } from '../../../services/marca.service'; 
import { AddMarcaModalPage } from './add-marca-modal/add-marca-modal.page';
import { MarcaDTO } from './marca.dto';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.page.html',
  styleUrls: ['./marca.page.scss'],
})
export class MarcaPage implements OnInit {

  marcas: MarcaDTO[] = [];

  constructor(
    private marcaService: MarcaService,
    private alertController: AlertController,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.loadMarcas();
  }

  loadMarcas() {
    this.marcaService.getMarcas().subscribe({
      next: (data) => {
        this.marcas = data; // Aquí estás usando el DTO
      },
      error: (err) => {
        console.error('Error al cargar marcas:', err);
      },
    });
  }

  async openAddMarcaModal() {
    const modal = await this.modalController.create({
      component: AddMarcaModalPage,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data === 'refresh') {
        this.loadMarcas();
      }
    });

    return await modal.present();
  }

  async deleteMarca(id: number) {
    
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
            this.marcaService.deleteMarca(id).subscribe({
              next: () => {
                this.marcas = this.marcas.filter(marca => marca.idMarca !== id);
                this.loadMarcas();
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

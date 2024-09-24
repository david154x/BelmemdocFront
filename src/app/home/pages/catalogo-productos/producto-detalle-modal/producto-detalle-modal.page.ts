import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-producto-detalle-modal',
  templateUrl: './producto-detalle-modal.page.html',
  styleUrls: ['./producto-detalle-modal.page.scss'],
})
export class ProductoDetalleModalPage implements OnInit {

  ngOnInit() {
    console.log();
  }

  @Input() producto: any;

  constructor(private modalCtrl: ModalController) {}

  cerrar() {
    this.modalCtrl.dismiss();
  }

}

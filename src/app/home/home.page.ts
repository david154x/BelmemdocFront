import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ngOnInit() {
    console.log('Todo bien todo bien dijo el pibe');
  }

  constructor(private router: Router, private toastController: ToastController) {}

  async logout() {

    localStorage.removeItem('authToken');

    const toast = await this.toastController.create({
      message: 'Has cerrado sesión correctamente',
      duration: 2000,
      position: 'top',
    });

    await toast.present();

    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    console.log('Todo bien todo bien dijo el pibe');
  }

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
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router, private toastController: ToastController) {} 

  ngOnInit(): void {
    console.log('Todo bien todo bien dijo el pibe');
  }

  async login() {
    if (!this.email || !this.password) {
      const toast = await this.toastController.create({
        message: 'Por favor, completa todos los campos.',
        duration: 2000,
        color: 'warning',
        position: 'top'
      });
      await toast.present();
      return;
    }

    this.authService.login(this.email, this.password).subscribe({
      next: async (response) => {

        localStorage.setItem('authToken', response.token);

        console.log(response.token);

        const toast = await this.toastController.create({
          message: 'Se ha logueado correctamente',
          duration: 2000,
          color: 'success',
          position: 'top'
        });

        await toast.present();

        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      },
      error: async (err) => {

        const toast = await this.toastController.create({
          message: 'Error credenciales invalidas, porfavor intente nuevamente',
          duration: 2000,
          color: 'danger',
          position: 'top'
        });

        await toast.present();

      }
    });
  }

  addUser() {
    this.router.navigate(['/register']);
  }

  forgotPassword() {
    console.log('Redigir a formulario para poner email y enviar un email al indicado');
  }

}

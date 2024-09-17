import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.registerForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      claveAsignada: ['', Validators.required],
      numeroDocumento: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: [''],
      primerApellido: ['', Validators.required],
      segundoApellido: [''],
      direccion: [''],
      telefono: [''],
      fechaNacimiento: ['', Validators.required],
      genero: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    console.log('Todo bien todo bien dijo el pibe');
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: async (response) => {
          const toast = await this.toastController.create({
            message: 'Se ha registrado correctamente...',
            duration: 2000, 
            color: 'success'
          });
          await toast.present();

          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
        error: async (err) => {
          // Mostrar mensaje de error
          const toast = await this.toastController.create({
            message: 'Error en el registro. Inténtalo de nuevo.',
            duration: 2000,
            color: 'danger'
          });
          await toast.present();
        }
      });
    }
  }

  volverAlLogin() {
    this.router.navigate(['/login']);

  }

}

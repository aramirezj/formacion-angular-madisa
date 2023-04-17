import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formularioLogin: FormGroup;
  //Inyección del router
  router: Router = inject(Router);
  notificacion: MatSnackBar = inject(MatSnackBar);

  ngOnInit() {
    this.formularioLogin = new FormGroup({
      correo: new FormControl(null, [Validators.email, Validators.required]),
      contra: new FormControl(null, Validators.required)
    })
  }

  iniciarSesion() {

    const correoEscrito: string = this.formularioLogin.get('correo')?.value;
    const contra: string = this.formularioLogin.controls.contra.value;

    if (correoEscrito === 'admin@gmail.com' && contra === '1234') {
      sessionStorage.setItem('token', '1');
      //Método navigateByUrl
      this.router.navigateByUrl('expositor');
    } else {
      this.notificacion.open('Correo o contraseña incorrectos', 'Cerrar', { duration: 3000 });
    }






  }
}

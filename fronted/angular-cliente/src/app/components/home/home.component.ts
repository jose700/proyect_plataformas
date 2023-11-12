import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterLoginService } from 'src/app/services/register-login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sesiones: any = {
    usuario: '',
    pass: ''
  };
  errorMessage: string = ''; // Variable para almacenar el mensaje de error

  constructor(private router: Router, private servicioRegistroLogin: RegisterLoginService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  iniciar() {
    if (!this.sesiones.usuario || !this.sesiones.pass) {
      this.toastr.error('Todos los campos son obligatorios')// Establecer el mensaje de error
      return; // Salir de la función si los campos están vacíos
    }

    const login: any = {
      usuario: this.sesiones.usuario,
      pass: this.sesiones.pass
    };
    this.servicioRegistroLogin.iniciarSesion(login).subscribe(
      (res) => {
        if (!res.error) {
          localStorage.setItem('tokens', res.token);
          console.log(res);
          this.toastr.info('Acceso correcto');
          this.router.navigate(['/adentro']);
        } else {
          this.toastr.warning('Acceso denegado');
          console.log(res);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

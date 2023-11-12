import { Component, OnInit } from '@angular/core';
import { Tutor } from 'src/app/modulos/tutor/tutor';
import { RegisterLoginService } from 'src/app/services/register-login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registro-home',
  templateUrl: './registro-home.component.html',
  styleUrls: ['./registro-home.component.css']
})
export class RegistroHomeComponent implements OnInit {

  tutorForm: FormGroup;
  private emailPattern: any = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  private cedulaPattern: any = /^[0-9]{10}$/;
  private allFieldsRequired = false;
  constructor(private servicioCreaTutor: RegisterLoginService,
    private formBuilder: FormBuilder, private toastr: ToastrService) {
    this.tutorForm = this.formBuilder.group({
      nombres: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])],
      apellidos: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      cedula: ['', Validators.compose([Validators.required, Validators.pattern(this.cedulaPattern), Validators.pattern(/^[0-9]+$/)])],
      correo: ['', Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
      usuario: ['', Validators.compose([Validators.required, Validators.maxLength(20), Validators.minLength(5)])],
      pass: ['', Validators.compose([Validators.required, Validators.maxLength(10), Validators.minLength(8)])]
    });
  }

  ngOnInit(): void {
  }

  crearTutor() {
    if (this.tutorForm.valid) {
      this.servicioCreaTutor.crearRegistro(this.tutorForm.value).subscribe(
        res => {
          console.log(res);
        }
      );
      this.toastr.success('Registro éxitoso'); // Usa this.toastr para mostrar un mensaje de éxito
      console.log(this.tutorForm.value);
    } else {
      if (this.allFieldsRequired) {
        this.toastr.error('Todos los campos son requeridos', 'Error'); // Usa this.toastr para mostrar un mensaje de error
      } else {
        const requiredFields = [];
        if (this.tutorForm.get('nombres').hasError('required')) {
          requiredFields.push('Nombres');
        }
        if (this.tutorForm.get('apellidos').hasError('required')) {
          requiredFields.push('Apellidos');
        }
        if (this.tutorForm.get('cedula').hasError('required')) {
          requiredFields.push('Cédula');
        }
        if (this.tutorForm.get('cedula').hasError('pattern')) {
          this.toastr.warning('El campo "Cédula" debe contener solo números y tener una longitud de 10 caracteres.', 'Error');
        }
        if (this.tutorForm.get('correo').hasError('required')) {
          requiredFields.push('Correo');
        } else if (this.tutorForm.get('correo').hasError('pattern')) {
          this.toastr.warning('El campo "Correo" no es válido', 'Error');
        }
        if (this.tutorForm.get('usuario').hasError('required')) {
          requiredFields.push('Usuario');
        }
        if (this.tutorForm.get('pass').hasError('required')) {
          requiredFields.push('Contraseña');
        } else if (this.tutorForm.get('pass').hasError('minlength')) {
          this.toastr.warning('El campo "Contraseña" debe tener al menos 8 caracteres', 'Error');
        } else if (this.tutorForm.get('pass').hasError('maxlength')) {
          this.toastr.warning('El campo "Contraseña" no puede tener más de 10 caracteres', 'Error');
        }
        if (requiredFields.length > 0) {
          this.toastr.error('Todos los campos son obligatorios');
        }
      }
    }
  }
  mostrarTodosLosCamposRequeridos() {
    this.allFieldsRequired = true;
    this.crearTutor();
  }
}

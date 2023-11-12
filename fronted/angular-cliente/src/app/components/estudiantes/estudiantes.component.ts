import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/modulos/estudiante/estudiante';
import { ServicioEstudianteService } from 'src/app/services/servicio-estudiante/servicio-estudiante.service';
import { ToastrService } from 'ngx-toastr';
declare var Swal: any;
@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  
  cedula = '';
  estudiantes: Estudiante[];

  studentForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  constructor(private formBuilder: FormBuilder,
    private servicioEstudiante: ServicioEstudianteService, private toastr: ToastrService
    ){
      this.studentForm = this.formBuilder.group({
        nombres: ['',Validators.compose([Validators.required, Validators.minLength(4)
          , Validators.maxLength(20)])],
        apellidos: ['', Validators.compose([Validators.required, Validators.minLength(4),
          Validators.maxLength(40)])],
        cedula: ['', Validators.compose([Validators.required, Validators.maxLength(10),
          Validators.minLength(10)])
      ],
        correo: ['', Validators.compose([Validators.required,Validators.pattern(this.emailPattern)])],
        edad: ['',[Validators.required, Validators.maxLength(30),
          Validators.minLength(2)]
      ],
        fechanacimiento: ['', Validators.compose([Validators.required])
      ]
      });    


  }



ngOnInit(): void {
  this.getEstudiante();
}
crearEstudiante() {
  if (this.studentForm.valid) {
    this.servicioEstudiante.crearEstudiante(this.studentForm.value).subscribe(
      res => {
        console.log(res);
        this.getEstudiante();
        this.toastr.success('Estudiante creado con éxito', 'Éxito');
      },
      error => {
        this.toastr.error('No se pudo crear el estudiante. Inténtalo de nuevo.', 'Error');
      }
    );
  } else {
    // Validar cada campo individualmente y mostrar mensajes de error
    if (this.studentForm.get('nombres').hasError('required')) {
      this.toastr.error('El campo Nombres es obligatorio');
    } else if (this.studentForm.get('nombres').hasError('minlength')) {
      const minLength = this.studentForm.get('nombres').getError('minlength').requiredLength;
      this.toastr.error(`El campo Nombres debe tener al menos ${minLength} caracteres`);
    }

    if (this.studentForm.get('apellidos').hasError('required')) {
      this.toastr.error('El campo Apellidos es obligatorio');
    } else if (this.studentForm.get('apellidos').hasError('minlength')) {
      const minLength = this.studentForm.get('apellidos').getError('minlength').requiredLength;
      this.toastr.error(`El campo Apellidos debe tener al menos ${minLength} caracteres`,);
    }

    if (this.studentForm.get('cedula').hasError('required')) {
      this.toastr.error('El campo Cédula es obligatorio');
    } else if (this.studentForm.get('cedula').hasError('minlength')) {
      const minLength = this.studentForm.get('cedula').getError('minlength').requiredLength;
      this.toastr.error(`El campo Cédula debe tener al menos ${minLength} caracteres`,);
    }

    if (this.studentForm.get('correo').hasError('required')) {
      this.toastr.error('El campo Correo es obligatorio');
    } else if (this.studentForm.get('correo').hasError('pattern')) {
      this.toastr.error('El campo Correo no tiene un formato válido');
    }

    if (this.studentForm.get('edad').hasError('required')) {
      this.toastr.error('El campo Edad es obligatorio');
    } else if (this.studentForm.get('edad').hasError('minlength')) {
      const minLength = this.studentForm.get('edad').getError('minlength').requiredLength;
      this.toastr.error(`El campo Edad debe tener al menos ${minLength} dígitos`);
    }
    if (this.studentForm.get('fechanacimiento').hasError('required')) {
      this.toastr.error('El campo Fecha de Nacimiento es obligatorio');
    }
  }
}



getEstudiante(){
  this.servicioEstudiante.getEstudiantes().subscribe(
    res=>{
      this.estudiantes = res;
    }
  )
}


eliminarEstudiante(idestudiante: Number): void {
  const idString = idestudiante.toString();

  // Mostrar un cuadro de diálogo SweetAlert en lugar de la confirmación del navegador
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Deseas eliminar a este estudiante?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    confirmButtonClass: 'btn btn-danger',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.servicioEstudiante.eliminarEstudiante(idString).subscribe(
        res => {
          console.log(res);
          this.getEstudiante();
          this.toastr.info('El estudiante se ha eliminado correctamente.', 'Éxito');
        },
        error => {
          this.toastr.error('No se pudo eliminar al estudiante. Inténtalo de nuevo.', 'Error');
        }
      );
    }
  });
}


busquedaRealizada = false;
async buscar() {
  try {
    const respuesta = await this.servicioEstudiante.buscarPorCedula(this.cedula).toPromise();
    this.estudiantes = respuesta as Estudiante[];
    this.busquedaRealizada = true;
    console.log(this.estudiantes);
  } catch (error) {
console.log(this.estudiantes);
  }
}

}

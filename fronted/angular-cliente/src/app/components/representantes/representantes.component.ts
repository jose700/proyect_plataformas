import { Component, OnInit } from '@angular/core';
import { ServiciorepresentanteService } from 'src/app/services/servicio-representante/serviciorepresentante.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/modulos/estudiante/estudiante';
import { ServicioEstudianteService } from 'src/app/services/servicio-estudiante/servicio-estudiante.service';
import { ToastrService } from 'ngx-toastr';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators'; // Importa los operadores RxJS
import { Observable } from 'rxjs/internal/Observable';

declare var Swal: any;
@Component({
  selector: 'app-representantes',
  templateUrl: './representantes.component.html',
  styleUrls: ['./representantes.component.css']
})
export class RepresentantesComponent implements OnInit{
  cedula = '';
  representantes:any[];
  estudiantes:Estudiante[];

  repreForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  cedulaFilter: any;

  constructor( private formBuilder:FormBuilder,
    private servicioRepresentante: ServiciorepresentanteService,
    private servicioEstudiante:ServicioEstudianteService, private toastr: ToastrService){
     this.repreForm = this.formBuilder.group({
      idEstudiante:['',Validators.compose([Validators.required])],
      nombres:['',Validators.compose([Validators.required, Validators.minLength(4)
        , Validators.maxLength(20)])],
        apellidos: ['', Validators.compose([Validators.required, Validators.minLength(4),
          Validators.maxLength(40)])],
        cedula: ['', Validators.compose([Validators.required, Validators.maxLength(10),
          Validators.minLength(10)])
      ],
        correo: ['', Validators.compose([Validators.required,Validators.pattern(this.emailPattern)])],
        estadocivil:['',Validators.compose([Validators.required, Validators.minLength(4)
          , Validators.maxLength(15)])],
        ocupacion:['',Validators.compose([Validators.required, Validators.minLength(4)
          , Validators.maxLength(10)])],  
     })

    }
  
    ngOnInit(): void {
      this.getRepresentantes();
      this.getEstudiantes();
  
      // Observa cambios en el campo de búsqueda en tiempo real
      this.cedulaFilter.valueChanges
  .pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((cedula: string) => this.buscarEnTiempoReal(cedula))
  )
  .subscribe((resultados: any[]) => {
    this.representantes = resultados;
  });

    }
    buscarEnTiempoReal(cedula: string): Observable<any[]> {
      return this.servicioRepresentante.buscarPorCedula(cedula).pipe(
        map((response: any) => response.representantes) // Suponiendo que "representantes" es el nombre del arreglo en la respuesta.
      );
    }
    

crearRepresentante() {
  let toastrShown = false; // Variable para evitar mostrar mensajes duplicados

  if (this.repreForm.valid) {
    this.servicioRepresentante.crearRepresentante(this.repreForm.value).subscribe(
      res => {
        console.log(res);
        this.getRepresentantes();
        this.toastr.success('Datos válidos');
      },
      error => {
        this.toastr.error('No se pudo crear el representante. Inténtalo de nuevo.');
      }
    );
  } else {
    // Validar si algún campo está vacío
    if (!this.repreForm.get('idEstudiante').value ||
        !this.repreForm.get('nombres').value ||
        !this.repreForm.get('apellidos').value ||
        !this.repreForm.get('cedula').value ||
        !this.repreForm.get('correo').value ||
        !this.repreForm.get('estadocivil').value ||
        !this.repreForm.get('ocupacion').value) {
      this.toastr.error('Por favor, complete todos los campos.');
      toastrShown = true; // Marcamos que se ha mostrado un mensaje
    }
    
    // Validar los campos de nombres, apellidos, estadocivil y ocupacion
   if (this.repreForm.get('nombres').hasError('minlength') || this.repreForm.get('nombres').hasError('maxlength')) {
      this.toastr.warning('El campo de nombres debe tener entre 4 y 20 caracteres.');
      toastrShown = true; // Marcamos que se ha mostrado un mensaje
    }
     if (this.repreForm.get('apellidos').hasError('minlength') || this.repreForm.get('apellidos').hasError('maxlength')) {
      this.toastr.warning('El campo de apellidos debe tener entre 4 y 40 caracteres.');
      toastrShown = true; // Marcamos que se ha mostrado un mensaje
  } if (this.repreForm.get('cedula').hasError('minlength') || this.repreForm.get('cedula').hasError('maxlength')) {
    this.toastr.warning('El número de cédula debe tener exactamente 10 dígitos');
    toastrShown = true;
  }
   if (this.repreForm.get('correo').hasError('pattern')) {
    this.toastr.warning('El correo electrónico no tiene un formato válido.');
    toastrShown = true;
  }
     if (this.repreForm.get('estadocivil').hasError('minlength') || this.repreForm.get('estadocivil').hasError('maxlength')) {
      this.toastr.warning('El campo de estado civil debe tener entre 4 y 15 caracteres.');
      toastrShown = true; // Marcamos que se ha mostrado un mensaje
    }
    if (this.repreForm.get('ocupacion').hasError('minlength') || this.repreForm.get('ocupacion').hasError('maxlength')) {
      this.toastr.warning('El campo de ocupación debe tener entre 4 y 10 caracteres.');
      toastrShown = true; // Marcamos que se ha mostrado un mensaje
    }
    
    
  }
}



getRepresentantes(){
  this.servicioRepresentante.getRepresentantes().subscribe(
    res=>{
        this.representantes = res;
    }
  )
}


getEstudiantes(){
this.servicioEstudiante.getEstudiantes().subscribe(
  res=>{
  this.estudiantes = res;
  }
)
}

busquedaRealizada = false;

async buscar() {
  try {
    const respuesta = await this.servicioRepresentante.buscarPorCedula(this.cedula).toPromise();
    this.representantes = respuesta as any[];
    this.busquedaRealizada = true;
    console.log(this.representantes);
  } catch (error) {
console.log(this.representantes);
  }
}

eliminarRepresentante(idrepresentante: number) {
  const idstring = idrepresentante.toString();

  // Mostrar un cuadro de diálogo SweetAlert en lugar de confirm
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Deseas eliminar este representante?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    confirmButtonClass: 'btn btn-danger',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.servicioRepresentante.eliminarRepresentante(idstring).subscribe(
        res => {
          this.getRepresentantes();
          this.toastr.info('El representante se ha eliminado correctamente.');
        },
        error => {
          this.toastr.error('No se pudo eliminar el representante. Inténtalo de nuevo.');
        }
      );
    }
  });
}





}

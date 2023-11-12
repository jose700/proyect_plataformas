import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistroHomeComponent } from './components/registro-home/registro-home.component';
import { HomeAdentroComponent } from './components/home-adentro/home-adentro.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { RepresentantesComponent } from './components/representantes/representantes.component';
import { SeguimientoAcademicoComponent } from './components/seguimiento-academico/seguimiento-academico.component';
import { SeguimientoMedicoComponent } from './components/seguimiento-medico/seguimiento-medico.component';
import { TratamientoMedicoComponent } from './components/tratamiento-medico/tratamiento-medico.component';
import { TratamientoCumplidoComponent } from './components/tratamiento-cumplido/tratamiento-cumplido.component';
import { TratamientoNocumplidoComponent } from './components/tratamiento-nocumplido/tratamiento-nocumplido.component';
import { MateriaComponent } from './components/materia/materia.component';
import { MateriaAprobadaComponent } from './components/materia-aprobada/materia-aprobada.component';
import { MateriaReprobadaComponent } from './components/materia-reprobada/materia-reprobada.component';
import { HistorialAcademicoComponent } from './components/historial-academico/historial-academico.component';
import { HistorialMedicoComponent } from './components/historial-medico/historial-medico.component';
import { sesionG } from './guards/sesion';

const routes: Routes = [


{ path: '',
component: HomeComponent
},
{ path: 'home',
component: HomeComponent
},
{ path: 'crear-tutor',
component: RegistroHomeComponent
},
{ path: 'adentro',
component: HomeAdentroComponent,
canActivate:[sesionG]
},
{ path: 'estudiantes',
component: EstudiantesComponent,
canActivate: [sesionG]
},
{ path: 'representantes',
component: RepresentantesComponent,
canActivate:[sesionG]
},
{ path: 'seguimiento-medico',
component: SeguimientoMedicoComponent,
canActivate:[sesionG]
},
{ path: 'historial-medico',
component: HistorialMedicoComponent,
canActivate:[sesionG]
},
{ path: 'tratamiento-medico',
component: TratamientoMedicoComponent,
canActivate:[sesionG]
},
{ path: 'tratamiento-cumplido',
component: TratamientoCumplidoComponent,
canActivate:[sesionG]
},
{ path: 'tratamiento-nocumplido',
component: TratamientoNocumplidoComponent,
canActivate:[sesionG]
},
{ path: 'seguimiento-academico',
component: SeguimientoAcademicoComponent,
canActivate:[sesionG]
},
{ path: 'historial-academico',
component: HistorialAcademicoComponent,
canActivate:[sesionG]
},
{ path: 'materias',
component: MateriaComponent,
canActivate:[sesionG]
},
{ path: 'materias-aprobadas',
component: MateriaAprobadaComponent,
canActivate:[sesionG]
},
{ path: 'materias-reprobadas',
component: MateriaReprobadaComponent,
canActivate:[sesionG]
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroHomeComponent } from './components/registro-home/registro-home.component';
import { HomeAdentroComponent } from './components/home-adentro/home-adentro.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { RepresentantesComponent } from './components/representantes/representantes.component';
import { SeguimientoMedicoComponent } from './components/seguimiento-medico/seguimiento-medico.component';
import { SeguimientoAcademicoComponent } from './components/seguimiento-academico/seguimiento-academico.component';
import { TratamientoMedicoComponent } from './components/tratamiento-medico/tratamiento-medico.component';
import { TratamientoCumplidoComponent } from './components/tratamiento-cumplido/tratamiento-cumplido.component';
import { TratamientoNocumplidoComponent } from './components/tratamiento-nocumplido/tratamiento-nocumplido.component';
import { MateriaComponent } from './components/materia/materia.component';
import { MateriaAprobadaComponent } from './components/materia-aprobada/materia-aprobada.component';
import { MateriaReprobadaComponent } from './components/materia-reprobada/materia-reprobada.component';
import { HistorialMedicoComponent } from './components/historial-medico/historial-medico.component';
import { HistorialAcademicoComponent } from './components/historial-academico/historial-academico.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegistroHomeComponent,
    HomeAdentroComponent,
    EstudiantesComponent,
    RepresentantesComponent,
    SeguimientoMedicoComponent,
    SeguimientoAcademicoComponent,
    TratamientoMedicoComponent,
    TratamientoCumplidoComponent,
    TratamientoNocumplidoComponent,
    MateriaComponent,
    MateriaAprobadaComponent,
    MateriaReprobadaComponent,
    HistorialMedicoComponent,
    HistorialAcademicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   ReactiveFormsModule,
   BrowserAnimationsModule, // required animations module
   ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

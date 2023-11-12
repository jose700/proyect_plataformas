import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seguimiento-academico',
  templateUrl: './seguimiento-academico.component.html',
  styleUrls: ['./seguimiento-academico.component.css']
})
export class SeguimientoAcademicoComponent implements OnInit {
  

   academicos = [
    {
      titulo:"Registrar asignaturas",
      imagen:"https://c8.alamy.com/compes/2j04nb1/curriculo-escolar-resumen-concepto-ilustracion-vectorial-programa-de-educacion-en-el-hogar-asignaturas-escolares-de-k-12-educacion-plan-de-ensenanza-resumen-del-plan-de-estudios-metafora-abstracta-del-contenido-del-curso-academico-2j04nb1.jpg",
      url:"/materias"
    },
    {
      titulo:"Asignaturas aprobadas",
      imagen:"https://www.shutterstock.com/image-vector/computer-class-studing-little-man-260nw-1965022804.jpg",
      url:"/materias-aprobadas"
    },
    {
      titulo:"Asignaturas reprobadas",
      imagen:"https://previews.123rf.com/images/rastudio/rastudio1803/rastudio180300889/97555795-estudiante-blanco-cauc%C3%A1sico-infeliz-decepcionado-por-la-prueba-con-grado-f-triste-estudiante.jpg",
      url:"/materias-reprobadas"
    },
   ]


  constructor(){}
  ngOnInit(): void {
    
  }
}

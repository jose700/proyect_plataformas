import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/app/modulos/estudiante/estudiante';

@Injectable({
  providedIn: 'root'
})
export class ServicioEstudianteService {
  URL: String = 'http://localhost:3000'
  stu:Estudiante[];

  constructor(private http:HttpClient) { }

  getEstudiantes(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(`${this.URL}/estudiantes`);
  }
  
  crearEstudiante(estu:Estudiante): Observable<any>{
    return this.http.post(`${this.URL}/estudiantes`,estu);
  }

  eliminarEstudiante(idEstudiante:string):Observable<Estudiante>{
  return this.http.delete<Estudiante>(`${this.URL}/estudiantes/${idEstudiante}`)
  }

  buscarPorCedula(cedula: string) {
    return this.http.get(`${this.URL}/estudiantes/${cedula}`);
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from 'src/app/modulos/seguimiento-academico/materia';

@Injectable({
  providedIn: 'root'
})
export class ServicioMateriaService {
  URL: String = 'http://localhost:3000'
  materia:Materia[];
  ma: any[];

  constructor(private http:HttpClient) { }

  getMaterias(): Observable<any[]>{
    return this.http.get<any[]>(`${this.URL}/materias`);
  }
  
  crearMateria(ma:Materia): Observable<any>{
    return this.http.post(`${this.URL}/materias`,ma);
  }

  eliminarMateria(idmateria:string):Observable<Materia>{
  return this.http.delete<Materia>(`${this.URL}/materias/${idmateria}`)
  }

  buscarPorCedula(cedula: string) {
    return this.http.get(`${this.URL}/materias/${cedula}`);
  }
}

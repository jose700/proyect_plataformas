import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tratamiento } from 'src/app/modulos/seguimiento-medico/tratamiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioTratamientoService {
  URL: String = 'http://localhost:3000'
  tratamiento:Tratamiento[];
  tra: any[];

  constructor(private http:HttpClient) { }

  getTratamientos(): Observable<any[]>{
    return this.http.get<any[]>(`${this.URL}/tratamientos`);
  }
  
  crearTratamiento(tr:Tratamiento): Observable<any>{
    return this.http.post(`${this.URL}/tratamientos`,tr);
  }

  eliminarTratamiento(idtratamiento:string):Observable<Tratamiento>{
  return this.http.delete<Tratamiento>(`${this.URL}/tratamientos/${idtratamiento}`)
  }

  buscarPorNombres(nombres: string) {
    return this.http.get(`${this.URL}/tratamientos/${nombres}`);
  }
}

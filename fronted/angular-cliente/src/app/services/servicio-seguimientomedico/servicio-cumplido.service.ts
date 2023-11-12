import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cumplido } from 'src/app/modulos/seguimiento-medico/cumplido';

@Injectable({
  providedIn: 'root'
})
export class ServicioCumplidoService {
  URL: String = 'http://localhost:3000'
  cumplido:Cumplido[];
  cum: any[];

  constructor(private http:HttpClient) { }

  getCumplidos(): Observable<any[]>{
    return this.http.get<any[]>(`${this.URL}/cumplidos`);
  }
  
  crearCumplido(cu:Cumplido): Observable<any>{
    return this.http.post(`${this.URL}/cumplidos`,cu);
  }

  eliminarCumplido(idcumplido:string):Observable<Cumplido>{
  return this.http.delete<Cumplido>(`${this.URL}/cumplidos/${idcumplido}`)
  }

  buscarPorCedula(cedula: string) {
    return this.http.get(`${this.URL}/cumplidos/${cedula}`);
  }
}

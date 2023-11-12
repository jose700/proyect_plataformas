import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nocumplido } from 'src/app/modulos/seguimiento-medico/nocumplido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioNocumplidoService {
  URL: String = 'http://localhost:3000'
  nocumplido:Nocumplido[];
  nocum: any[];

  constructor(private http:HttpClient) { }

  getNoCumplidos(): Observable<any[]>{
    return this.http.get<any[]>(`${this.URL}/nocumplidos`);
  }
  
  crearNoCumplido(nocu:Nocumplido): Observable<any>{
    return this.http.post(`${this.URL}/nocumplidos`,nocu);
  }

  eliminarNoCumplido(idnocumplido:string):Observable<Nocumplido>{
  return this.http.delete<Nocumplido>(`${this.URL}/nocumplidos/${idnocumplido}`)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutor } from '../modulos/tutor/tutor';
import { Sesion } from '../modulos/tutor/login';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {
URL: String = 'http://localhost:3000'
tutor: Tutor[];

  constructor(private http: HttpClient) { }

  crearRegistro(tut:Tutor): Observable<any>{
    return this.http.post(`${this.URL}/tutores`,tut);
  }


  iniciarSesion(login:Sesion): Observable<any>{
     return this.http.post(`${this.URL}/logintutor`,login);
  }
  
}

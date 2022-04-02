import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelo/Usuario';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }

  Url = "http://localhost:8080/PruebaTecnica/usuario";

  getUsuario() {
    return this.http.get<Usuario[]>(this.Url);
  }

  crearUsuario(usuario:Usuario) {
    return this.http.post<Usuario>(this.Url, usuario);
  }
}

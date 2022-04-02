import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/Usuario';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios: Usuario[];
  constructor(private http:ServicioService, private router:Router) { }

  ngOnInit(): void {
    this.http.getUsuario().subscribe(data => {
      this.usuarios = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelo/Usuario';
import { ServicioService } from 'src/app/Service/servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router:Router, private service:ServicioService) { }

  modelUsuario:Usuario = new Usuario();

  ngOnInit(): void {
  }

  Agregar(usuario:Usuario) {
    this.service.crearUsuario(usuario).subscribe(data => {
      if(usuario) {
      alert("Se ha agregado con éxito a la tabla");
      this.router.navigate(["listar"]);
      } else {
        alert("Error al añadir el registro");
      }
    })
  }

}

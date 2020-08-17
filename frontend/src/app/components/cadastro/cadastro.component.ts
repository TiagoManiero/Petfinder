import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from 'src/app/services/usuarios.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuarios: Usuarios;

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  ngOnInit(): void {
  }

  atualizaUsuario(){
    this.usuariosService.update(this.usuarios).subscribe();
  }
  create(usuarios: Usuarios){
    this.usuariosService.create(this.usuarios).subscribe(()=>{
      this.router.navigate(['cadastrarpet'])
    });
  }

}

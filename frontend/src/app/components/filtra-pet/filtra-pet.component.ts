import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PetsServiceService } from './../../services/pets-service.service';

@Component({
  selector: 'app-filtra-pet',
  templateUrl: './filtra-pet.component.html',
  styleUrls: ['./filtra-pet.component.css']
})
export class FiltraPetComponent implements OnInit {
  usuarioLogado = 1
  pets: any[];
  displayedColumns = ['nome', 'raca', 'idade', 'peso','cidade']

  constructor(private router: Router, private PetsServiceService: PetsServiceService) { }

  ngOnInit(): void {
    this.PetsServiceService.readByCodigo(1).subscribe((params: any)=>{const codUsuario = params['codUsuario']});
    
  }

}

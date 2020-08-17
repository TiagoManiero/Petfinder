import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PetsServiceService } from './../../../services/pets-service.service';

@Component({
  selector: 'app-filtra-cidade',
  templateUrl: './filtra-cidade.component.html',
  styleUrls: ['./filtra-cidade.component.css']
})
export class FiltraCidadeComponent implements OnInit {

  pets: any[];
  displayedColumns = ['nome', 'raca', 'idade', 'peso','cidade']

  constructor(private router: Router, private PetsServiceService: PetsServiceService) { }

  ngOnInit(): void {
    this.pets = this.PetsServiceService.filtraPetPorCidade("São Paulo");
  }

}

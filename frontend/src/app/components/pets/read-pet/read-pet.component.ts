import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PetsServiceService } from './../../../services/pets-service.service';

@Component({
  selector: 'app-read-pet',
  templateUrl: './read-pet.component.html',
  styleUrls: ['./read-pet.component.css']
})
export class ReadPetComponent implements OnInit {
  pets: any[];
  displayedColumns = ['nome', 'raca', 'idade', 'peso','cidade']

  constructor(private router: Router, private PetsServiceService: PetsServiceService) { }

  ngOnInit(): void {
    this.pets = this.PetsServiceService.getPets();

  }

}

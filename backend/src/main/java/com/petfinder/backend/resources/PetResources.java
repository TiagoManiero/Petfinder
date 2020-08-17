package com.petfinder.backend.resources;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.petfinder.backend.models.Pet;
import com.petfinder.backend.Repository.PetRepository;


@RestController
@RequestMapping(value="/petfinder")
public class PetResources{

    @Autowired
    PetRepository petRepository;

    @GetMapping("/pet")
    public Iterable<Pet> listaPets() {
        return petRepository.findAll();
    }

    @GetMapping("/pet/{codigo}")
    public Pet listaUnicoPet(@PathVariable(value="codigo") int codigo){
        return petRepository.findByCodigo(codigo);
    }

    @PostMapping("/pet")
    public Pet salvaPet(@RequestBody Pet pet){
        return petRepository.save(pet);
    }

    @DeleteMapping("/pet")
    public void deletaPet(@RequestBody @Valid Pet pet){
        petRepository.delete(pet);
    }

    @PutMapping("/pet")
    public Pet atualizaPet(@RequestBody @Valid Pet pet){
        return petRepository.save(pet);
    }


}
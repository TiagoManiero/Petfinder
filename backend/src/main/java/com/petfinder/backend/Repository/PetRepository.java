package com.petfinder.backend.Repository;

import com.petfinder.backend.models.Pet;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet, String>{
	Pet findByCodigo(int codigo);
}
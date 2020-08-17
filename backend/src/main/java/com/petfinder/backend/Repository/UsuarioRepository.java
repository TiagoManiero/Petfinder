package com.petfinder.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.petfinder.backend.models.Pet;
import com.petfinder.backend.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String>{
	Iterable<Pet> findByPet(Pet pet);
	Usuario findByCodigo(int codigo);
}
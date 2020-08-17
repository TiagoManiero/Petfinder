package com.petfinder.backend.resources;

import java.util.List;

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

import com.petfinder.backend.Repository.UsuarioRepository;
import com.petfinder.backend.models.Usuario;


@RestController
@RequestMapping(value="/petfinder")
public class UsuarioResources{

    @Autowired
    UsuarioRepository usuarioRepository;

    @GetMapping("/usuario")
    public List<Usuario> listaUsuarios(){
        return usuarioRepository.findAll();
    }

    @GetMapping("/usuario/{codigo}")
    public Usuario listaUnicoUsuario(@PathVariable(value="codigo") int codigo){
        return usuarioRepository.findByCodigo(codigo);
    }

    @PostMapping("/usuario")
    public Usuario salvaUsuario(@RequestBody Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    @DeleteMapping("/usuario")
    public void deletaUsuario(@RequestBody @Valid Usuario usuario){
        usuarioRepository.delete(usuario);
    }

    @PutMapping("/usuario")
    public Usuario atualizaUsuario(@RequestBody @Valid Usuario usuario){
        return usuarioRepository.save(usuario);
    }

}
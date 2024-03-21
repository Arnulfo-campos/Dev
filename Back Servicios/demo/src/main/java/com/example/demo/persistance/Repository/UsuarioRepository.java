package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.Usuario;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

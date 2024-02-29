package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.Envasado;

@Repository
public interface EnvasadoRepository extends CrudRepository<Envasado, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

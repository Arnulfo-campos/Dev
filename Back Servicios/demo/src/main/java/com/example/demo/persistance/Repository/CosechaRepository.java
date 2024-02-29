package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.Cosecha;

@Repository
public interface CosechaRepository extends CrudRepository<Cosecha, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

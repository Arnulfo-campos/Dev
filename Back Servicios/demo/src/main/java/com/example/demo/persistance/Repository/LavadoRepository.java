package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.Lavado;

@Repository
public interface LavadoRepository extends CrudRepository<Lavado, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

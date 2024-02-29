package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.Secado;

@Repository
public interface SecadoRepository extends CrudRepository<Secado, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

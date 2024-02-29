package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.ControlHierbas;

@Repository
public interface ControlHierbaRepository extends CrudRepository<ControlHierbas, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

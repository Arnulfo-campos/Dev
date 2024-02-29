package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.Descope;

@Repository
public interface DescopeRepository extends CrudRepository<Descope, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

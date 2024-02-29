package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.FungicidaCrecimiento;

@Repository
public interface FungicidaCreRepository extends CrudRepository<FungicidaCrecimiento, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

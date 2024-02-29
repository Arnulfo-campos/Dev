package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.Crecimiento;

@Repository
public interface CrecimientoRepository extends CrudRepository<Crecimiento, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

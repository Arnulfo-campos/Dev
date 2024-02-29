package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.AbonoCrecimiento;

@Repository
public interface AbonoCrecimientoRepository extends CrudRepository<AbonoCrecimiento, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

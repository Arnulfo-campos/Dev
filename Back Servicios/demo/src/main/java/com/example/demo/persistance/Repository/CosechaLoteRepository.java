package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.CosechaLote;

@Repository
public interface CosechaLoteRepository extends CrudRepository<CosechaLote, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

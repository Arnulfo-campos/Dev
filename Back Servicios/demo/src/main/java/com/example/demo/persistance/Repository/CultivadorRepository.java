package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.Cultivador;

@Repository
public interface CultivadorRepository extends CrudRepository<Cultivador, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

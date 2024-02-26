package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.Fungicida;


@Repository
public interface FungicidaRepository extends CrudRepository<Fungicida, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.Tostado;

@Repository
public interface TostadoRepository extends CrudRepository<Tostado, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

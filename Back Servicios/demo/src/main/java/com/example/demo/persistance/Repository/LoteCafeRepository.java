package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.LoteCafe;


@Repository
public interface LoteCafeRepository extends CrudRepository<LoteCafe, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

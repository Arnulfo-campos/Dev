package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.SemillaCafe;


@Repository
public interface SemillaCafeRepository extends CrudRepository<SemillaCafe, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

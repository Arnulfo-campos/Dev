package com.example.demo.persistance.Repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.Germinacion;


@Repository
public interface GerminacionRepository extends CrudRepository<Germinacion, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

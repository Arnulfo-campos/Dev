package com.example.demo.persistance.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.PesoDiario;

@Repository
public interface PesoDiarioRepository extends CrudRepository<PesoDiario, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
}

package com.example.demo.persistance.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.persistance.Entities.LoteUsuario;


@Repository
public interface LoteUsuarioRepository extends CrudRepository<LoteUsuario, Long> {
    // Puedes agregar métodos adicionales si necesitas consultas personalizadas
    List<LoteUsuario> findByIdLoteAndIdCosechaAndIdFormulario(Long idLote, Long idCosecha, Long idFormulario);
    List<LoteUsuario> findByIdUsuarioAndIdFormulario(Long idUsuario, Long idFormulario);

}

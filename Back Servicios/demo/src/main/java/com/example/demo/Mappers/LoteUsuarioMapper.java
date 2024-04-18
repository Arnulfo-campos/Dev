package com.example.demo.Mappers;

import com.example.demo.DTO.LoteUsuarioDTO;
import com.example.demo.persistance.Entities.LoteUsuario;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LoteUsuarioMapper {

    @Mapping(source = "idLote", target = "idLote")
    @Mapping(source = "idCosecha", target = "idCosecha")
    @Mapping(source = "idUsuario", target = "idUsuario")
    @Mapping(source = "idFormulario", target = "idFormulario")
    @Mapping(source = "hash", target = "hash")
    LoteUsuarioDTO loteUsuarioToDTO(LoteUsuario loteUsuario);

    @Mapping(source = "idLote", target = "idLote") // Ignora el idLote porque probablemente se genere automáticamente
    @Mapping(source = "idCosecha", target = "idCosecha")
    @Mapping(source = "idUsuario", target = "idUsuario")
    @Mapping(source = "idFormulario", target = "idFormulario")
    @Mapping(source = "hash", target = "hash")
    LoteUsuario dtoToLoteUsuario(LoteUsuarioDTO loteUsuarioDTO);
}

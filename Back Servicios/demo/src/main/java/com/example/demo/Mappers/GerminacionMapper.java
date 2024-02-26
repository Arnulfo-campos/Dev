package com.example.demo.Mappers;

import com.example.demo.DTO.GerminacionDTO;
import com.example.demo.persistance.Entities.Germinacion;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface GerminacionMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "profundidad", target = "profundidad")
    @Mapping(source = "sombra", target = "sombra")
    @Mapping(source = "area", target = "area")
    @Mapping(source = "arena", target = "arena")
    @Mapping(source = "profundidadArena", target = "profundidadArena")
    @Mapping(source = "pesoArena", target = "pesoArena")
    @Mapping(source = "cantidadChapolas", target = "cantidadChapolas")
    @Mapping(source = "observaciones", target = "observaciones")
    @Mapping(source = "fechaFinalGerminacion", target = "fechaFinalGerminacion")
    @Mapping(source = "codigoRegistroUnique", target = "codigoRegistroUnique")
    GerminacionDTO germinacionToDTO(Germinacion germinacion);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "profundidad", target = "profundidad")
    @Mapping(source = "sombra", target = "sombra")
    @Mapping(source = "area", target = "area")
    @Mapping(source = "arena", target = "arena")
    @Mapping(source = "profundidadArena", target = "profundidadArena")
    @Mapping(source = "pesoArena", target = "pesoArena")
    @Mapping(source = "cantidadChapolas", target = "cantidadChapolas")
    @Mapping(source = "observaciones", target = "observaciones")
    @Mapping(source = "fechaFinalGerminacion", target = "fechaFinalGerminacion")
    @Mapping(source = "codigoRegistroUnique", target = "codigoRegistroUnique")
    Germinacion dtoToGerminacion(GerminacionDTO dto);
}

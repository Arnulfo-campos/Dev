package com.example.demo.Mappers;

import com.example.demo.DTO.SemillaCafeDTO;
import com.example.demo.persistance.Entities.SemillaCafe;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SemillaCafeMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "tipoVariedad", target = "tipoVariedad")
    @Mapping(source = "origen", target = "origen")
    @Mapping(source = "certificada", target = "certificada")
    @Mapping(source = "cantidadKg", target = "cantidadKg")
    @Mapping(source = "germinacion.id", target = "idGerminacion")
    SemillaCafeDTO semillaCafeToDTO(SemillaCafe semillaCafe);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "tipoVariedad", target = "tipoVariedad")
    @Mapping(source = "origen", target = "origen")
    @Mapping(source = "certificada", target = "certificada")
    @Mapping(source = "cantidadKg", target = "cantidadKg")
    @Mapping(source = "idGerminacion", target = "germinacion.id")
    SemillaCafe dtoToSemillaCafe(SemillaCafeDTO dto);
}

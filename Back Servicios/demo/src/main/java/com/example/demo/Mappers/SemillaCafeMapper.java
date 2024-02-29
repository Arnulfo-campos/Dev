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
    @Mapping(source = "cantidadKG", target = "cantidadKG")
    @Mapping(source = "fechaRegistro", target = "fechaRegistro")
    @Mapping(source = "fechaAdquisicion", target = "fechaAdquisicion")
    @Mapping(source = "germinacion.id", target = "germinacionId")
    @Mapping(source = "loteCafe.id", target = "loteCafeId")
    @Mapping(source = "imagen", target = "imagen")
    SemillaCafeDTO semillaCafeToDTO(SemillaCafe semillaCafe);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "tipoVariedad", target = "tipoVariedad")
    @Mapping(source = "origen", target = "origen")
    @Mapping(source = "certificada",target = "certificada")
    @Mapping(source = "cantidadKG", target = "cantidadKG")
    @Mapping(source = "fechaRegistro", target = "fechaRegistro")
    @Mapping(source = "fechaAdquisicion", target = "fechaAdquisicion")
    @Mapping(source = "germinacionId", target = "germinacion.id")
    @Mapping(source = "loteCafeId", target = "loteCafe.id")
    @Mapping(source = "imagen", target = "imagen")
    SemillaCafe dtoToSemillaCafe(SemillaCafeDTO semillaCafeDTO);
    }
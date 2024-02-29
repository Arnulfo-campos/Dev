package com.example.demo.Mappers;

import com.example.demo.DTO.CultivadorDTO;
import com.example.demo.persistance.Entities.Cultivador;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CultivadorMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "nombre", target = "nombre")
    @Mapping(source = "apellido", target = "apellido")
    @Mapping(source = "direccion", target = "direccion")
    @Mapping(source = "telefono", target = "telefono")
    @Mapping(source = "correo", target = "correo")
    @Mapping(source = "imagen", target = "imagen")
    CultivadorDTO cultivadorToDTO(Cultivador cultivador);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "nombre", target = "nombre")
    @Mapping(source = "apellido", target = "apellido")
    @Mapping(source = "direccion", target = "direccion")
    @Mapping(source = "telefono", target = "telefono")
    @Mapping(source = "correo", target = "correo")
    @Mapping(source = "imagen", target = "imagen")
    Cultivador dtoToCultivador(CultivadorDTO cultivadorDTO);
}

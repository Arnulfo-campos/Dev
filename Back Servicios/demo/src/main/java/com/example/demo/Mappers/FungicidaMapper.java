package com.example.demo.Mappers;

import com.example.demo.DTO.FungicidaDTO;
import com.example.demo.persistance.Entities.Fungicida;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring",uses = {GerminacionMapper.class})
public interface FungicidaMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "nombre", target = "nombre")
    @Mapping(source = "cantidadAplicada", target = "cantidadAplicada")
    @Mapping(source = "fechaAplicacion", target = "fechaAplicacion")
    @Mapping(source = "germinacion.id", target = "idGerminacion")
    FungicidaDTO fungicidaToDTO(Fungicida fungicida);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "nombre", target = "nombre")
    @Mapping(source = "cantidadAplicada", target = "cantidadAplicada")
    @Mapping(source = "fechaAplicacion", target = "fechaAplicacion")
    @Mapping(source = "idGerminacion", target = "germinacion.id")
    Fungicida dtoToFungicida(FungicidaDTO dto);
}

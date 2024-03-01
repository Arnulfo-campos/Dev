package com.example.demo.Mappers;

import com.example.demo.DTO.FungicidaCrecimientoDTO;
import com.example.demo.persistance.Entities.FungicidaCrecimiento;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface FungicidaCreMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "nombre", target = "nombre")
    @Mapping(source = "cantidadAplicada", target = "cantidadAplicada")
    @Mapping(source = "fechaAplicacion", target = "fechaAplicacion")
    @Mapping(source = "formulaAplicada", target = "formulaAplicada")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "crecimiento.id", target = "sembradoId")
    FungicidaCrecimientoDTO fungicidaCrecimientoToDTO(FungicidaCrecimiento fungicidaCrecimiento);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "nombre", target = "nombre")
    @Mapping(source = "cantidadAplicada", target = "cantidadAplicada")
    @Mapping(source = "fechaAplicacion", target = "fechaAplicacion")
    @Mapping(source = "formulaAplicada", target = "formulaAplicada")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "sembradoId", target ="crecimiento.id")
    FungicidaCrecimiento dtoToFungicidaCrecimiento(FungicidaCrecimientoDTO fungicidaCrecimientoDTO);
}

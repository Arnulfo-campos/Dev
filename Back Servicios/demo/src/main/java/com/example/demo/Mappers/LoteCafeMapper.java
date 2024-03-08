package com.example.demo.Mappers;

import com.example.demo.DTO.LoteCafeDTO;
import com.example.demo.persistance.Entities.LoteCafe;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LoteCafeMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "germinacion.id", target = "germinacionId")
    @Mapping(source = "cultivador.id", target = "cultivadorId")
    @Mapping(source = "crecimiento.id", target = "crecimientoId")
    @Mapping(source = "envasado.id", target = "envasadoId")
    @Mapping(source = "fechaRegistro", target = "fechaRegistro")
    @Mapping(source = "fechaLastUpdate", target = "fechaLastUPD")
    @Mapping(source = "germinacion.area",target = "areaGerminacion")

    LoteCafeDTO loteCafeToDTO(LoteCafe loteCafe);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "germinacionId", target = "germinacion.id")
    @Mapping(source = "cultivadorId", target = "cultivador.id")
    @Mapping(source = "crecimientoId", target = "crecimiento.id")
    @Mapping(source = "envasadoId", target = "envasado.id")
    @Mapping(source = "fechaRegistro", target = "fechaRegistro")
    @Mapping(source = "fechaLastUPD", target = "fechaLastUpdate")
    LoteCafe dtoToLoteCafe(LoteCafeDTO loteCafeDTO);
}

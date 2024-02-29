package com.example.demo.Mappers;

import com.example.demo.DTO.AbonoCrecimientoDTO;
import com.example.demo.persistance.Entities.AbonoCrecimiento;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AbonoCrecimientoMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "nombre", target = "nombre")
    @Mapping(source = "cantidadAplicada", target = "cantidadAplicada")
    @Mapping(source = "fechaAplicacion", target = "fechaAplicacion")
    @Mapping(source = "formulaAplicada", target = "formulaAplicada")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "sembradoId", target = "sembradoId")
    AbonoCrecimientoDTO abonoCrecimientoToDTO(AbonoCrecimiento abonoCrecimiento);

    @Mapping(target = "id", ignore = true) // Ignora el id porque probablemente se genere automáticamente
    @Mapping(source = "nombre", target = "nombre")
    @Mapping(source = "cantidadAplicada", target = "cantidadAplicada")
    @Mapping(source = "fechaAplicacion", target = "fechaAplicacion")
    @Mapping(source = "formulaAplicada", target = "formulaAplicada")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "sembradoId", target = "sembradoId")
    AbonoCrecimiento dtoToAbonoCrecimiento(AbonoCrecimientoDTO abonoCrecimientoDTO);
}

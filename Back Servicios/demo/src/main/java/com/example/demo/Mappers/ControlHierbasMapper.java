package com.example.demo.Mappers;

import com.example.demo.DTO.ControlHierbasDTO;
import com.example.demo.persistance.Entities.ControlHierbas;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {CrecimientoMapper.class})
public interface ControlHierbasMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "tipo", target = "tipo")
    @Mapping(source = "cantidadAplicada", target = "cantidadAplicada")
    @Mapping(source = "fechaInicio", target = "fechaInicio")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "procesoControl", target = "procesoControl")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "crecimiento.id", target = "sembradoId")
    ControlHierbasDTO controlHierbasToDTO(ControlHierbas controlHierbas);

    @Mapping(target = "id", ignore = true) // Ignora el id porque probablemente se genere automáticamente
    @Mapping(source = "tipo", target = "tipo")
    @Mapping(source = "cantidadAplicada", target = "cantidadAplicada")
    @Mapping(source = "fechaInicio", target = "fechaInicio")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "procesoControl", target = "procesoControl")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "sembradoId", target = "crecimiento.id")
    ControlHierbas dtoToControlHierbas(ControlHierbasDTO controlHierbasDTO);
}

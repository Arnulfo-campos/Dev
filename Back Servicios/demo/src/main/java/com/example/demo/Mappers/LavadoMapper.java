package com.example.demo.Mappers;

import com.example.demo.DTO.LavadoDTO;
import com.example.demo.persistance.Entities.Lavado;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LavadoMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "fechaInicio", target = "fechaInicio")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "pesoCafeFlotante", target = "pesoCafeFlotante")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "observacion", target = "observacion")
    @Mapping(source = "cosecha.id", target = "cosechaId")
    LavadoDTO lavadoToDTO(Lavado lavado);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "fechaInicio", target = "fechaInicio")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "pesoCafeFlotante", target = "pesoCafeFlotante")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "observacion", target = "observacion")
    @Mapping(source = "cosechaId", target = "cosecha.id")
    Lavado dtoToLavado(LavadoDTO lavadoDTO);
}

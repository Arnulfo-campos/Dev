package com.example.demo.Mappers;

import com.example.demo.DTO.SecadoDTO;
import com.example.demo.persistance.Entities.Secado;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface SecadoMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "fechaInicio", target = "fechaInicio")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "tipoSecado", target = "tipoSecado")
    @Mapping(source = "pesoAntesSecado", target = "pesoAntesSecado")
    @Mapping(source = "pesoFinalSecado", target = "pesoFinalSecado")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "humedad", target = "humedad")
    @Mapping(source = "factor", target = "factor")
    @Mapping(source = "observacion", target = "observacion")
    SecadoDTO secadoToDTO(Secado secado);

    @Mapping(target = "id", ignore = true) // Ignora el id porque probablemente se genere automáticamente
    @Mapping(source = "fechaInicio", target = "fechaInicio")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "tipoSecado", target = "tipoSecado")
    @Mapping(source = "pesoAntesSecado", target = "pesoAntesSecado")
    @Mapping(source = "pesoFinalSecado", target = "pesoFinalSecado")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "humedad", target = "humedad")
    @Mapping(source = "factor", target = "factor")
    @Mapping(source = "observacion", target = "observacion")
    Secado dtoToSecado(SecadoDTO secadoDTO);
}

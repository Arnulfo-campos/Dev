package com.example.demo.Mappers;

import com.example.demo.DTO.CosechaDTO;
import com.example.demo.persistance.Entities.Cosecha;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CosechaMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "fechaInicio", target = "fechaInicio")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "pesoTotalCafe", target = "pesoTotalCafe")
    @Mapping(source = "pesoTotalCafeDespulpado", target = "pesoTotalCafeDespulpado")
    @Mapping(source = "tipoRecoleccion", target = "tipoRecoleccion")
    @Mapping(source = "observaciones", target = "observaciones")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "secado.id", target = "secadoId") // Mapea la llave foránea secado.id a secadoId en el DTO
    @Mapping(source = "tostado.id", target = "tostadoId") // Mapea la llave foránea tostado.id a tostadoId en el DTO
    CosechaDTO cosechaToDTO(Cosecha cosecha);

    @Mapping(target = "id", ignore = true) // Ignora el id porque probablemente se genere automáticamente
    @Mapping(source = "fechaInicio", target = "fechaInicio")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "pesoTotalCafe", target = "pesoTotalCafe")
    @Mapping(source = "pesoTotalCafeDespulpado", target = "pesoTotalCafeDespulpado")
    @Mapping(source = "tipoRecoleccion", target = "tipoRecoleccion")
    @Mapping(source = "observaciones", target = "observaciones")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "secadoId", target = "secado.id") // Mapea secadoId en el DTO a la llave foránea secado.id
    @Mapping(source = "tostadoId", target = "tostado.id") // Mapea tostadoId en el DTO a la llave foránea tostado.id
    Cosecha dtoToCosecha(CosechaDTO cosechaDTO);
}

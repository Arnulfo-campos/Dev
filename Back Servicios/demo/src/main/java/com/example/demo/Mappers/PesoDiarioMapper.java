package com.example.demo.Mappers;

import com.example.demo.DTO.PesoDiarioDTO;
import com.example.demo.persistance.Entities.PesoDiario;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface PesoDiarioMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "fechaRegistro", target = "fechaRegistro")
    @Mapping(source = "pesoCafe", target = "pesoCafe")
    @Mapping(source = "pesoDespulpado", target = "pesoDespulpado")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "cosecha.id", target = "cosechaId")
    PesoDiarioDTO pesoDiarioToDTO(PesoDiario pesoDiario);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "fechaRegistro", target = "fechaRegistro")
    @Mapping(source = "pesoCafe", target = "pesoCafe")
    @Mapping(source = "pesoDespulpado", target = "pesoDespulpado")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "cosechaId", target = "cosecha.id")
    PesoDiario dtoToPesoDiario(PesoDiarioDTO pesoDiarioDTO);
}

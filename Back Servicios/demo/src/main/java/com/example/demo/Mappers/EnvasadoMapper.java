package com.example.demo.Mappers;

import com.example.demo.DTO.EnvasadoDTO;
import com.example.demo.persistance.Entities.Envasado;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface EnvasadoMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "fechaInicial", target = "fechaInicial")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "imagen", target = "imagen")
    EnvasadoDTO envasadoToDTO(Envasado envasado);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "fechaInicial", target = "fechaInicial")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "imagen", target = "imagen")
    Envasado dtoToEnvasado(EnvasadoDTO envasadoDTO);
}

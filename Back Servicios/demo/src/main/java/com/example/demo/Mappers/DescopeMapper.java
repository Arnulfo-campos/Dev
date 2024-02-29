package com.example.demo.Mappers;

import com.example.demo.DTO.DescopeDTO;
import com.example.demo.persistance.Entities.Descope;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface DescopeMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "fechaInicio", target = "fechaInicio")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "sembradoId", target = "sembradoId")
    DescopeDTO descopeToDTO(Descope descope);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "fechaInicio", target = "fechaInicio")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "sembradoId", target = "sembradoId")
    Descope dtoToDescope(DescopeDTO descopeDTO);
}

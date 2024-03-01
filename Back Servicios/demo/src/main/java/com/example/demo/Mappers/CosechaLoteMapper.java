package com.example.demo.Mappers;

import com.example.demo.DTO.CosechaLoteDTO;
import com.example.demo.persistance.Entities.CosechaLote;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CosechaLoteMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "loteCafe.id", target = "loteId")
    @Mapping(source = "cosecha.id", target = "cosechaId")
    CosechaLoteDTO cosechaLoteToDTO(CosechaLote cosechaLote);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "loteId", target = "loteCafe.id")
    @Mapping(source = "cosechaId", target = "cosecha.id")
    CosechaLote dtoToCosechaLote(CosechaLoteDTO cosechaLoteDTO);
}

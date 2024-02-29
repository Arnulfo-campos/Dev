package com.example.demo.Mappers;

import com.example.demo.DTO.CosechaLoteDTO;
import com.example.demo.persistance.Entities.CosechaLote;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CosechaLoteMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "loteId", target = "loteId")
    @Mapping(source = "cosechaId", target = "cosechaId")
    CosechaLoteDTO cosechaLoteToDTO(CosechaLote cosechaLote);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "loteId", target = "loteId")
    @Mapping(source = "cosechaId", target = "cosechaId")
    CosechaLote dtoToCosechaLote(CosechaLoteDTO cosechaLoteDTO);
}

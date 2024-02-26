package com.example.demo.Mappers;

import com.example.demo.DTO.LoteCafeDTO;
import com.example.demo.persistance.Entities.LoteCafe;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LoteCafeMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "departamento", target = "departamento")
    @Mapping(source = "ciudad", target = "ciudad")
    @Mapping(source = "direccion", target = "direccion")
    @Mapping(source = "nombreFincaVivero", target = "nombreFincaVivero")
    @Mapping(source = "ubicacionLatitud", target = "ubicacionLatitud")
    @Mapping(source = "ubicacionLongitud", target = "ubicacionLongitud")
    @Mapping(source = "altitud", target = "altitud")
    @Mapping(source = "temperaturaMedia", target = "temperaturaMedia")
    @Mapping(source = "humedadMedia", target = "humedadMedia")
    @Mapping(source = "usuario", target = "usuario")
    @Mapping(source = "germinacion.id", target = "idGerminacion")
    @Mapping(source = "cultivador.id", target = "idCultivador")
    LoteCafeDTO loteCafeToDTO(LoteCafe loteCafe);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "departamento", target = "departamento")
    @Mapping(source = "ciudad", target = "ciudad")
    @Mapping(source = "direccion", target = "direccion")
    @Mapping(source = "nombreFincaVivero", target = "nombreFincaVivero")
    @Mapping(source = "ubicacionLatitud", target = "ubicacionLatitud")
    @Mapping(source = "ubicacionLongitud", target = "ubicacionLongitud")
    @Mapping(source = "altitud", target = "altitud")
    @Mapping(source = "temperaturaMedia", target = "temperaturaMedia")
    @Mapping(source = "humedadMedia", target = "humedadMedia")
    @Mapping(source = "usuario", target = "usuario")
    @Mapping(source = "idGerminacion", target = "germinacion.id")
    @Mapping(source = "idCultivador", target = "cultivador.id")
    LoteCafe dtoToLoteCafe(LoteCafeDTO dto);
}

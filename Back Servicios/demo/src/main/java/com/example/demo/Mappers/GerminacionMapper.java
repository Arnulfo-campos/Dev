package com.example.demo.Mappers;

import com.example.demo.DTO.GerminacionDTO;
import com.example.demo.persistance.Entities.Germinacion;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface GerminacionMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "profundidad", target = "profundidad")
    @Mapping(source = "tipoGerminador", target = "tipoGerminador")
    @Mapping(source = "sombra", target = "sombra")
    @Mapping(source = "area", target = "area")
    @Mapping(source = "arena", target = "arena")
    @Mapping(source = "profundidadArena", target = "profundidadArena")
    @Mapping(source = "pesoArena", target = "pesoArena")
    @Mapping(source = "cantidadChapolasObtenidas", target = "cantidadChapolasObtenidas")
    @Mapping(source = "observaciones", target = "observaciones")
    @Mapping(source = "fechaFinalGerminacion", target = "fechaFinalGerminacion")
    @Mapping(source = "fechaRegistro", target = "fechaRegistro")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "departamento", target = "departamento")
    @Mapping(source = "ciudad", target = "ciudad")
    @Mapping(source = "direccion", target = "direccion")
    @Mapping(source = "nombreFinca", target = "nombreFinca")
    @Mapping(source = "ubicacionLatitud", target = "ubicacionLatitud")
    @Mapping(source = "ubicacionLongitud", target = "ubicacionLongitud")
    @Mapping(source = "altitud", target = "altitud")
    @Mapping(source = "temperaturaMedia", target = "temperaturaMedia")
    @Mapping(source = "humedadMedia", target = "humedadMedia")
    @Mapping(source = "cultivador.id", target = "cultivadorId")
    GerminacionDTO germinacionToDTO(Germinacion germinacion);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "profundidad", target = "profundidad")
    @Mapping(source = "tipoGerminador", target = "tipoGerminador")
    @Mapping(source = "sombra", target = "sombra")
    @Mapping(source = "area", target = "area")
    @Mapping(source = "arena", target = "arena")
    @Mapping(source = "profundidadArena", target = "profundidadArena")
    @Mapping(source = "pesoArena", target = "pesoArena")
    @Mapping(source = "cantidadChapolasObtenidas", target = "cantidadChapolasObtenidas")
    @Mapping(source = "observaciones", target = "observaciones")
    @Mapping(source = "fechaFinalGerminacion", target = "fechaFinalGerminacion")
    @Mapping(source = "fechaRegistro", target = "fechaRegistro")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "departamento", target = "departamento")
    @Mapping(source = "ciudad", target = "ciudad")
    @Mapping(source = "direccion", target = "direccion")
    @Mapping(source = "nombreFinca", target = "nombreFinca")
    @Mapping(source = "ubicacionLatitud", target = "ubicacionLatitud")
    @Mapping(source = "ubicacionLongitud", target = "ubicacionLongitud")
    @Mapping(source = "altitud", target = "altitud")
    @Mapping(source = "temperaturaMedia", target = "temperaturaMedia")
    @Mapping(source = "humedadMedia", target = "humedadMedia")
    @Mapping(source = "cultivadorId", target = "cultivador.id")
    Germinacion dtoToGerminacion(GerminacionDTO germinacionDTO);
}

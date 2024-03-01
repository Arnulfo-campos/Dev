package com.example.demo.Mappers;

import com.example.demo.DTO.CrecimientoDTO;
import com.example.demo.persistance.Entities.Crecimiento;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CrecimientoMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "fechaSembrado", target = "fechaSembrado")
    @Mapping(source = "areaLote", target = "areaLote")
    @Mapping(source = "sombra", target = "sombra")
    @Mapping(source = "distanciaSiembra", target = "distanciaSiembra")
    @Mapping(source = "tipoTrazo", target = "tipoTrazo")
    @Mapping(source = "profundidadAhoyado", target = "profundidadAhoyado")
    @Mapping(source = "chapolasSembradas", target = "chapolasSembradas")
    @Mapping(source = "chapolasFinales", target = "chapolasFinales")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "departamento", target = "departamento")
    @Mapping(source = "ciudad", target = "ciudad")
    @Mapping(source = "direccion", target = "direccion")
    @Mapping(source = "nombreFinca", target = "nombreFinca")
    @Mapping(source = "ubicacionLatitud", target = "ubicacionLatitud")
    @Mapping(source = "ubicacionLongitud", target = "ubicacionLongitud")
    @Mapping(source = "altitud", target = "altitud")
    @Mapping(source = "temperaturaMedia", target = "temperaturaMedia")
    @Mapping(source = "humedadMedia", target = "humedadMedia")
    @Mapping(source = "observaciones", target = "observaciones")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "cultivador.id", target = "cultivadorId")
    CrecimientoDTO crecimientoToDTO(Crecimiento crecimiento);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "fechaSembrado", target = "fechaSembrado")
    @Mapping(source = "areaLote", target = "areaLote")
    @Mapping(source = "sombra", target = "sombra")
    @Mapping(source = "distanciaSiembra", target = "distanciaSiembra")
    @Mapping(source = "tipoTrazo", target = "tipoTrazo")
    @Mapping(source = "profundidadAhoyado", target = "profundidadAhoyado")
    @Mapping(source = "chapolasSembradas", target = "chapolasSembradas")
    @Mapping(source = "chapolasFinales", target = "chapolasFinales")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "departamento", target = "departamento")
    @Mapping(source = "ciudad", target = "ciudad")
    @Mapping(source = "direccion", target = "direccion")
    @Mapping(source = "nombreFinca", target = "nombreFinca")
    @Mapping(source = "ubicacionLatitud", target = "ubicacionLatitud")
    @Mapping(source = "ubicacionLongitud", target = "ubicacionLongitud")
    @Mapping(source = "altitud", target = "altitud")
    @Mapping(source = "temperaturaMedia", target = "temperaturaMedia")
    @Mapping(source = "humedadMedia", target = "humedadMedia")
    @Mapping(source = "observaciones", target = "observaciones")
    @Mapping(source = "imagen", target = "imagen")
    @Mapping(source = "cultivadorId", target = "cultivador.id")
    Crecimiento dtoToCrecimiento(CrecimientoDTO crecimientoDTO);
}

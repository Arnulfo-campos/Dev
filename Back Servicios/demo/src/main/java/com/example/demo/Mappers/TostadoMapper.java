package com.example.demo.Mappers;

import com.example.demo.DTO.TostadoDTO;
import com.example.demo.persistance.Entities.Tostado;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TostadoMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "fechaInicio", target = "fechaInicio")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "temperaturaInicial", target = "temperaturaInicial")
    @Mapping(source = "temperatura2", target = "temperatura2")
    @Mapping(source = "horaTemperatura2", target = "horaTemperatura2")
    @Mapping(source = "temperatura3", target = "temperatura3")
    @Mapping(source = "horaTemperatura3", target = "horaTemperatura3")
    @Mapping(source = "temperaturaFinal", target = "temperaturaFinal")
    @Mapping(source = "humedadFinal", target = "humedadFinal")
    @Mapping(source = "muestraCafe", target = "muestraCafe")
    @Mapping(source = "seleccionGrano", target = "seleccionGrano")
    @Mapping(source = "malla", target = "malla")
    @Mapping(source = "tonalidadAgtron", target = "tonalidadAgtron")
    TostadoDTO tostadoToDTO(Tostado tostado);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "fechaInicio", target = "fechaInicio")
    @Mapping(source = "fechaFinal", target = "fechaFinal")
    @Mapping(source = "temperaturaInicial", target = "temperaturaInicial")
    @Mapping(source = "temperatura2", target = "temperatura2")
    @Mapping(source = "horaTemperatura2", target = "horaTemperatura2")
    @Mapping(source = "temperatura3", target = "temperatura3")
    @Mapping(source = "horaTemperatura3", target = "horaTemperatura3")
    @Mapping(source = "temperaturaFinal", target = "temperaturaFinal")
    @Mapping(source = "humedadFinal", target = "humedadFinal")
    @Mapping(source = "muestraCafe", target = "muestraCafe")
    @Mapping(source = "seleccionGrano", target = "seleccionGrano")
    @Mapping(source = "malla", target = "malla")
    @Mapping(source = "tonalidadAgtron", target = "tonalidadAgtron")
    Tostado dtoToTostado(TostadoDTO tostadoDTO);
}

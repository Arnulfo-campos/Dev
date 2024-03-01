package com.example.demo.DTO;

import java.util.Date;

import com.example.demo.persistance.Entities.TipoSombra;
import com.example.demo.persistance.Entities.TipoTrazo;
import com.google.protobuf.Enum;

public class CrecimientoDTO {
    private Long id;
    private Date fechaSembrado;
    private Integer areaLote;
    private TipoSombra sombra;
    private Integer distanciaSiembra;
    private TipoTrazo tipoTrazo;
    private Integer profundidadAhoyado;
    private Integer chapolasSembradas;
    private Integer chapolasFinales;
    private Date fechaFinal;
    private String departamento;
    private String ciudad;
    private String direccion;
    private String nombreFinca;
    private Double ubicacionLatitud;
    private Double ubicacionLongitud;
    private Integer altitud;
    private Double temperaturaMedia;
    private Double humedadMedia;
    private String observaciones;
    private byte[] imagen;
    private Long cultivadorId;

    // Getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getFechaSembrado() {
        return fechaSembrado;
    }

    public void setFechaSembrado(Date fechaSembrado) {
        this.fechaSembrado = fechaSembrado;
    }

    public Integer getAreaLote() {
        return areaLote;
    }

    public void setAreaLote(Integer areaLote) {
        this.areaLote = areaLote;
    }


    public void setDistanciaSiembra(Integer distanciaSiembra) {
        this.distanciaSiembra = distanciaSiembra;
    }

    public Integer getProfundidadAhoyado() {
        return profundidadAhoyado;
    }

    public void setProfundidadAhoyado(Integer profundidadAhoyado) {
        this.profundidadAhoyado = profundidadAhoyado;
    }

    public Integer getChapolasSembradas() {
        return chapolasSembradas;
    }

    public void setChapolasSembradas(Integer chapolasSembradas) {
        this.chapolasSembradas = chapolasSembradas;
    }

    public Integer getChapolasFinales() {
        return chapolasFinales;
    }

    public void setChapolasFinales(Integer chapolasFinales) {
        this.chapolasFinales = chapolasFinales;
    }

    public Date getFechaFinal() {
        return fechaFinal;
    }

    public void setFechaFinal(Date fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getNombreFinca() {
        return nombreFinca;
    }

    public void setNombreFinca(String nombreFinca) {
        this.nombreFinca = nombreFinca;
    }

    public Double getUbicacionLatitud() {
        return ubicacionLatitud;
    }

    public void setUbicacionLatitud(Double ubicacionLatitud) {
        this.ubicacionLatitud = ubicacionLatitud;
    }

    public Double getUbicacionLongitud() {
        return ubicacionLongitud;
    }

    public void setUbicacionLongitud(Double ubicacionLongitud) {
        this.ubicacionLongitud = ubicacionLongitud;
    }

    public Integer getAltitud() {
        return altitud;
    }

    public void setAltitud(Integer altitud) {
        this.altitud = altitud;
    }

    public Double getTemperaturaMedia() {
        return temperaturaMedia;
    }

    public void setTemperaturaMedia(Double temperaturaMedia) {
        this.temperaturaMedia = temperaturaMedia;
    }

    public Double getHumedadMedia() {
        return humedadMedia;
    }

    public void setHumedadMedia(Double humedadMedia) {
        this.humedadMedia = humedadMedia;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public Long getCultivadorId() {
        return cultivadorId;
    }

    public void setCultivadorId(Long cultivadorId) {
        this.cultivadorId = cultivadorId;
    }

    public TipoSombra getSombra() {
        return sombra;
    }

    public void setSombra(TipoSombra sombra) {
        this.sombra = sombra;
    }

    public Integer getDistanciaSiembra() {
        return distanciaSiembra;
    }

    public TipoTrazo getTipoTrazo() {
        return tipoTrazo;
    }

    public void setTipoTrazo(TipoTrazo tipoTrazo) {
        this.tipoTrazo = tipoTrazo;
    }
}

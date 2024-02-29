package com.example.demo.DTO;

import java.util.Date;

public class SecadoDTO {
    private Long id;
    private Date fechaInicio;
    private Date fechaFinal;
    private String tipoSecado;
    private Double pesoAntesSecado;
    private Double pesoFinalSecado;
    private byte[] imagen;
    private Integer humedad;
    private Double factor;
    private String observacion;

    // Getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFinal() {
        return fechaFinal;
    }

    public void setFechaFinal(Date fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    public String getTipoSecado() {
        return tipoSecado;
    }

    public void setTipoSecado(String tipoSecado) {
        this.tipoSecado = tipoSecado;
    }

    public Double getPesoAntesSecado() {
        return pesoAntesSecado;
    }

    public void setPesoAntesSecado(Double pesoAntesSecado) {
        this.pesoAntesSecado = pesoAntesSecado;
    }

    public Double getPesoFinalSecado() {
        return pesoFinalSecado;
    }

    public void setPesoFinalSecado(Double pesoFinalSecado) {
        this.pesoFinalSecado = pesoFinalSecado;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public Integer getHumedad() {
        return humedad;
    }

    public void setHumedad(Integer humedad) {
        this.humedad = humedad;
    }

    public Double getFactor() {
        return factor;
    }

    public void setFactor(Double factor) {
        this.factor = factor;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }
}

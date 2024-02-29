package com.example.demo.DTO;

import java.util.Date;

public class LavadoDTO {
    private Long id;
    private Date fechaInicio;
    private Date fechaFinal;
    private Double pesoCafeFlotante;
    private byte[] imagen;
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

    public Double getPesoCafeFlotante() {
        return pesoCafeFlotante;
    }

    public void setPesoCafeFlotante(Double pesoCafeFlotante) {
        this.pesoCafeFlotante = pesoCafeFlotante;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }
}

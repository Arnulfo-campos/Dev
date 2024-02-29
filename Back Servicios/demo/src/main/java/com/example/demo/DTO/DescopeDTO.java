package com.example.demo.DTO;

import java.util.Date;

public class DescopeDTO {
    private Long id;
    private Date fechaInicio;
    private Date fechaFinal;
    private byte[] imagen;
    private Long sembradoId;

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

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public Long getSembradoId() {
        return sembradoId;
    }

    public void setSembradoId(Long sembradoId) {
        this.sembradoId = sembradoId;
    }
}

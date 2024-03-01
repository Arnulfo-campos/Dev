package com.example.demo.DTO;

import java.util.Date;

import com.example.demo.persistance.Entities.TipoControl;

public class ControlHierbasDTO {
    private Long id;
    private TipoControl tipo;
    private Double cantidadAplicada;
    private Date fechaInicio;
    private Date fechaFinal;
    private String procesoControl;
    private byte[] imagen;
    private Long sembradoId;

    // Getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

  
    

    public Double getCantidadAplicada() {
        return cantidadAplicada;
    }

    public void setCantidadAplicada(Double cantidadAplicada) {
        this.cantidadAplicada = cantidadAplicada;
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

    public String getProcesoControl() {
        return procesoControl;
    }

    public void setProcesoControl(String procesoControl) {
        this.procesoControl = procesoControl;
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

    public TipoControl getTipo() {
        return tipo;
    }

    public void setTipo(TipoControl tipo) {
        this.tipo = tipo;
    }
}

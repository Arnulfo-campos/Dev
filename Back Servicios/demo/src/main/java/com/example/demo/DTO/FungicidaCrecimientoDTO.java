package com.example.demo.DTO;

import java.util.Date;

public class FungicidaCrecimientoDTO {
    private Long id;
    private String nombre;
    private Double cantidadAplicada;
    private Date fechaAplicacion;
    private String formulaAplicada;
    private byte[] imagen;
    private Long sembradoId;

    // Getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getCantidadAplicada() {
        return cantidadAplicada;
    }

    public void setCantidadAplicada(Double cantidadAplicada) {
        this.cantidadAplicada = cantidadAplicada;
    }

    public Date getFechaAplicacion() {
        return fechaAplicacion;
    }

    public void setFechaAplicacion(Date fechaAplicacion) {
        this.fechaAplicacion = fechaAplicacion;
    }

    public String getFormulaAplicada() {
        return formulaAplicada;
    }

    public void setFormulaAplicada(String formulaAplicada) {
        this.formulaAplicada = formulaAplicada;
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

package com.example.demo.DTO;

import java.util.Date;

import com.example.demo.persistance.Entities.TipoReco;

public class CosechaDTO {
    private Long id;
    private Date fechaInicio;
    private Date fechaFinal;
    private Double pesoTotalCafe;
    private Double pesoTotalCafeDespulpado;
    private TipoReco tipoRecoleccion;
    private String observaciones;
    private byte[] imagen;
    private long secadoId;
    private long tostadoId;
    

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

    public Double getPesoTotalCafe() {
        return pesoTotalCafe;
    }

    public void setPesoTotalCafe(Double pesoTotalCafe) {
        this.pesoTotalCafe = pesoTotalCafe;
    }

    public Double getPesoTotalCafeDespulpado() {
        return pesoTotalCafeDespulpado;
    }

    public void setPesoTotalCafeDespulpado(Double pesoTotalCafeDespulpado) {
        this.pesoTotalCafeDespulpado = pesoTotalCafeDespulpado;
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

    public long getTostadoId() {
        return tostadoId;
    }

    public void setTostadoId(long tostadoId) {
        this.tostadoId = tostadoId;
    }

    public long getSecadoId() {
        return secadoId;
    }

    public void setSecadoId(long secadoId) {
        this.secadoId = secadoId;
    }

    public TipoReco getTipoRecoleccion() {
        return tipoRecoleccion;
    }

    public void setTipoRecoleccion(TipoReco tipoRecoleccion) {
        this.tipoRecoleccion = tipoRecoleccion;
    }
}

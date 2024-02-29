package com.example.demo.DTO;

import java.util.Date;

public class SemillaCafeDTO {
    private Long id;
    private String tipoVariedad;
    private String origen;
    private boolean certificada;
    private Double cantidadKG;
    private Date fechaRegistro;
    private Date fechaAdquisicion;
    private Long germinacionId;
    private Long loteCafeId;
    private byte[] imagen;

    // Getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipoVariedad() {
        return tipoVariedad;
    }

    public void setTipoVariedad(String tipoVariedad) {
        this.tipoVariedad = tipoVariedad;
    }

    public String getOrigen() {
        return origen;
    }

    public void setOrigen(String origen) {
        this.origen = origen;
    }

    public boolean isCertificada() {
        return certificada;
    }

    public void setCertificada(boolean certificada) {
        this.certificada = certificada;
    }

    public Double getCantidadKG() {
        return cantidadKG;
    }

    public void setCantidadKG(Double cantidadKG) {
        this.cantidadKG = cantidadKG;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public Date getFechaAdquisicion() {
        return fechaAdquisicion;
    }

    public void setFechaAdquisicion(Date fechaAdquisicion) {
        this.fechaAdquisicion = fechaAdquisicion;
    }

    public Long getGerminacionId() {
        return germinacionId;
    }

    public void setGerminacionId(Long germinacionId) {
        this.germinacionId = germinacionId;
    }

    public Long getLoteCafeId() {
        return loteCafeId;
    }

    public void setLoteCafeId(Long loteCafeId) {
        this.loteCafeId = loteCafeId;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }
}

package com.example.demo.DTO;

import java.util.Date;

public class PesoDiarioDTO {
    private Long id;
    private Date fechaRegistro;
    private Double pesoCafe;
    private Double pesoDespulpado;
    private byte[] imagen;
    private Long cosechaId;

    // Getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public Double getPesoCafe() {
        return pesoCafe;
    }

    public void setPesoCafe(Double pesoCafe) {
        this.pesoCafe = pesoCafe;
    }

    public Double getPesoDespulpado() {
        return pesoDespulpado;
    }

    public void setPesoDespulpado(Double pesoDespulpado) {
        this.pesoDespulpado = pesoDespulpado;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public Long getCosechaId() {
        return cosechaId;
    }

    public void setCosechaId(Long cosechaId) {
        this.cosechaId = cosechaId;
    }
}

package com.example.demo.DTO;

import java.util.Date;

public class LoteCafeDTO {
    private Long id;
    private Long germinacionId;
    private Long cultivadorId;
    private Long crecimientoId;
    private Long envasadoId;
    private Date fechaRegistro;
    private Date fechaLastUPD;
    private Integer areaGerminacion;

    // Getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getGerminacionId() {
        return germinacionId;
    }

    public void setGerminacionId(Long germinacionId) {
        this.germinacionId = germinacionId;
    }

    public Long getCultivadorId() {
        return cultivadorId;
    }

    public void setCultivadorId(Long cultivadorId) {
        this.cultivadorId = cultivadorId;
    }

    public Long getCrecimientoId() {
        return crecimientoId;
    }

    public void setCrecimientoId(Long crecimientoId) {
        this.crecimientoId = crecimientoId;
    }

    public Long getEnvasadoId() {
        return envasadoId;
    }

    public void setEnvasadoId(Long envasadoId) {
        this.envasadoId = envasadoId;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public Date getFechaLastUPD() {
        return fechaLastUPD;
    }

    public void setFechaLastUPD(Date fechaLastUPD) {
        this.fechaLastUPD = fechaLastUPD;
    }

    public Integer getAreaGerminacion() {
        return areaGerminacion;
    }

    public void setAreaGerminacion(Integer areaGerminacion) {
        this.areaGerminacion = areaGerminacion;
    }

}

package com.example.demo.DTO;

public class LoteCafeDTO {
    private Long id;
    private Long germinacionId;
    private Long cultivadorId;
    private Long crecimientoId;
    private Long envasadoId;
    private String fechaRegistro;
    private String fechaLastUPD;

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

    public String getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(String fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public String getFechaLastUPD() {
        return fechaLastUPD;
    }

    public void setFechaLastUPD(String fechaLastUPD) {
        this.fechaLastUPD = fechaLastUPD;
    }
}

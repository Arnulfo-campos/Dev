package com.example.demo.DTO;
public class SemillaCafeDTO {
    private Long id;
    private String tipoVariedad;
    private String origen;
    private Boolean certificada;
    private Double cantidadKg;
    private Long idGerminacion; // Esto es para almacenar solo el ID de la Germinacion

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
    public Boolean getCertificada() {
        return certificada;
    }
    public void setCertificada(Boolean certificada) {
        this.certificada = certificada;
    }
    public Double getCantidadKg() {
        return cantidadKg;
    }
    public void setCantidadKg(Double cantidadKg) {
        this.cantidadKg = cantidadKg;
    }
    public Long getIdGerminacion() {
        return idGerminacion;
    }
    public void setIdGerminacion(Long idGerminacion) {
        this.idGerminacion = idGerminacion;
    }

    // Getters y setters
}

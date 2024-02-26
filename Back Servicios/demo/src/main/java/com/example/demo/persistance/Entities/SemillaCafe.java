package com.example.demo.persistance.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "semilla_cafe")
public class SemillaCafe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipoVariedad;
    private String origen;
    private Boolean certificada;
    private Double cantidadKg;
    
    @ManyToOne
    @JoinColumn(name = "Germinacion_ID")
    private Germinacion germinacion;

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

    public Germinacion getGerminacion() {
        return germinacion;
    }

    public void setGerminacion(Germinacion germinacion) {
        this.germinacion = germinacion;
    }
    
    // Getters y setters
}

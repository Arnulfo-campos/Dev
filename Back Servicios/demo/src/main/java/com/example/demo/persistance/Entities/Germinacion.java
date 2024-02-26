package com.example.demo.persistance.Entities;

import java.util.Date;

import jakarta.persistence.*;


@Entity
@Table(name = "germinacion")
public class Germinacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double profundidad;
    private String sombra;
    private Double area;
    private Boolean arena;
    private Double profundidadArena;
    private Double pesoArena;
    private Integer cantidadChapolas;
    private String observaciones;
    private Date fechaFinalGerminacion;
    private String codigoRegistroUnique;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Double getProfundidad() {
        return profundidad;
    }
    public void setProfundidad(Double profundidad) {
        this.profundidad = profundidad;
    }
    public String getSombra() {
        return sombra;
    }
    public void setSombra(String sombra) {
        this.sombra = sombra;
    }
    public Double getArea() {
        return area;
    }
    public void setArea(Double area) {
        this.area = area;
    }
    public Boolean getArena() {
        return arena;
    }
    public void setArena(Boolean arena) {
        this.arena = arena;
    }
    public Double getProfundidadArena() {
        return profundidadArena;
    }
    public void setProfundidadArena(Double profundidadArena) {
        this.profundidadArena = profundidadArena;
    }
    public Double getPesoArena() {
        return pesoArena;
    }
    public void setPesoArena(Double pesoArena) {
        this.pesoArena = pesoArena;
    }
    public Integer getCantidadChapolas() {
        return cantidadChapolas;
    }
    public void setCantidadChapolas(Integer cantidadChapolas) {
        this.cantidadChapolas = cantidadChapolas;
    }
    public String getObservaciones() {
        return observaciones;
    }
    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }
    public Date getFechaFinalGerminacion() {
        return fechaFinalGerminacion;
    }
    public void setFechaFinalGerminacion(Date fechaFinalGerminacion) {
        this.fechaFinalGerminacion = fechaFinalGerminacion;
    }
    public String getCodigoRegistroUnique() {
        return codigoRegistroUnique;
    }
    public void setCodigoRegistroUnique(String codigoRegistroUnique) {
        this.codigoRegistroUnique = codigoRegistroUnique;
    }
    
    // Getters y setters
}

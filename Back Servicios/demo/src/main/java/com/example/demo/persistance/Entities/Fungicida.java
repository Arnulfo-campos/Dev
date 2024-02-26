package com.example.demo.persistance.Entities;

import java.util.Date;
import jakarta.persistence.*;



@Entity
@Table(name = "fungicida")
public class Fungicida {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private Double cantidadAplicada;
    private Date fechaAplicacion;
    
    @ManyToOne
    @JoinColumn(name = "Germinacion_ID")
    private Germinacion germinacion;

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

    public Germinacion getGerminacion() {
        return germinacion;
    }

    public void setGerminacion(Germinacion germinacion) {
        this.germinacion = germinacion;
    }
    
    // Getters y setters
}

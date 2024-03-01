package com.example.demo.persistance.Entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "fungicida")
public class Fungicida {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Nombre", length = 255)
    private String nombre;
    
    @Column(name = "Cantidad_Aplicada")
    private Double cantidadAplicada;
    
    @Column(name = "Fecha_Aplicacion")
    private Date fechaAplicacion;
    
    @Column(name = "Formula_Aplicada", columnDefinition = "TEXT")
    private String formulaAplicada;
    
    @Lob
    private byte[] imagen;
    
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

    public Germinacion getGerminacion() {
        return germinacion;
    }

    public void setGerminacion(Germinacion germinacion) {
        this.germinacion = germinacion;
    }
    
    // Getters y setters
}

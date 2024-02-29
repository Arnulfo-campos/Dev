package com.example.demo.persistance.Entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Lavado")
public class Lavado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Fecha_Inicio")
    private Date fechaInicio;
    
    @Column(name = "Fecha_Final")
    private Date fechaFinal;
    
    @Column(name = "Peso_Cafe_Flotante")
    private Double pesoCafeFlotante;
    
    @Lob
    private byte[] imagen;
    
    @Column(name = "Observacion", columnDefinition = "TEXT")
    private String observacion;

    @ManyToOne
    @JoinColumn(name = "Cosecha_ID")
    private Cosecha cosecha;

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

    public Double getPesoCafeFlotante() {
        return pesoCafeFlotante;
    }

    public void setPesoCafeFlotante(Double pesoCafeFlotante) {
        this.pesoCafeFlotante = pesoCafeFlotante;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

    public Cosecha getCosecha() {
        return cosecha;
    }

    public void setCosecha(Cosecha cosecha) {
        this.cosecha = cosecha;
    }
    
    // Getters y setters
}

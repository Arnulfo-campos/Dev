package com.example.demo.persistance.Entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Cosecha")
public class Cosecha {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Fecha_Inicio")
    private Date fechaInicio;
    
    @Column(name = "Fecha_Final")
    private Date fechaFinal;
    
    @Column(name = "Peso_Total_Cafe")
    private Double pesoTotalCafe;
    
    @Column(name = "Peso_Total_Cafe_Despulpado")
    private Double pesoTotalCafeDespulpado;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "Tipo_Recoleccion")
    private TipoReco tipoRecoleccion;
    
    @Column(name = "Observaciones", columnDefinition = "TEXT")
    private String observaciones;
    
    @Lob
    private byte[] imagen;

    @ManyToOne
    @JoinColumn(name = "Secado_ID")
    private Secado secado;

    @ManyToOne
    @JoinColumn(name = "Tostado_ID")
    private Tostado tostado;

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

    public Double getPesoTotalCafe() {
        return pesoTotalCafe;
    }

    public void setPesoTotalCafe(Double pesoTotalCafe) {
        this.pesoTotalCafe = pesoTotalCafe;
    }

    public Double getPesoTotalCafeDespulpado() {
        return pesoTotalCafeDespulpado;
    }

    public void setPesoTotalCafeDespulpado(Double pesoTotalCafeDespulpado) {
        this.pesoTotalCafeDespulpado = pesoTotalCafeDespulpado;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public Secado getSecado() {
        return secado;
    }

    public void setSecado(Secado secado) {
        this.secado = secado;
    }

    public Tostado getTostado() {
        return tostado;
    }

    public void setTostado(Tostado tostado) {
        this.tostado = tostado;
    }

    public TipoReco getTipoRecoleccion() {
        return tipoRecoleccion;
    }

    public void setTipoRecoleccion(TipoReco tipoRecoleccion) {
        this.tipoRecoleccion = tipoRecoleccion;
    }
    
    // Getters y setters
}

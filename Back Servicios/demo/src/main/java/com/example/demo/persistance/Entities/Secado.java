package com.example.demo.persistance.Entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Secado")
public class Secado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Fecha_Inicio")
    private Date fechaInicio;
    
    @Column(name = "Fecha_Final")
    private Date fechaFinal;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "Tipo_Secado")
    private tipoSecado tipoSecado;
    
    @Column(name = "Peso_Antes_Secado")
    private Double pesoAntesSecado;
    
    @Column(name = "Peso_Final_Secado")
    private Double pesoFinalSecado;
    
    @Lob
    private byte[] imagen;
    
    private Integer humedad;
    
    private Double factor;
    
    @Column(name = "Observacion", columnDefinition = "TEXT")
    private String observacion;

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


    public Double getPesoAntesSecado() {
        return pesoAntesSecado;
    }

    public void setPesoAntesSecado(Double pesoAntesSecado) {
        this.pesoAntesSecado = pesoAntesSecado;
    }

    public Double getPesoFinalSecado() {
        return pesoFinalSecado;
    }

    public void setPesoFinalSecado(Double pesoFinalSecado) {
        this.pesoFinalSecado = pesoFinalSecado;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public Integer getHumedad() {
        return humedad;
    }

    public void setHumedad(Integer humedad) {
        this.humedad = humedad;
    }

    public Double getFactor() {
        return factor;
    }

    public void setFactor(Double factor) {
        this.factor = factor;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

    public tipoSecado getTipoSecado() {
        return tipoSecado;
    }

    public void setTipoSecado(tipoSecado tipoSecado) {
        this.tipoSecado = tipoSecado;
    }
    
    // Getters y setters
}

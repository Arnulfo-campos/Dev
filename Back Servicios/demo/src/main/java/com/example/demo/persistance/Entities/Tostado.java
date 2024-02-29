package com.example.demo.persistance.Entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Tostado")
public class Tostado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Fecha_Inicio")
    private Date fechaInicio;
    
    @Column(name = "Fecha_Final")
    private Date fechaFinal;
    
    @Column(name = "Temperatura_Inicial")
    private Integer temperaturaInicial;
    
    @Column(name = "Temperatura_2")
    private Integer temperatura2;
    
    @Column(name = "Hora_Temperatura_2")
    private Date horaTemperatura2;
    
    @Column(name = "Temperatura_3")
    private Integer temperatura3;
    
    @Column(name = "Hora_Temperatura_3")
    private Date horaTemperatura3;
    
    @Column(name = "Temperatura_Final")
    private Integer temperaturaFinal;
    
    @Column(name = "Humedad_Final")
    private Integer humedadFinal;
    
    @Lob
    @Column(name = "Muestra_Cafe")
    private byte[] muestraCafe;
    
    @Column(name = "Seleccion_Grano")
    private Boolean seleccionGrano;
    
    @Column(name = "Malla")
    private Integer malla;
    
    @Column(name = "Tonalidad_Agtron")
    private Integer tonalidadAgtron;

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

    public Integer getTemperaturaInicial() {
        return temperaturaInicial;
    }

    public void setTemperaturaInicial(Integer temperaturaInicial) {
        this.temperaturaInicial = temperaturaInicial;
    }

    public Integer getTemperatura2() {
        return temperatura2;
    }

    public void setTemperatura2(Integer temperatura2) {
        this.temperatura2 = temperatura2;
    }

    public Date getHoraTemperatura2() {
        return horaTemperatura2;
    }

    public void setHoraTemperatura2(Date horaTemperatura2) {
        this.horaTemperatura2 = horaTemperatura2;
    }

    public Integer getTemperatura3() {
        return temperatura3;
    }

    public void setTemperatura3(Integer temperatura3) {
        this.temperatura3 = temperatura3;
    }

    public Date getHoraTemperatura3() {
        return horaTemperatura3;
    }

    public void setHoraTemperatura3(Date horaTemperatura3) {
        this.horaTemperatura3 = horaTemperatura3;
    }

    public Integer getTemperaturaFinal() {
        return temperaturaFinal;
    }

    public void setTemperaturaFinal(Integer temperaturaFinal) {
        this.temperaturaFinal = temperaturaFinal;
    }

    public Integer getHumedadFinal() {
        return humedadFinal;
    }

    public void setHumedadFinal(Integer humedadFinal) {
        this.humedadFinal = humedadFinal;
    }

    public byte[] getMuestraCafe() {
        return muestraCafe;
    }

    public void setMuestraCafe(byte[] muestraCafe) {
        this.muestraCafe = muestraCafe;
    }

    public Boolean getSeleccionGrano() {
        return seleccionGrano;
    }

    public void setSeleccionGrano(Boolean seleccionGrano) {
        this.seleccionGrano = seleccionGrano;
    }

    public Integer getMalla() {
        return malla;
    }

    public void setMalla(Integer malla) {
        this.malla = malla;
    }

    public Integer getTonalidadAgtron() {
        return tonalidadAgtron;
    }

    public void setTonalidadAgtron(Integer tonalidadAgtron) {
        this.tonalidadAgtron = tonalidadAgtron;
    }
    
    // Getters y setters
}

package com.example.demo.persistance.Entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "control_hierbas")
public class ControlHierbas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Enumerated(EnumType.STRING)
    private TipoControl tipo;
    
    //@Column(name = "Cantidad_Aplicada")
    private Double cantidadAplicada;
    
   //@Column(name = "Fecha_Inicio")
    private Date fechaInicio;
    
    //@Column(name = "Fecha_Final")
    private Date fechaFinal;
    
    //@Column(name = "Proceso_Control", columnDefinition = "TEXT")
    private String procesoControl;
    
    @Lob
    private byte[] imagen;

    @ManyToOne
    @JoinColumn(name = "Sembrado_ID")
    private Crecimiento crecimiento;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getCantidadAplicada() {
        return cantidadAplicada;
    }

    public void setCantidadAplicada(Double cantidadAplicada) {
        this.cantidadAplicada = cantidadAplicada;
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

    public String getProcesoControl() {
        return procesoControl;
    }

    public void setProcesoControl(String procesoControl) {
        this.procesoControl = procesoControl;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public Crecimiento getCrecimiento() {
        return crecimiento;
    }

    public void setCrecimiento(Crecimiento crecimiento) {
        this.crecimiento = crecimiento;
    }

    public TipoControl getTipo() {
        return tipo;
    }

    public void setTipo(TipoControl tipo) {
        this.tipo = tipo;
    }
    
    // Getters y setters
}

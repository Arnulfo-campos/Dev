package com.example.demo.persistance.Entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "descope")
public class Descope {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Fecha_Inicio")
    private Date fechaInicio;
    
    @Column(name = "Fecha_Final")
    private Date fechaFinal;
    
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
    
    // Getters y setters
}

package com.example.demo.persistance.Entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "peso_diario")
public class PesoDiario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Fecha_Registro")
    private Date fechaRegistro;
    
    @Column(name = "Peso_Cafe")
    private Double pesoCafe;
    
    @Column(name = "Peso_Despulpado")
    private Double pesoDespulpado;
    
    @Lob
    private byte[] imagen;

    @ManyToOne
    @JoinColumn(name = "Cosecha_ID")
    private Cosecha cosecha;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public Double getPesoCafe() {
        return pesoCafe;
    }

    public void setPesoCafe(Double pesoCafe) {
        this.pesoCafe = pesoCafe;
    }

    public Double getPesoDespulpado() {
        return pesoDespulpado;
    }

    public void setPesoDespulpado(Double pesoDespulpado) {
        this.pesoDespulpado = pesoDespulpado;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public Cosecha getCosecha() {
        return cosecha;
    }

    public void setCosecha(Cosecha cosecha) {
        this.cosecha = cosecha;
    }
    
    // Getters y setters
}

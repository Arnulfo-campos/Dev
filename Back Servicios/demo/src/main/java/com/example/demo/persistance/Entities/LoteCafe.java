package com.example.demo.persistance.Entities;

import jakarta.persistence.*;
import java.util.Date;


@Entity
@Table(name = "lote_cafe")
public class LoteCafe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "Germinacion_ID")
    private Germinacion germinacion;
    
    @ManyToOne
    @JoinColumn(name = "Cultivador_ID")
    private Cultivador cultivador;

    @ManyToOne
    @JoinColumn(name = "Crecimiento_ID")
    private Crecimiento crecimiento;
    
    @ManyToOne
    @JoinColumn(name = "Envasado_ID")
    private Envasado envasado;

    @Column(name = "Fecha_Registro")
    private Date fechaRegistro;
    
    @Column(name = "Fecha_Last_UPD")
    private Date fechaLastUpdate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Germinacion getGerminacion() {
        return germinacion;
    }

    public void setGerminacion(Germinacion germinacion) {
        this.germinacion = germinacion;
    }

    public Cultivador getCultivador() {
        return cultivador;
    }

    public void setCultivador(Cultivador cultivador) {
        this.cultivador = cultivador;
    }

    public Crecimiento getCrecimiento() {
        return crecimiento;
    }

    public void setCrecimiento(Crecimiento crecimiento) {
        this.crecimiento = crecimiento;
    }

    public Envasado getEnvasado() {
        return envasado;
    }

    public void setEnvasado(Envasado envasado) {
        this.envasado = envasado;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public Date getFechaLastUpdate() {
        return fechaLastUpdate;
    }

    public void setFechaLastUpdate(Date fechaLastUpdate) {
        this.fechaLastUpdate = fechaLastUpdate;
    }
    
    // Getters y setters
}

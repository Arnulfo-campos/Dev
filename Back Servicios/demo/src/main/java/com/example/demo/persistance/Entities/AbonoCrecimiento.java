package com.example.demo.persistance.Entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "abono_crecimiento")
public class AbonoCrecimiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nombre;
    
   // @Column(name = "Cantidad_Aplicada")
    private Double cantidadAplicada;
    
    //@Column(name = "Fecha_Aplicacion")
    private Date fechaAplicacion;
    
    //@Column(name = "Formula_Aplicada", columnDefinition = "TEXT")
    private String formulaAplicada;
    
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

    public Crecimiento getCrecimiento() {
        return crecimiento;
    }

    public void setCrecimiento(Crecimiento crecimiento) {
        this.crecimiento = crecimiento;
    }
    
    // Getters y setters
}

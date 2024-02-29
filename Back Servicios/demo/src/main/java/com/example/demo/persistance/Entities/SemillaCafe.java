package com.example.demo.persistance.Entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Semilla_Cafe")
public class SemillaCafe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Tipo_Variedad", length = 255)
    private String tipoVariedad;
    
    @Column(name = "Origen", length = 255)
    private String origen;
    
    @Column(name = "Certificada")
    private Boolean certificada;
    
    @Column(name = "Cantidad_KG")
    private Double cantidadKG;
    
    @Column(name = "Fecha_Registro")
    private Date fechaRegistro;
    
    @Column(name = "Fecha_Adquisicion")
    private Date fechaAdquisicion;
    
    @ManyToOne
    @JoinColumn(name = "Germinacion_ID")
    private Germinacion germinacion;
    
    @ManyToOne
    @JoinColumn(name = "Lote_Cafe_ID")
    private LoteCafe loteCafe;
    
    @Lob
    private byte[] imagen;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTipoVariedad() {
        return tipoVariedad;
    }

    public void setTipoVariedad(String tipoVariedad) {
        this.tipoVariedad = tipoVariedad;
    }

    public String getOrigen() {
        return origen;
    }

    public void setOrigen(String origen) {
        this.origen = origen;
    }

    public Boolean getCertificada() {
        return certificada;
    }

    public void setCertificada(Boolean certificada) {
        this.certificada = certificada;
    }

    public Double getCantidadKG() {
        return cantidadKG;
    }

    public void setCantidadKG(Double cantidadKG) {
        this.cantidadKG = cantidadKG;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public Date getFechaAdquisicion() {
        return fechaAdquisicion;
    }

    public void setFechaAdquisicion(Date fechaAdquisicion) {
        this.fechaAdquisicion = fechaAdquisicion;
    }

    public Germinacion getGerminacion() {
        return germinacion;
    }

    public void setGerminacion(Germinacion germinacion) {
        this.germinacion = germinacion;
    }

    public LoteCafe getLoteCafe() {
        return loteCafe;
    }

    public void setLoteCafe(LoteCafe loteCafe) {
        this.loteCafe = loteCafe;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }
    
    // Getters y setters
}

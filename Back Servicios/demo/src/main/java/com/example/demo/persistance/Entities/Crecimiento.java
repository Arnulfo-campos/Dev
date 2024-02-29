package com.example.demo.persistance.Entities;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Crecimiento")
public class Crecimiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Fecha_Sembrado")
    private Date fechaSembrado;
    
    @Column(name = "Area_Lote")
    private Integer areaLote;
    
    @Enumerated(EnumType.STRING)
    private String sombra;
    
    @Column(name = "Distancia_Siembra")
    private Integer distanciaSiembra;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "Tipo_Trazo")
    private String tipoTrazo;
    
    @Column(name = "Profundidad_Ahoyado")
    private Integer profundidadAhoyado;
    
    @Column(name = "Chapolas_Sembradas")
    private Integer chapolasSembradas;
    
    @Column(name = "Chapolas_Finales")
    private Integer chapolasFinales;
    
    @Column(name = "Fecha_Final")
    private Date fechaFinal;
    
    @Column(name = "Departamento", length = 255)
    private String departamento;
    
    @Column(name = "Ciudad", length = 255)
    private String ciudad;
    
    @Column(name = "Direccion", length = 255)
    private String direccion;
    
    @Column(name = "Nombre_Finca", length = 255)
    private String nombreFinca;
    
    @Column(name = "Ubicacion_Latitud")
    private Double ubicacionLatitud;
    
    @Column(name = "Ubicacion_Longitud")
    private Double ubicacionLongitud;
    
    @Column(name = "Altitud")
    private Integer altitud;
    
    @Column(name = "Temperatura_Media")
    private Double temperaturaMedia;
    
    @Column(name = "Humedad_Media")
    private Double humedadMedia;
    
    @Column(name = "Observaciones", columnDefinition = "TEXT")
    private String observaciones;
    
    @Lob
    private byte[] imagen;

    @ManyToOne
    @JoinColumn(name = "Cultivador_Id")
    private Cultivador cultivador;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getFechaSembrado() {
        return fechaSembrado;
    }

    public void setFechaSembrado(Date fechaSembrado) {
        this.fechaSembrado = fechaSembrado;
    }

    public Integer getAreaLote() {
        return areaLote;
    }

    public void setAreaLote(Integer areaLote) {
        this.areaLote = areaLote;
    }

    public String getSombra() {
        return sombra;
    }

    public void setSombra(String sombra) {
        this.sombra = sombra;
    }

    public Integer getDistanciaSiembra() {
        return distanciaSiembra;
    }

    public void setDistanciaSiembra(Integer distanciaSiembra) {
        this.distanciaSiembra = distanciaSiembra;
    }

    public String getTipoTrazo() {
        return tipoTrazo;
    }

    public void setTipoTrazo(String tipoTrazo) {
        this.tipoTrazo = tipoTrazo;
    }

    public Integer getProfundidadAhoyado() {
        return profundidadAhoyado;
    }

    public void setProfundidadAhoyado(Integer profundidadAhoyado) {
        this.profundidadAhoyado = profundidadAhoyado;
    }

    public Integer getChapolasSembradas() {
        return chapolasSembradas;
    }

    public void setChapolasSembradas(Integer chapolasSembradas) {
        this.chapolasSembradas = chapolasSembradas;
    }

    public Integer getChapolasFinales() {
        return chapolasFinales;
    }

    public void setChapolasFinales(Integer chapolasFinales) {
        this.chapolasFinales = chapolasFinales;
    }

    public Date getFechaFinal() {
        return fechaFinal;
    }

    public void setFechaFinal(Date fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    public String getDepartamento() {
        return departamento;
    }

    public void setDepartamento(String departamento) {
        this.departamento = departamento;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getNombreFinca() {
        return nombreFinca;
    }

    public void setNombreFinca(String nombreFinca) {
        this.nombreFinca = nombreFinca;
    }

    public Double getUbicacionLatitud() {
        return ubicacionLatitud;
    }

    public void setUbicacionLatitud(Double ubicacionLatitud) {
        this.ubicacionLatitud = ubicacionLatitud;
    }

    public Double getUbicacionLongitud() {
        return ubicacionLongitud;
    }

    public void setUbicacionLongitud(Double ubicacionLongitud) {
        this.ubicacionLongitud = ubicacionLongitud;
    }

    public Integer getAltitud() {
        return altitud;
    }

    public void setAltitud(Integer altitud) {
        this.altitud = altitud;
    }

    public Double getTemperaturaMedia() {
        return temperaturaMedia;
    }

    public void setTemperaturaMedia(Double temperaturaMedia) {
        this.temperaturaMedia = temperaturaMedia;
    }

    public Double getHumedadMedia() {
        return humedadMedia;
    }

    public void setHumedadMedia(Double humedadMedia) {
        this.humedadMedia = humedadMedia;
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

    public Cultivador getCultivador() {
        return cultivador;
    }

    public void setCultivador(Cultivador cultivador) {
        this.cultivador = cultivador;
    }
    
    // Getters y setters
}

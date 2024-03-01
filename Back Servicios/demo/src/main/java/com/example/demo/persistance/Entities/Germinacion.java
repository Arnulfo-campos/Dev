package com.example.demo.persistance.Entities;

import jakarta.persistence.*;
import java.util.Date;


@Entity
@Table(name = "germinacion")
public class Germinacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Profundidad")
    private Double profundidad;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "Tipo_Germinador")
    private tipoGerminador tipoGerminador;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "Sombra")
    private TipoSombra sombra;
    
    @Column(name = "Area")
    private Integer area;
    
    @Column(name = "Arena")
    private Boolean arena;
    
    @Column(name = "Profundidad_Arena")
    private Double profundidadArena;
    
    @Column(name = "Peso_Arena")
    private Double pesoArena;
    
    @Column(name = "Cantidad_Chapolas_Obtenidas")
    private Integer cantidadChapolasObtenidas;
    
    @Column(name = "Observaciones", columnDefinition = "TEXT")
    private String observaciones;
    
    @Column(name = "Fecha_Final_Germinacion")
    private Date fechaFinalGerminacion;
    
    @Column(name = "Fecha_Registro")
    private Date fechaRegistro;
    
    @Lob
    private byte[] imagen;
    
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
    
    @ManyToOne
    @JoinColumn(name = "Cultivador_ID")
    private Cultivador cultivador;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getProfundidad() {
        return profundidad;
    }

    public void setProfundidad(Double profundidad) {
        this.profundidad = profundidad;
    }

    public Integer getArea() {
        return area;
    }

    public void setArea(Integer area) {
        this.area = area;
    }

    public Boolean getArena() {
        return arena;
    }

    public void setArena(Boolean arena) {
        this.arena = arena;
    }

    public Double getProfundidadArena() {
        return profundidadArena;
    }

    public void setProfundidadArena(Double profundidadArena) {
        this.profundidadArena = profundidadArena;
    }

    public Double getPesoArena() {
        return pesoArena;
    }

    public void setPesoArena(Double pesoArena) {
        this.pesoArena = pesoArena;
    }

    public Integer getCantidadChapolasObtenidas() {
        return cantidadChapolasObtenidas;
    }

    public void setCantidadChapolasObtenidas(Integer cantidadChapolasObtenidas) {
        this.cantidadChapolasObtenidas = cantidadChapolasObtenidas;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public Date getFechaFinalGerminacion() {
        return fechaFinalGerminacion;
    }

    public void setFechaFinalGerminacion(Date fechaFinalGerminacion) {
        this.fechaFinalGerminacion = fechaFinalGerminacion;
    }

    public Date getFechaRegistro() {
        return fechaRegistro;
    }

    public void setFechaRegistro(Date fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
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

    public Cultivador getCultivador() {
        return cultivador;
    }

    public void setCultivador(Cultivador cultivador) {
        this.cultivador = cultivador;
    }

    public tipoGerminador getTipoGerminador() {
        return tipoGerminador;
    }

    public void setTipoGerminador(tipoGerminador tipoGerminador) {
        this.tipoGerminador = tipoGerminador;
    }

    public TipoSombra getSombra() {
        return sombra;
    }

    public void setSombra(TipoSombra sombra) {
        this.sombra = sombra;
    }
    
    // Getters y setters
}

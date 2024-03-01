package com.example.demo.DTO;

import java.util.Date;

import com.example.demo.persistance.Entities.TipoSombra;

public class GerminacionDTO {
    private Long id;
    private Double profundidad;
    private String tipoGerminador;
    private TipoSombra sombra;
    private Integer area;
    private Boolean arena;
    private Double profundidadArena;
    private Double pesoArena;
    private Integer cantidadChapolasObtenidas;
    private String observaciones;
    private Date fechaFinalGerminacion;
    private Date fechaRegistro;
    private byte[] imagen;
    private String departamento;
    private String ciudad;
    private String direccion;
    private String nombreFinca;
    private Double ubicacionLatitud;
    private Double ubicacionLongitud;
    private Integer altitud;
    private Double temperaturaMedia;
    private Double humedadMedia;
    private long cultivadorId;

    
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
    public String getTipoGerminador() {
        return tipoGerminador;
    }
    public void setTipoGerminador(String tipoGerminador) {
        this.tipoGerminador = tipoGerminador;
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
    public long getCultivadorId() {
        return cultivadorId;
    }
    public void setCultivadorId(long cultivadorId) {
        this.cultivadorId = cultivadorId;
    }
    public TipoSombra getSombra() {
        return sombra;
    }
    public void setSombra(TipoSombra sombra) {
        this.sombra = sombra;
    }

    // Getters y setters
}

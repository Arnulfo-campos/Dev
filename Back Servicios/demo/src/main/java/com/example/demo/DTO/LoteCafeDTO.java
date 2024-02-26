package com.example.demo.DTO;

public class LoteCafeDTO {
    private Long id;
    private String departamento;
    private String ciudad;
    private String direccion;
    private String nombreFincaVivero;
    private Double ubicacionLatitud;
    private Double ubicacionLongitud;
    private Double altitud;
    private Double temperaturaMedia;
    private Double humedadMedia;
    private String usuario;
    private Long idGerminacion; // Esto es para almacenar solo el ID de la Germinacion
    private Long idCultivador; // Esto es para almacenar solo el ID de la Germinacion
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
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
    public String getNombreFincaVivero() {
        return nombreFincaVivero;
    }
    public void setNombreFincaVivero(String nombreFincaVivero) {
        this.nombreFincaVivero = nombreFincaVivero;
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
    public Double getAltitud() {
        return altitud;
    }
    public void setAltitud(Double altitud) {
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
    public String getUsuario() {
        return usuario;
    }
    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
    public Long getIdGerminacion() {
        return idGerminacion;
    }
    public void setIdGerminacion(Long idGerminacion) {
        this.idGerminacion = idGerminacion;
    }
    public Long getIdCultivador() {
        return idCultivador;
    }
    public void setIdCultivador(Long idCultivador) {
        this.idCultivador = idCultivador;
    }

    // Getters y setters
}

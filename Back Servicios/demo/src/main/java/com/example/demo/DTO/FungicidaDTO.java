package com.example.demo.DTO;

import java.util.Date;

public class FungicidaDTO {
    private Long id;
    private String nombre;
    private Double cantidadAplicada;
    private Date fechaAplicacion;
    private Long idGerminacion; // Esto es para almacenar solo el ID de la Germinacion

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
    public Long getIdGerminacion() {
        return idGerminacion;
    }
    public void setIdGerminacion(Long idGerminacion) {
        this.idGerminacion = idGerminacion;
    }
    public Object map(Object object) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'map'");
    }

    // Getters y setters
}

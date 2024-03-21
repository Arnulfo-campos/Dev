package com.example.demo.persistance.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "cultivador")
public class Cultivador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "Nombre", length = 255)
    private String nombre;
    
    @Column(name = "Apellido", length = 255)
    private String apellido;
    
    @Column(name = "Direccion", length = 255)
    private String direccion;
    
    @Column(name = "Telefono", length = 20)
    private String telefono;
    
    @Column(name = "Correo", length = 255)
    private String correo;
    
    @Lob
    private byte[] imagen;

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

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    // Getters y setters

}

package com.example.demo.persistance.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "loteusuario")
public class LoteUsuario {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_lote")
    private Long idLote;

    @Column(name = "id_cosecha")
    private Long idCosecha;

    @Column(name = "id_usuario")
    private Long idUsuario;

    @Column(name = "id_formulario")
    private Long idFormulario;

    @Column(name = "Hash")
    private String hash;

    @Column(name = "imagenIPFS")
    private String imagenIPFS;

    @Column(name = "NFT")
    private String NFT;


    public Long getIdLote() {
        return idLote;
    }

    public void setIdLote(Long idLote) {
        this.idLote = idLote;
    }

    public Long getIdCosecha() {
        return idCosecha;
    }

    public void setIdCosecha(Long idCosecha) {
        this.idCosecha = idCosecha;
    }

    public Long getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Long idUsuario) {
        this.idUsuario = idUsuario;
    }

    public Long getIdFormulario() {
        return idFormulario;
    }

    public void setIdFormulario(Long idFormulario) {
        this.idFormulario = idFormulario;
    }

    public String getHash() {
        return hash;
    }

    public void setHash(String hash) {
        this.hash = hash;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImagenIPFS() {
        return imagenIPFS;
    }

    public void setImagenIPFS(String imagenIPFS) {
        this.imagenIPFS = imagenIPFS;
    }

    public String getNFT() {
        return NFT;
    }

    public void setNFT(String nFT) {
        NFT = nFT;
    }
    
}

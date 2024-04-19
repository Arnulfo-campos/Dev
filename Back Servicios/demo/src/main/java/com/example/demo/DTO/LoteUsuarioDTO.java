package com.example.demo.DTO;


public class LoteUsuarioDTO {
    private Long id;
    private Long idLote;
    private Long idCosecha;
    private Long idUsuario;
    private Long idFormulario;
    private String hash;
    private String imagenIPFS;
    private String NFT;


    // Getters y setters

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

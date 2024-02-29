package com.example.demo.persistance.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Cosecha_Lote")
public class CosechaLote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "Lote_ID")
    private LoteCafe loteCafe;
    
    @ManyToOne
    @JoinColumn(name = "Cosecha_ID")
    private Cosecha cosecha;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LoteCafe getLoteCafe() {
        return loteCafe;
    }

    public void setLoteCafe(LoteCafe loteCafe) {
        this.loteCafe = loteCafe;
    }

    public Cosecha getCosecha() {
        return cosecha;
    }

    public void setCosecha(Cosecha cosecha) {
        this.cosecha = cosecha;
    }
    
    // Getters y setters
}

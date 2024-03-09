package com.example.demo.Controllers;

import com.example.demo.DTO.FungicidaDTO;
import com.example.demo.Services.FungicidaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fungicidas")
@CrossOrigin
public class FungicidaController {

    @Autowired
    private FungicidaService fungicidaService;

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosFungicidas() {
        List<FungicidaDTO> fungicidas = fungicidaService.obtenerTodosLosFungicidas();
        return new ResponseEntity<>(fungicidas, HttpStatus.OK);
    }

      @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerFungicidaPorId(@PathVariable Long id) {
        FungicidaDTO fungicidaDTO = fungicidaService.obtenerFungicidaPorId(id);
        if (fungicidaDTO != null) {
            return new ResponseEntity<>(fungicidaDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fungicida no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<? extends Object> crearFungicida(@RequestBody FungicidaDTO fungicidaDTO) {
        try {
            FungicidaDTO newFungicida = fungicidaService.crearFungicida(fungicidaDTO);
            if (newFungicida != null) {
                return new ResponseEntity<>(newFungicida, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear Fungicida", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarFungicida(@PathVariable Long id) {
        try {
            fungicidaService.eliminarFungicida(id);
            return new ResponseEntity<>("Fungicida eliminado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

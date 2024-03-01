package com.example.demo.Controllers;

import com.example.demo.DTO.FungicidaCrecimientoDTO;
import com.example.demo.Services.FungicidaCreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fungicidas-crecimiento")
@CrossOrigin
public class FungicidaCreController {

    @Autowired
    private FungicidaCreService fungicidaCrecimientoService;

    @PostMapping
    public ResponseEntity<? extends Object> crearFungicidaCrecimiento(@RequestBody FungicidaCrecimientoDTO fungicidaCrecimientoDTO) {
        try {
            FungicidaCrecimientoDTO newFungicidaCrecimiento = fungicidaCrecimientoService.crearFungicidaCrecimiento(fungicidaCrecimientoDTO);
            if (newFungicidaCrecimiento != null) {
                return new ResponseEntity<>(newFungicidaCrecimiento, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear el fungicida para crecimiento", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerFungicidaCrecimientoPorId(@PathVariable Long id) {
        FungicidaCrecimientoDTO fungicidaCrecimientoDTO = fungicidaCrecimientoService.obtenerFungicidaCrecimientoPorId(id);
        if (fungicidaCrecimientoDTO != null) {
            return new ResponseEntity<>(fungicidaCrecimientoDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fungicida para crecimiento no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosFungicidasCrecimiento() {
        List<FungicidaCrecimientoDTO> fungicidasCrecimiento = fungicidaCrecimientoService.obtenerTodosLosFungicidasCrecimiento();
        return new ResponseEntity<>(fungicidasCrecimiento, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarFungicidaCrecimiento(@PathVariable Long id, @RequestBody FungicidaCrecimientoDTO fungicidaCrecimientoDTO) {
        try {
            FungicidaCrecimientoDTO updatedFungicidaCrecimiento = fungicidaCrecimientoService.actualizarFungicidaCrecimiento(id, fungicidaCrecimientoDTO);
            if (updatedFungicidaCrecimiento != null) {
                return new ResponseEntity<>(updatedFungicidaCrecimiento, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Fungicida para crecimiento no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarFungicidaCrecimiento(@PathVariable Long id) {
        try {
            fungicidaCrecimientoService.eliminarFungicidaCrecimiento(id);
            return new ResponseEntity<>("Fungicida para crecimiento eliminado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

package com.example.demo.Controllers;

import com.example.demo.DTO.CosechaDTO;
import com.example.demo.Services.CosechaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cosechas")
@CrossOrigin("*")
public class CosechaController {

    @Autowired
    private CosechaService cosechaService;

    @PostMapping
    public ResponseEntity<? extends Object> crearCosecha(@RequestBody CosechaDTO cosechaDTO) {
        try {
            CosechaDTO newCosecha = cosechaService.crearCosecha(cosechaDTO);
            if (newCosecha != null) {
                return new ResponseEntity<>(newCosecha, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear la cosecha", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerCosechaPorId(@PathVariable Long id) {
        CosechaDTO cosechaDTO = cosechaService.obtenerCosechaPorId(id);
        if (cosechaDTO != null) {
            return new ResponseEntity<>(cosechaDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Cosecha no encontrada", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodasLasCosechas() {
        List<CosechaDTO> cosechas = cosechaService.obtenerTodasLasCosechas();
        return new ResponseEntity<>(cosechas, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarCosecha(@PathVariable Long id, @RequestBody CosechaDTO cosechaDTO) {
        try {
            CosechaDTO updatedCosecha = cosechaService.actualizarCosecha(id, cosechaDTO);
            if (updatedCosecha != null) {
                return new ResponseEntity<>(updatedCosecha, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Cosecha no encontrada", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarCosecha(@PathVariable Long id) {
        try {
            cosechaService.eliminarCosecha(id);
            return new ResponseEntity<>("Cosecha eliminada exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

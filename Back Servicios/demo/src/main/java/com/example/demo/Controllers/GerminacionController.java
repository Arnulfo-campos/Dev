package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.GerminacionDTO;
import com.example.demo.Services.GerminacionService;
import com.example.demo.persistance.Entities.Germinacion;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/germinaciones")
@CrossOrigin("*")
public class GerminacionController {

    @Autowired
    private GerminacionService germinacionService;

    @PostMapping
    public ResponseEntity<? extends Object> crearGerminacion(@RequestBody GerminacionDTO germinacionDTO) {
        try {
            GerminacionDTO newGerminacion = germinacionService.crearGerminacion(germinacionDTO);
            if (newGerminacion!= null) {
                return new ResponseEntity<>(newGerminacion, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear el proceso de Germinacion", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerGerminacionPorId(@PathVariable Long id) {
        GerminacionDTO germinacionDTO = germinacionService.obtenerGerminacionPorId(id);
        if (germinacionDTO != null) {
            return new ResponseEntity<>(germinacionDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Germinacion no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosCultivadores() {
        List<GerminacionDTO> germinaciones = germinacionService.obtenerTodasLasGerminaciones();
        return new ResponseEntity<>(germinaciones, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarCultivador(@PathVariable Long id, @RequestBody GerminacionDTO germinacionDTO) {
        try {
            GerminacionDTO updatedGerminacion = germinacionService.actualizarGerminacion(id, germinacionDTO);
            if (updatedGerminacion != null) {
                return new ResponseEntity<>(updatedGerminacion, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Germinacion no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarCultivador(@PathVariable Long id) {
        try {
            germinacionService.eliminarGerminacion(id);;
            return new ResponseEntity<>("Germinacion eliminado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

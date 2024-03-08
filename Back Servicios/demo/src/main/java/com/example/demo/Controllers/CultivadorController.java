package com.example.demo.Controllers;

import com.example.demo.DTO.CultivadorDTO;
import com.example.demo.Services.CultivadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cultivadores")
@CrossOrigin("*")
public class CultivadorController {

    @Autowired
    private CultivadorService cultivadorService;

    @PostMapping
    public ResponseEntity<? extends Object> crearCultivador(@RequestBody CultivadorDTO cultivadorDTO) {
        try {
            CultivadorDTO newCultivador = cultivadorService.crearCultivador(cultivadorDTO);
            if (newCultivador != null) {
                return new ResponseEntity<>(newCultivador, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear el cultivador", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerCultivadorPorId(@PathVariable Long id) {
        CultivadorDTO cultivadorDTO = cultivadorService.obtenerCultivadorPorId(id);
        if (cultivadorDTO != null) {
            return new ResponseEntity<>(cultivadorDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Cultivador no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosCultivadores() {
        List<CultivadorDTO> cultivadores = cultivadorService.obtenerTodosLosCultivadores();
        return new ResponseEntity<>(cultivadores, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarCultivador(@PathVariable Long id, @RequestBody CultivadorDTO cultivadorDTO) {
        try {
            CultivadorDTO updatedCultivador = cultivadorService.actualizarCultivador(id, cultivadorDTO);
            if (updatedCultivador != null) {
                return new ResponseEntity<>(updatedCultivador, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Cultivador no encontrado", HttpStatus.NOT_FOUND);
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
            cultivadorService.eliminarCultivador(id);
            return new ResponseEntity<>("Cultivador eliminado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

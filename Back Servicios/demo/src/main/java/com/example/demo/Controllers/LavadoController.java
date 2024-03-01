package com.example.demo.Controllers;

import com.example.demo.DTO.LavadoDTO;
import com.example.demo.Services.LavadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lavados")
@CrossOrigin
public class LavadoController {

    @Autowired
    private LavadoService lavadoService;

    @PostMapping
    public ResponseEntity<? extends Object> crearLavado(@RequestBody LavadoDTO lavadoDTO) {
        try {
            LavadoDTO nuevoLavado = lavadoService.crearLavado(lavadoDTO);
            return new ResponseEntity<>(nuevoLavado, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerLavadoPorId(@PathVariable Long id) {
        LavadoDTO lavadoDTO = lavadoService.obtenerLavadoPorId(id);
        if (lavadoDTO != null) {
            return new ResponseEntity<>(lavadoDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Lavado no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosLavados() {
        List<LavadoDTO> lavados = lavadoService.obtenerTodosLosLavados();
        return new ResponseEntity<>(lavados, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarLavado(@PathVariable Long id, @RequestBody LavadoDTO lavadoDTO) {
        try {
            LavadoDTO lavadoActualizado = lavadoService.actualizarLavado(id, lavadoDTO);
            if (lavadoActualizado != null) {
                return new ResponseEntity<>(lavadoActualizado, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Lavado no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarLavado(@PathVariable Long id) {
        try {
            lavadoService.eliminarLavado(id);
            return new ResponseEntity<>("Lavado eliminado correctamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

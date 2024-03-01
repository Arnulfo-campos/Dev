package com.example.demo.Controllers;

import com.example.demo.DTO.PesoDiarioDTO;
import com.example.demo.Services.PesoDiarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/peso_diario")
@CrossOrigin
public class PesoDiarioController {

    @Autowired
    private PesoDiarioService pesoDiarioService;

    @PostMapping
    public ResponseEntity<? extends Object> crearPesoDiario(@RequestBody PesoDiarioDTO pesoDiarioDTO) {
        try {
            PesoDiarioDTO nuevoPesoDiario = pesoDiarioService.crearPesoDiario(pesoDiarioDTO);
            return new ResponseEntity<>(nuevoPesoDiario, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerPesoDiarioPorId(@PathVariable Long id) {
        PesoDiarioDTO pesoDiarioDTO = pesoDiarioService.obtenerPesoDiarioPorId(id);
        if (pesoDiarioDTO != null) {
            return new ResponseEntity<>(pesoDiarioDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Peso diario no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosPesosDiarios() {
        List<PesoDiarioDTO> pesosDiarios = pesoDiarioService.obtenerTodosLosPesosDiarios();
        return new ResponseEntity<>(pesosDiarios, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarPesoDiario(@PathVariable Long id, @RequestBody PesoDiarioDTO pesoDiarioDTO) {
        try {
            PesoDiarioDTO pesoDiarioActualizado = pesoDiarioService.actualizarPesoDiario(id, pesoDiarioDTO);
            if (pesoDiarioActualizado != null) {
                return new ResponseEntity<>(pesoDiarioActualizado, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Peso diario no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarPesoDiario(@PathVariable Long id) {
        try {
            pesoDiarioService.eliminarPesoDiario(id);
            return new ResponseEntity<>("Peso diario eliminado correctamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

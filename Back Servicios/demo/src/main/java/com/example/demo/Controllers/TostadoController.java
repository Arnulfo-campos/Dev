package com.example.demo.Controllers;

import com.example.demo.DTO.TostadoDTO;
import com.example.demo.Services.TostadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tostado")
@CrossOrigin
public class TostadoController {

    @Autowired
    private TostadoService tostadoService;

    @PostMapping
    public ResponseEntity<? extends Object> crearTostado(@RequestBody TostadoDTO tostadoDTO) {
        try {
            TostadoDTO nuevoTostado = tostadoService.crearTostado(tostadoDTO);
            return new ResponseEntity<>(nuevoTostado, HttpStatus.CREATED);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerTostadoPorId(@PathVariable Long id) {
        TostadoDTO tostadoDTO = tostadoService.obtenerTostadoPorId(id);
        if (tostadoDTO != null) {
            return new ResponseEntity<>(tostadoDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Tostado no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosTostados() {
        List<TostadoDTO> tostados = tostadoService.obtenerTodosLosTostados();
        return new ResponseEntity<>(tostados, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarTostado(@PathVariable Long id, @RequestBody TostadoDTO tostadoDTO) {
        try {
            TostadoDTO tostadoActualizado = tostadoService.actualizarTostado(id, tostadoDTO);
            if (tostadoActualizado != null) {
                return new ResponseEntity<>(tostadoActualizado, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Tostado no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarTostado(@PathVariable Long id) {
        try {
            tostadoService.eliminarTostado(id);
            return new ResponseEntity<>("Tostado eliminado correctamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

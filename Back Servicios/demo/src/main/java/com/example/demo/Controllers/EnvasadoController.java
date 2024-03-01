package com.example.demo.Controllers;

import com.example.demo.DTO.EnvasadoDTO;
import com.example.demo.Services.EnvasadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/envasados")
@CrossOrigin
public class EnvasadoController {

    @Autowired
    private EnvasadoService envasadoService;

    @PostMapping
    public ResponseEntity<? extends Object> crearEnvasado(@RequestBody EnvasadoDTO envasadoDTO) {
        try {
            EnvasadoDTO newEnvasado = envasadoService.crearEnvasado(envasadoDTO);
            if (newEnvasado != null) {
                return new ResponseEntity<>(newEnvasado, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear el envasado", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerEnvasadoPorId(@PathVariable Long id) {
        EnvasadoDTO envasadoDTO = envasadoService.obtenerEnvasadoPorId(id);
        if (envasadoDTO != null) {
            return new ResponseEntity<>(envasadoDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Envasado no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosEnvasados() {
        List<EnvasadoDTO> envasados = envasadoService.obtenerTodosLosEnvasados();
        return new ResponseEntity<>(envasados, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarEnvasado(@PathVariable Long id, @RequestBody EnvasadoDTO envasadoDTO) {
        try {
            EnvasadoDTO updatedEnvasado = envasadoService.actualizarEnvasado(id, envasadoDTO);
            if (updatedEnvasado != null) {
                return new ResponseEntity<>(updatedEnvasado, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Envasado no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarEnvasado(@PathVariable Long id) {
        try {
            envasadoService.eliminarEnvasado(id);
            return new ResponseEntity<>("Envasado eliminado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

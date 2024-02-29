package com.example.demo.Controllers;

import com.example.demo.DTO.CrecimientoDTO;
import com.example.demo.Services.CrecimientoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/crecimientos")
@CrossOrigin
public class CrecimientoController {

    @Autowired
    private CrecimientoService crecimientoService;

    @PostMapping
    public ResponseEntity<? extends Object> crearCrecimiento(@RequestBody CrecimientoDTO crecimientoDTO) {
        try {
            CrecimientoDTO newCrecimiento = crecimientoService.crearCrecimiento(crecimientoDTO);
            if (newCrecimiento != null) {
                return new ResponseEntity<>(newCrecimiento, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear el crecimiento", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerCrecimientoPorId(@PathVariable Long id) {
        CrecimientoDTO crecimientoDTO = crecimientoService.obtenerCrecimientoPorId(id);
        if (crecimientoDTO != null) {
            return new ResponseEntity<>(crecimientoDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Crecimiento no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosCrecimientos() {
        List<CrecimientoDTO> crecimientos = crecimientoService.obtenerTodosLosCrecimientos();
        return new ResponseEntity<>(crecimientos, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarCrecimiento(@PathVariable Long id, @RequestBody CrecimientoDTO crecimientoDTO) {
        try {
            CrecimientoDTO updatedCrecimiento = crecimientoService.actualizarCrecimiento(id, crecimientoDTO);
            if (updatedCrecimiento != null) {
                return new ResponseEntity<>(updatedCrecimiento, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Crecimiento no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarCrecimiento(@PathVariable Long id) {
        try {
            crecimientoService.eliminarCrecimiento(id);
            return new ResponseEntity<>("Crecimiento eliminado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

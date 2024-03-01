package com.example.demo.Controllers;

import com.example.demo.DTO.CosechaLoteDTO;
import com.example.demo.Services.CosechaLoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cosecha-lote")
@CrossOrigin
public class CosechaLoteController {

    @Autowired
    private CosechaLoteService cosechaLoteService;

    @PostMapping
    public ResponseEntity<? extends Object> crearCosechaLote(@RequestBody CosechaLoteDTO cosechaLoteDTO) {
        try {
            CosechaLoteDTO newCosechaLote = cosechaLoteService.crearCosechaLote(cosechaLoteDTO);
            if (newCosechaLote != null) {
                return new ResponseEntity<>(newCosechaLote, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear la cosecha de lote", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerCosechaLotePorId(@PathVariable Long id) {
        CosechaLoteDTO cosechaLoteDTO = cosechaLoteService.obtenerCosechaLotePorId(id);
        if (cosechaLoteDTO != null) {
            return new ResponseEntity<>(cosechaLoteDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Cosecha de lote no encontrada", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosCosechasLote() {
        List<CosechaLoteDTO> cosechasLote = cosechaLoteService.obtenerTodosLosCosechaLotes();
        return new ResponseEntity<>(cosechasLote, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarCosechaLote(@PathVariable Long id, @RequestBody CosechaLoteDTO cosechaLoteDTO) {
        try {
            CosechaLoteDTO updatedCosechaLote = cosechaLoteService.actualizarCosechaLote(id, cosechaLoteDTO);
            if (updatedCosechaLote != null) {
                return new ResponseEntity<>(updatedCosechaLote, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Cosecha de lote no encontrada", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarCosechaLote(@PathVariable Long id) {
        try {
            cosechaLoteService.eliminarCosechaLote(id);
            return new ResponseEntity<>("Cosecha de lote eliminada exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

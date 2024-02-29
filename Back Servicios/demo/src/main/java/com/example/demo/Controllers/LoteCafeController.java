package com.example.demo.Controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.demo.DTO.LoteCafeDTO;
import com.example.demo.Mappers.LoteCafeMapper;
import com.example.demo.Services.LoteCafeService;
import com.example.demo.persistance.Entities.LoteCafe;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/lotes-cafe")
public class LoteCafeController {
    @Autowired
    private LoteCafeService loteCafeService;

    @PostMapping
    public ResponseEntity<? extends Object> crearLote(@RequestBody LoteCafeDTO loteCafeDTO) {
        try {
            LoteCafeDTO newLote = loteCafeService.crearLoteCafe(loteCafeDTO);
            if (newLote != null) {
                return new ResponseEntity<>(newLote, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear el nuevo lote", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerLotePorId(@PathVariable Long id) {
        LoteCafeDTO loteCafeDTO = loteCafeService.obtenerLoteCafePorId(id);
        if (loteCafeDTO != null) {
            return new ResponseEntity<>(loteCafeDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Lote de Cafe no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosLotes() {
        List<LoteCafeDTO> lotes = loteCafeService.obtenerTodosLosLotesCafe();
        return new ResponseEntity<>(lotes, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarLote(@PathVariable Long id, @RequestBody LoteCafeDTO loteCafeDTO) {
        try {
            LoteCafeDTO updatedLotes = loteCafeService.actualizarLoteCafe(id, loteCafeDTO);
            if (updatedLotes != null) {
                return new ResponseEntity<>(updatedLotes, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Lote de Cafe no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarLote(@PathVariable Long id) {
        try {
            loteCafeService.eliminarLoteCafe(id);
            return new ResponseEntity<>("Lote de Cafe eliminado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

package com.example.demo.Controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.DTO.SemillaCafeDTO;
import com.example.demo.Services.SemillaCafeService;
import java.util.List;
import java.util.Base64;
import java.util.Date;


@RestController
@RequestMapping("/semillas-cafe")
@CrossOrigin("*")
public class SemillaCafeController {
    @Autowired
    private SemillaCafeService semillaService;

    @PostMapping
    public ResponseEntity<? extends Object> crearSemilla(@RequestBody SemillaCafeDTO semillaCafeDTO) {
        try {
            Date fechaRegistro = semillaCafeDTO.getFechaRegistro(); // Obtenemos directamente la fecha
            semillaCafeDTO.setFechaRegistro(fechaRegistro);
            byte[] imageBytes = Base64.getDecoder().decode(semillaCafeDTO.getImagen());
            // Asignar los bytes de la imagen al DTO
            semillaCafeDTO.setImagen(imageBytes);
           SemillaCafeDTO newSemilla = semillaService.crearSemillaCafe(semillaCafeDTO);
            if (newSemilla != null) {
                return new ResponseEntity<>(newSemilla, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear la semilla", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerSemillaPorId(@PathVariable Long id) {
        SemillaCafeDTO semillaDTO = semillaService.obtenerSemillaCafePorId(id);
        if (semillaDTO != null) {
            return new ResponseEntity<>(semillaDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Semilla de cafe no encontrada", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosCultivadores() {
        List<SemillaCafeDTO> semillas = semillaService.obtenerTodasLasSemillasCafe();
        return new ResponseEntity<>(semillas, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarCultivador(@PathVariable Long id, @RequestBody SemillaCafeDTO semillaCafeDTO) {
        try {
            SemillaCafeDTO updatedSemilla = semillaService.actualizarSemillaCafe(id, semillaCafeDTO);
            if (updatedSemilla != null) {
                return new ResponseEntity<>(updatedSemilla, HttpStatus.OK);
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
            semillaService.eliminarSemillaCafe(id);
            return new ResponseEntity<>("Semilla eliminada exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

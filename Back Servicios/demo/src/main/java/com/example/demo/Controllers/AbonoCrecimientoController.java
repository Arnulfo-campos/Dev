package com.example.demo.Controllers;

import com.example.demo.DTO.AbonoCrecimientoDTO;
import com.example.demo.Services.AbonoCreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/abonos-crecimiento")
@CrossOrigin
public class AbonoCrecimientoController {

    @Autowired
    private AbonoCreService abonoCrecimientoService;

    @PostMapping
    public ResponseEntity<? extends Object> crearAbonoCrecimiento(@RequestBody AbonoCrecimientoDTO abonoCrecimientoDTO) {
        try {
            AbonoCrecimientoDTO newAbonoCrecimiento = abonoCrecimientoService.crearAbonoCrecimiento(abonoCrecimientoDTO);
            if (newAbonoCrecimiento != null) {
                return new ResponseEntity<>(newAbonoCrecimiento, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear el abono de crecimiento", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerAbonoCrecimientoPorId(@PathVariable Long id) {
        AbonoCrecimientoDTO abonoCrecimientoDTO = abonoCrecimientoService.obtenerAbonoCrecimientoPorId(id);
        if (abonoCrecimientoDTO != null) {
            return new ResponseEntity<>(abonoCrecimientoDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Abono de crecimiento no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosAbonosCrecimiento() {
        List<AbonoCrecimientoDTO> abonosCrecimiento = abonoCrecimientoService.obtenerTodosLosAbonosCrecimiento();
        return new ResponseEntity<>(abonosCrecimiento, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarAbonoCrecimiento(@PathVariable Long id, @RequestBody AbonoCrecimientoDTO abonoCrecimientoDTO) {
        try {
            AbonoCrecimientoDTO updatedAbonoCrecimiento = abonoCrecimientoService.actualizarAbonoCrecimiento(id, abonoCrecimientoDTO);
            if (updatedAbonoCrecimiento != null) {
                return new ResponseEntity<>(updatedAbonoCrecimiento, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Abono de crecimiento no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarAbonoCrecimiento(@PathVariable Long id) {
        try {
            abonoCrecimientoService.eliminarAbonoCrecimiento(id);
            return new ResponseEntity<>("Abono de crecimiento eliminado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

package com.example.demo.Controllers;

import com.example.demo.DTO.ControlHierbasDTO;
import com.example.demo.Services.ControlHierbasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/control-hierbas")
@CrossOrigin
public class ControlHierbasController {

    @Autowired
    private ControlHierbasService controlHierbasService;

    @PostMapping
    public ResponseEntity<? extends Object> crearControlHierbas(@RequestBody ControlHierbasDTO controlHierbasDTO) {
        try {
            ControlHierbasDTO newControlHierbas = controlHierbasService.crearControlHierbas(controlHierbasDTO);
            if (newControlHierbas != null) {
                return new ResponseEntity<>(newControlHierbas, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear el control de hierbas", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerControlHierbasPorId(@PathVariable Long id) {
        ControlHierbasDTO controlHierbasDTO = controlHierbasService.obtenerControlHierbasPorId(id);
        if (controlHierbasDTO != null) {
            return new ResponseEntity<>(controlHierbasDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Control de hierbas no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosControlesHierbas() {
        List<ControlHierbasDTO> controlesHierbas = controlHierbasService.obtenerTodosLosControlesHierbas();
        return new ResponseEntity<>(controlesHierbas, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarControlHierbas(@PathVariable Long id, @RequestBody ControlHierbasDTO controlHierbasDTO) {
        try {
            ControlHierbasDTO updatedControlHierbas = controlHierbasService.actualizarControlHierbas(id, controlHierbasDTO);
            if (updatedControlHierbas != null) {
                return new ResponseEntity<>(updatedControlHierbas, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Control de hierbas no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarControlHierbas(@PathVariable Long id) {
        try {
            controlHierbasService.eliminarControlHierbas(id);
            return new ResponseEntity<>("Control de hierbas eliminado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

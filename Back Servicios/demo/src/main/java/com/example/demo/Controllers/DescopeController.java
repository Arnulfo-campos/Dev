package com.example.demo.Controllers;

import com.example.demo.DTO.DescopeDTO;
import com.example.demo.Services.DescopeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/descopes")
@CrossOrigin
public class DescopeController {

    @Autowired
    private DescopeService descopeService;

    @PostMapping
    public ResponseEntity<? extends Object> crearDescope(@RequestBody DescopeDTO descopeDTO) {
        try {
            DescopeDTO newDescope = descopeService.crearDescope(descopeDTO);
            if (newDescope != null) {
                return new ResponseEntity<>(newDescope, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear el descope", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerDescopePorId(@PathVariable Long id) {
        DescopeDTO descopeDTO = descopeService.obtenerDescopePorId(id);
        if (descopeDTO != null) {
            return new ResponseEntity<>(descopeDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Descope no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosDescopes() {
        List<DescopeDTO> descopes = descopeService.obtenerTodosLosDescopes();
        return new ResponseEntity<>(descopes, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarDescope(@PathVariable Long id, @RequestBody DescopeDTO descopeDTO) {
        try {
            DescopeDTO updatedDescope = descopeService.actualizarDescope(id, descopeDTO);
            if (updatedDescope != null) {
                return new ResponseEntity<>(updatedDescope, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Descope no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarDescope(@PathVariable Long id) {
        try {
            descopeService.eliminarDescope(id);
            return new ResponseEntity<>("Descope eliminado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

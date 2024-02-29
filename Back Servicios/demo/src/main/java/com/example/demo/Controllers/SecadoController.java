package com.example.demo.Controllers;

import com.example.demo.DTO.SecadoDTO;
import com.example.demo.Services.SecadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/secados")
@CrossOrigin
public class SecadoController {

    @Autowired
    private SecadoService secadoService;

    @PostMapping
    public ResponseEntity<? extends Object> crearSecado(@RequestBody SecadoDTO secadoDTO) {
        try {
            SecadoDTO newSecado = secadoService.crearSecado(secadoDTO);
            if (newSecado != null) {
                return new ResponseEntity<>(newSecado, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear el secado", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerSecadoPorId(@PathVariable Long id) {
        SecadoDTO secadoDTO = secadoService.obtenerSecadoPorId(id);
        if (secadoDTO != null) {
            return new ResponseEntity<>(secadoDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Secado no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosSecados() {
        List<SecadoDTO> secados = secadoService.obtenerTodosLosSecados();
        return new ResponseEntity<>(secados, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarSecado(@PathVariable Long id, @RequestBody SecadoDTO secadoDTO) {
        try {
            SecadoDTO updatedSecado = secadoService.actualizarSecado(id, secadoDTO);
            if (updatedSecado != null) {
                return new ResponseEntity<>(updatedSecado, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Secado no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarSecado(@PathVariable Long id) {
        try {
            secadoService.eliminarSecado(id);
            return new ResponseEntity<>("Secado eliminado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

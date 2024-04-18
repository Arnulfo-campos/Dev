package com.example.demo.Controllers;

import com.example.demo.DTO.LoteUsuarioDTO;
import com.example.demo.Services.LoteUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/loteusuarios")
@CrossOrigin("*")
public class LoteUsuarioController {

    @Autowired
    private LoteUsuarioService loteUsuarioService;

    @PostMapping
    public ResponseEntity<? extends Object> crearLoteUsuario(@RequestBody LoteUsuarioDTO loteUsuarioDTO) {
        try {
            LoteUsuarioDTO newLoteUsuario = loteUsuarioService.crearLoteUsuario(loteUsuarioDTO);
            if (newLoteUsuario != null) {
                return new ResponseEntity<>(newLoteUsuario, HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Error al crear el lote de usuario", HttpStatus.ACCEPTED);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<? extends Object> obtenerLoteUsuarioPorId(@PathVariable Long id) {
        LoteUsuarioDTO loteUsuarioDTO = loteUsuarioService.obtenerLoteUsuarioPorId(id);
        if (loteUsuarioDTO != null) {
            return new ResponseEntity<>(loteUsuarioDTO, HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Lote de usuario no encontrado", HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping
    public ResponseEntity<? extends Object> obtenerTodosLosLoteUsuarios() {
        List<LoteUsuarioDTO> loteUsuarios = loteUsuarioService.obtenerTodosLosLotesUsuarios();
        return new ResponseEntity<>(loteUsuarios, HttpStatus.OK);
    }
    @GetMapping("/formulario/{idLote}/{idCosecha}/{idFormulario}")
    public ResponseEntity<? extends Object> obtenerLotesUsuarioPorFormulario(@PathVariable Long idLote, @PathVariable Long idCosecha, @PathVariable Long idFormulario) {
    List<LoteUsuarioDTO> lotesUsuarioPorFormulario = loteUsuarioService.obtenerLotesUsuarioPorFormulario(idLote, idCosecha, idFormulario);
    return new ResponseEntity<>(lotesUsuarioPorFormulario, HttpStatus.OK);
    }

    @GetMapping("/formulario/{idUsuario}")
    public ResponseEntity<? extends Object> obtenerLotesUsuarioPorUsuario(@PathVariable Long idUsuario) {
    List<LoteUsuarioDTO> lotesUsuarioPorUsuario = loteUsuarioService.obtenerLotesUsuarioPorUsuario(idUsuario);
    return new ResponseEntity<>(lotesUsuarioPorUsuario, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<? extends Object> actualizarLoteUsuario(@PathVariable Long id, @RequestBody LoteUsuarioDTO loteUsuarioDTO) {
        try {
            LoteUsuarioDTO updatedLoteUsuario = loteUsuarioService.actualizarLoteUsuario(id, loteUsuarioDTO);
            if (updatedLoteUsuario != null) {
                return new ResponseEntity<>(updatedLoteUsuario, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Lote de usuario no encontrado", HttpStatus.NOT_FOUND);
            }
        } catch (IllegalArgumentException illegalArgumentException) {
            return new ResponseEntity<>(illegalArgumentException.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<? extends Object> eliminarLoteUsuario(@PathVariable Long id) {
        try {
            loteUsuarioService.eliminarLoteUsuario(id);
            return new ResponseEntity<>("Lote de usuario eliminado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

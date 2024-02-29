package com.example.demo.Services;

import com.example.demo.DTO.ControlHierbasDTO;
import com.example.demo.Mappers.ControlHierbasMapper;
import com.example.demo.persistance.Entities.ControlHierbas;
import com.example.demo.persistance.Repository.ControlHierbaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ControlHierbasService {

    private final ControlHierbaRepository controlHierbasRepository;
    private final ControlHierbasMapper controlHierbasMapper;

    public ControlHierbasService(ControlHierbaRepository controlHierbasRepository, ControlHierbasMapper controlHierbasMapper) {
        this.controlHierbasRepository = controlHierbasRepository;
        this.controlHierbasMapper = controlHierbasMapper;
    }

    @Transactional
    public ControlHierbasDTO crearControlHierbas(ControlHierbasDTO controlHierbasDTO) {
        ControlHierbas controlHierbas = controlHierbasMapper.dtoToControlHierbas(controlHierbasDTO);
        ControlHierbas controlHierbasGuardado = controlHierbasRepository.save(controlHierbas);
        return controlHierbasMapper.controlHierbasToDTO(controlHierbasGuardado);
    }

    public ControlHierbasDTO obtenerControlHierbasPorId(Long id) {
        Optional<ControlHierbas> controlHierbasOptional = controlHierbasRepository.findById(id);
        return controlHierbasOptional.map(controlHierbasMapper::controlHierbasToDTO).orElse(null);
    }

    @Transactional
    public ControlHierbasDTO actualizarControlHierbas(Long id, ControlHierbasDTO controlHierbasDTO) {
        Optional<ControlHierbas> controlHierbasOptional = controlHierbasRepository.findById(id);
        if (controlHierbasOptional.isPresent()) {
            ControlHierbas controlHierbas = controlHierbasOptional.get();
            // Actualizar los atributos según sea necesario
            controlHierbas.setTipo(controlHierbasDTO.getTipo());
            controlHierbas.setCantidadAplicada(controlHierbasDTO.getCantidadAplicada());
            controlHierbas.setFechaInicio(controlHierbasDTO.getFechaInicio());
            controlHierbas.setFechaFinal(controlHierbasDTO.getFechaFinal());
            controlHierbas.setProcesoControl(controlHierbasDTO.getProcesoControl());
            controlHierbas.setImagen(controlHierbasDTO.getImagen());
            // Guardar la actualización
            ControlHierbas controlHierbasActualizado = controlHierbasRepository.save(controlHierbas);
            return controlHierbasMapper.controlHierbasToDTO(controlHierbasActualizado);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarControlHierbas(Long id) {
        controlHierbasRepository.deleteById(id);
    }

    public List<ControlHierbasDTO> obtenerTodosLosControlesHierbas() {
        List<ControlHierbas> controlesHierbas = (List<ControlHierbas>) controlHierbasRepository.findAll();
        return controlesHierbas.stream()
                .map(controlHierbasMapper::controlHierbasToDTO)
                .collect(Collectors.toList());
    }
}

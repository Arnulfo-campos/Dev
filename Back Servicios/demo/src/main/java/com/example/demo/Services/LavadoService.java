package com.example.demo.Services;

import com.example.demo.DTO.LavadoDTO;
import com.example.demo.Mappers.LavadoMapper;
import com.example.demo.persistance.Entities.Lavado;
import com.example.demo.persistance.Repository.LavadoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LavadoService {

    private final LavadoRepository lavadoRepository;
    private final LavadoMapper lavadoMapper;

    public LavadoService(LavadoRepository lavadoRepository, LavadoMapper lavadoMapper) {
        this.lavadoRepository = lavadoRepository;
        this.lavadoMapper = lavadoMapper;
    }

    @Transactional
    public LavadoDTO crearLavado(LavadoDTO lavadoDTO) {
        Lavado lavado = lavadoMapper.dtoToLavado(lavadoDTO);
        Lavado lavadoGuardado = lavadoRepository.save(lavado);
        return lavadoMapper.lavadoToDTO(lavadoGuardado);
    }

    public LavadoDTO obtenerLavadoPorId(Long id) {
        Optional<Lavado> lavadoOptional = lavadoRepository.findById(id);
        return lavadoOptional.map(lavadoMapper::lavadoToDTO).orElse(null);
    }

    @Transactional
    public LavadoDTO actualizarLavado(Long id, LavadoDTO lavadoDTO) {
        Optional<Lavado> lavadoOptional = lavadoRepository.findById(id);
        if (lavadoOptional.isPresent()) {
            Lavado lavado = lavadoOptional.get();
            // Actualizar los atributos según sea necesario
            lavado.setFechaInicio(lavadoDTO.getFechaInicio());
            lavado.setFechaFinal(lavadoDTO.getFechaFinal());
            lavado.setPesoCafeFlotante(lavadoDTO.getPesoCafeFlotante());
            lavado.setImagen(lavadoDTO.getImagen());
            lavado.setObservacion(lavadoDTO.getObservacion());
            // Guardar la actualización
            Lavado lavadoActualizado = lavadoRepository.save(lavado);
            return lavadoMapper.lavadoToDTO(lavadoActualizado);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarLavado(Long id) {
        lavadoRepository.deleteById(id);
    }

    public List<LavadoDTO> obtenerTodosLosLavados() {
        List<Lavado> lavados = (List<Lavado>) lavadoRepository.findAll();
        return lavados.stream()
                .map(lavadoMapper::lavadoToDTO)
                .collect(Collectors.toList());
    }
}

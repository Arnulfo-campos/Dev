package com.example.demo.Services;

import com.example.demo.DTO.GerminacionDTO;
import com.example.demo.Mappers.GerminacionMapper;
import com.example.demo.persistance.Entities.Germinacion;
import com.example.demo.persistance.Repository.GerminacionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class GerminacionService {

    private final GerminacionRepository germinacionRepository;
    private final GerminacionMapper germinacionMapper;

    public GerminacionService(GerminacionRepository germinacionRepository, GerminacionMapper germinacionMapper) {
        this.germinacionRepository = germinacionRepository;
        this.germinacionMapper = germinacionMapper;
    }

    @Transactional
    public GerminacionDTO crearGerminacion(GerminacionDTO germinacionDTO) {
        Germinacion germinacion = germinacionMapper.dtoToGerminacion(germinacionDTO);
        Germinacion germinacionGuardada = germinacionRepository.save(germinacion);
        return germinacionMapper.germinacionToDTO(germinacionGuardada);
    }

    public GerminacionDTO obtenerGerminacionPorId(Long id) {
        Optional<Germinacion> germinacionOptional = germinacionRepository.findById(id);
        return germinacionOptional.map(germinacionMapper::germinacionToDTO).orElse(null);
    }

    @Transactional
    public GerminacionDTO actualizarGerminacion(Long id, GerminacionDTO germinacionDTO) {
        Optional<Germinacion> germinacionOptional = germinacionRepository.findById(id);
        if (germinacionOptional.isPresent()) {
            Germinacion germinacion = germinacionOptional.get();
            // Actualizar los atributos según sea necesario
            germinacion.setProfundidad(germinacionDTO.getProfundidad());
            germinacion.setArea(germinacionDTO.getArea());
            germinacion.setArena(germinacionDTO.getArena());
            germinacion.setProfundidadArena(germinacionDTO.getProfundidadArena());
            germinacion.setPesoArena(germinacionDTO.getPesoArena());
            germinacion.setCantidadChapolasObtenidas(germinacionDTO.getCantidadChapolasObtenidas());
            germinacion.setFechaFinalGerminacion(germinacionDTO.getFechaFinalGerminacion());
            germinacion.setFechaRegistro(germinacionDTO.getFechaRegistro());
            germinacion.setImagen(germinacionDTO.getImagen());
            germinacion.setUbicacionLatitud(germinacionDTO.getUbicacionLatitud());
            germinacion.setUbicacionLongitud(germinacionDTO.getUbicacionLongitud());
            germinacion.setAltitud(germinacionDTO.getAltitud());
            germinacion.setTemperaturaMedia(germinacionDTO.getTemperaturaMedia());
            germinacion.setHumedadMedia(germinacionDTO.getHumedadMedia());
            // Guardar la actualización
            Germinacion germinacionActualizada = germinacionRepository.save(germinacion);
            return germinacionMapper.germinacionToDTO(germinacionActualizada);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarGerminacion(Long id) {
        germinacionRepository.deleteById(id);
    }

    public List<GerminacionDTO> obtenerTodasLasGerminaciones() {
        List<Germinacion> germinaciones = (List<Germinacion>) germinacionRepository.findAll();
        return germinaciones.stream()
                .map(germinacionMapper::germinacionToDTO)
                .collect(Collectors.toList());
    }
}

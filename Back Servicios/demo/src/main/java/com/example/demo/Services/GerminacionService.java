package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DTO.GerminacionDTO;
import com.example.demo.Mappers.CultivadorMapper;
import com.example.demo.Mappers.GerminacionMapper;
import com.example.demo.persistance.Entities.Germinacion;
import com.example.demo.persistance.Repository.CultivadorRepository;
import com.example.demo.persistance.Repository.GerminacionRepository;

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
        Germinacion germinacionGuardado = germinacionRepository.save(germinacion);
        return germinacionMapper.germinacionToDTO(germinacionGuardado);
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
            germinacion.setObservaciones(germinacionDTO.getObservaciones());
            // Establecer otros campos según sea necesario
            Germinacion germinacionActualizado = germinacionRepository.save(germinacion);
            return germinacionMapper.germinacionToDTO(germinacionActualizado);
        } else {
            return null; // o lanzar una excepción, dependiendo de tu manejo de errores
        }
    }

    public void eliminarGerminacion(Long id) {
        germinacionRepository.deleteById(id);
    }

    public List<GerminacionDTO> obtenerTodosLosGerminadores() {
        List<Germinacion> germinaciones = (List<Germinacion>) germinacionRepository.findAll();
        return germinaciones.stream()
                .map(germinacionMapper::germinacionToDTO)
                .collect(Collectors.toList());
    }
}

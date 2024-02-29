package com.example.demo.Services;

import com.example.demo.DTO.CultivadorDTO;
import com.example.demo.Mappers.CultivadorMapper;
import com.example.demo.persistance.Entities.Cultivador;
import com.example.demo.persistance.Repository.CultivadorRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CultivadorService {

    private final CultivadorRepository cultivadorRepository;
    private final CultivadorMapper cultivadorMapper;

    public CultivadorService(CultivadorRepository cultivadorRepository, CultivadorMapper cultivadorMapper) {
        this.cultivadorRepository = cultivadorRepository;
        this.cultivadorMapper = cultivadorMapper;
    }

    @Transactional
    public CultivadorDTO crearCultivador(CultivadorDTO cultivadorDTO) {
        Cultivador cultivador = cultivadorMapper.dtoToCultivador(cultivadorDTO);
        Cultivador cultivadorGuardado = cultivadorRepository.save(cultivador);
        return cultivadorMapper.cultivadorToDTO(cultivadorGuardado);
    }

    public CultivadorDTO obtenerCultivadorPorId(Long id) {
        Optional<Cultivador> cultivadorOptional = cultivadorRepository.findById(id);
        return cultivadorOptional.map(cultivadorMapper::cultivadorToDTO).orElse(null);
    }

    @Transactional
    public CultivadorDTO actualizarCultivador(Long id, CultivadorDTO cultivadorDTO) {
        Optional<Cultivador> cultivadorOptional = cultivadorRepository.findById(id);
        if (cultivadorOptional.isPresent()) {
            Cultivador cultivador = cultivadorOptional.get();
            // Actualizar los atributos según sea necesario
            cultivador.setNombre(cultivadorDTO.getNombre());
            cultivador.setApellido(cultivadorDTO.getApellido());
            cultivador.setDireccion(cultivadorDTO.getDireccion());
            cultivador.setTelefono(cultivadorDTO.getTelefono());
            cultivador.setCorreo(cultivadorDTO.getCorreo());
            // Guardar la actualización
            Cultivador cultivadorActualizado = cultivadorRepository.save(cultivador);
            return cultivadorMapper.cultivadorToDTO(cultivadorActualizado);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarCultivador(Long id) {
        cultivadorRepository.deleteById(id);
    }

    public List<CultivadorDTO> obtenerTodosLosCultivadores() {
        List<Cultivador> cultivadores = (List<Cultivador>) cultivadorRepository.findAll();
        return cultivadores.stream()
                .map(cultivadorMapper::cultivadorToDTO)
                .collect(Collectors.toList());
    }
}

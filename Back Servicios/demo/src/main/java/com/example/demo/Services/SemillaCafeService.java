package com.example.demo.Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.DTO.CultivadorDTO;
import com.example.demo.DTO.SemillaCafeDTO;
import com.example.demo.Mappers.SemillaCafeMapper;
import com.example.demo.persistance.Entities.Cultivador;
import com.example.demo.persistance.Entities.SemillaCafe;
import com.example.demo.persistance.Repository.SemillaCafeRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SemillaCafeService {
    
    private final SemillaCafeRepository semillaRepository;
    private final SemillaCafeMapper semillaMapper;

    public SemillaCafeService(SemillaCafeRepository semillaRepository, SemillaCafeMapper semillaMapper) {
        this.semillaRepository = semillaRepository;
        this.semillaMapper = semillaMapper;
    }

    @Transactional
    public SemillaCafeDTO crearSemilla(SemillaCafeDTO semillaCafeDTO) {
        SemillaCafe semillaCafe = semillaMapper.dtoToSemillaCafe(semillaCafeDTO);
        SemillaCafe semillaGuardado = semillaRepository.save(semillaCafe);
        return semillaMapper.semillaCafeToDTO(semillaGuardado);
    }
  

    public SemillaCafeDTO obtenerSemillaPorId(Long id) {
        Optional<SemillaCafe> semillaOptional = semillaRepository.findById(id);
        return semillaOptional.map(semillaMapper::semillaCafeToDTO).orElse(null);
    }

    @Transactional
    public SemillaCafeDTO actualizarSemilla(Long id, SemillaCafeDTO semillaCafeDTO) {
        Optional<SemillaCafe> semillaOptional = semillaRepository.findById(id);
        if (semillaOptional.isPresent()) {
            SemillaCafe semilla = semillaOptional.get();
            semilla.setTipoVariedad(semillaCafeDTO.getTipoVariedad());
            // Establecer otros campos según sea necesario
            SemillaCafe semillaActualizada = semillaRepository.save(semilla);
            return semillaMapper.semillaCafeToDTO(semillaActualizada);
        } else {
            return null; // o lanzar una excepción, dependiendo de tu manejo de errores
        }
    }

    public void eliminarSemilla(Long id) {
        semillaRepository.deleteById(id);
    }

    public List<SemillaCafeDTO> obtenerTodosLasSemillas() {
        List<SemillaCafe> semillas = (List<SemillaCafe>) semillaRepository.findAll();
        return semillas.stream()
                .map(semillaMapper::semillaCafeToDTO)
                .collect(Collectors.toList());
    }
}

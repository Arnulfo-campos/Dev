package com.example.demo.Services;

import com.example.demo.DTO.SemillaCafeDTO;
import com.example.demo.Mappers.SemillaCafeMapper;
import com.example.demo.persistance.Entities.SemillaCafe;
import com.example.demo.persistance.Repository.SemillaCafeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SemillaCafeService {

    private final SemillaCafeRepository semillaCafeRepository;
    private final SemillaCafeMapper semillaCafeMapper;

    public SemillaCafeService(SemillaCafeRepository semillaCafeRepository, SemillaCafeMapper semillaCafeMapper) {
        this.semillaCafeRepository = semillaCafeRepository;
        this.semillaCafeMapper = semillaCafeMapper;
    }

    @Transactional
    public SemillaCafeDTO crearSemillaCafe(SemillaCafeDTO semillaCafeDTO) {
        SemillaCafe semillaCafe = semillaCafeMapper.dtoToSemillaCafe(semillaCafeDTO);
        SemillaCafe semillaCafeGuardada = semillaCafeRepository.save(semillaCafe);
        return semillaCafeMapper.semillaCafeToDTO(semillaCafeGuardada);
    }

    public SemillaCafeDTO obtenerSemillaCafePorId(Long id) {
        Optional<SemillaCafe> semillaCafeOptional = semillaCafeRepository.findById(id);
        return semillaCafeOptional.map(semillaCafeMapper::semillaCafeToDTO).orElse(null);
    }

    @Transactional
    public SemillaCafeDTO actualizarSemillaCafe(Long id, SemillaCafeDTO semillaCafeDTO) {
        Optional<SemillaCafe> semillaCafeOptional = semillaCafeRepository.findById(id);
        if (semillaCafeOptional.isPresent()) {
            SemillaCafe semillaCafe = semillaCafeOptional.get();
            // Actualizar los atributos según sea necesario
            semillaCafe.setTipoVariedad(semillaCafeDTO.getTipoVariedad());
            semillaCafe.setOrigen(semillaCafeDTO.getOrigen());
            semillaCafe.setCertificada(semillaCafeDTO.isCertificada());
           // semillaCafe.setCantidadKg(semillaCafeDTO.getCantidadKG());
            semillaCafe.setFechaRegistro(semillaCafeDTO.getFechaRegistro());
            semillaCafe.setFechaAdquisicion(semillaCafeDTO.getFechaAdquisicion());
          //  semillaCafe.setGerminacion(semillaCafeDTO.getGerminacionId());
           // semillaCafe.setLoteCafe(semillaCafeDTO.getLoteCafeId());
            // Guardar la actualización
            SemillaCafe semillaCafeActualizada = semillaCafeRepository.save(semillaCafe);
            return semillaCafeMapper.semillaCafeToDTO(semillaCafeActualizada);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarSemillaCafe(Long id) {
        semillaCafeRepository.deleteById(id);
    }

    public List<SemillaCafeDTO> obtenerTodasLasSemillasCafe() {
        List<SemillaCafe> semillasCafe = (List<SemillaCafe>) semillaCafeRepository.findAll();
        return semillasCafe.stream()
                .map(semillaCafeMapper::semillaCafeToDTO)
                .collect(Collectors.toList());
    }
}

package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.DTO.LoteCafeDTO;
import com.example.demo.Mappers.LoteCafeMapper;
import com.example.demo.persistance.Entities.LoteCafe;
import com.example.demo.persistance.Repository.LoteCafeRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LoteCafeService {
    
    private final LoteCafeRepository loteCafeRepository;
    private final LoteCafeMapper loteCafeMapper;

    public LoteCafeService(LoteCafeRepository loteCafeRepository, LoteCafeMapper loteCafeMapper) {
        this.loteCafeRepository = loteCafeRepository;
        this.loteCafeMapper = loteCafeMapper;
    }

    @Transactional
    public LoteCafeDTO crearLoteCafe(LoteCafeDTO loteCafeDTO) {
        LoteCafe loteCafe = loteCafeMapper.dtoToLoteCafe(loteCafeDTO);
        LoteCafe loteCafeGuardado = loteCafeRepository.save(loteCafe);
        return loteCafeMapper.loteCafeToDTO(loteCafeGuardado);
    }

    public LoteCafeDTO obtenerLoteCafePorId(Long id) {
        Optional<LoteCafe> loteCafeOptional = loteCafeRepository.findById(id);
        return loteCafeOptional.map(loteCafeMapper::loteCafeToDTO).orElse(null);
    }

    @Transactional
    public LoteCafeDTO actualizarLoteCafe(Long id, LoteCafeDTO loteCafeDTO) {
        Optional<LoteCafe> loteCafeOptional = loteCafeRepository.findById(id);
        if (loteCafeOptional.isPresent()) {
            LoteCafe loteCafe = loteCafeOptional.get();
            loteCafe.setCiudad(loteCafeDTO.getCiudad());
            // Establecer otros campos según sea necesario
            LoteCafe loteCafeActualizado = loteCafeRepository.save(loteCafe);
            return loteCafeMapper.loteCafeToDTO(loteCafeActualizado);
        } else {
            return null; // o lanzar una excepción, dependiendo de tu manejo de errores
        }
    }

    public void eliminarLoteCafe(Long id) {
        loteCafeRepository.deleteById(id);
    }

    public List<LoteCafeDTO> obtenerTodosLosLotes() {
        List<LoteCafe> loteCafes = (List<LoteCafe>) loteCafeRepository.findAll();
        return loteCafes.stream()
                .map(loteCafeMapper::loteCafeToDTO)
                .collect(Collectors.toList());
    }
}

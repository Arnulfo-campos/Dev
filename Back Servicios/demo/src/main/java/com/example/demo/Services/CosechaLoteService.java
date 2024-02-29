package com.example.demo.Services;

import com.example.demo.DTO.CosechaLoteDTO;
import com.example.demo.Mappers.CosechaLoteMapper;
import com.example.demo.persistance.Entities.CosechaLote;
import com.example.demo.persistance.Repository.CosechaLoteRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CosechaLoteService {

    private final CosechaLoteRepository cosechaLoteRepository;
    private final CosechaLoteMapper cosechaLoteMapper;

    public CosechaLoteService(CosechaLoteRepository cosechaLoteRepository, CosechaLoteMapper cosechaLoteMapper) {
        this.cosechaLoteRepository = cosechaLoteRepository;
        this.cosechaLoteMapper = cosechaLoteMapper;
    }

    @Transactional
    public CosechaLoteDTO crearCosechaLote(CosechaLoteDTO cosechaLoteDTO) {
        CosechaLote cosechaLote = cosechaLoteMapper.dtoToCosechaLote(cosechaLoteDTO);
        CosechaLote cosechaLoteGuardado = cosechaLoteRepository.save(cosechaLote);
        return cosechaLoteMapper.cosechaLoteToDTO(cosechaLoteGuardado);
    }

    public CosechaLoteDTO obtenerCosechaLotePorId(Long id) {
        Optional<CosechaLote> cosechaLoteOptional = cosechaLoteRepository.findById(id);
        return cosechaLoteOptional.map(cosechaLoteMapper::cosechaLoteToDTO).orElse(null);
    }

    @Transactional
    public CosechaLoteDTO actualizarCosechaLote(Long id, CosechaLoteDTO cosechaLoteDTO) {
        Optional<CosechaLote> cosechaLoteOptional = cosechaLoteRepository.findById(id);
        if (cosechaLoteOptional.isPresent()) {
            CosechaLote cosechaLote = cosechaLoteOptional.get();
            // Actualizar los atributos según sea necesario
           // cosechaLote.setLoteId(cosechaLoteDTO.getLoteId());
            //cosechaLote.setCosechaId(cosechaLoteDTO.getCosechaId());
            // Guardar la actualización
            CosechaLote cosechaLoteActualizado = cosechaLoteRepository.save(cosechaLote);
            return cosechaLoteMapper.cosechaLoteToDTO(cosechaLoteActualizado);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarCosechaLote(Long id) {
        cosechaLoteRepository.deleteById(id);
    }

    public List<CosechaLoteDTO> obtenerTodosLosCosechaLotes() {
        List<CosechaLote> cosechaLotes = (List<CosechaLote>) cosechaLoteRepository.findAll();
        return cosechaLotes.stream()
                .map(cosechaLoteMapper::cosechaLoteToDTO)
                .collect(Collectors.toList());
    }
}

package com.example.demo.Services;

import com.example.demo.DTO.CosechaDTO;
import com.example.demo.Mappers.CosechaMapper;
import com.example.demo.persistance.Entities.Cosecha;
import com.example.demo.persistance.Repository.CosechaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CosechaService {

    private final CosechaRepository cosechaRepository;
    private final CosechaMapper cosechaMapper;

    public CosechaService(CosechaRepository cosechaRepository, CosechaMapper cosechaMapper) {
        this.cosechaRepository = cosechaRepository;
        this.cosechaMapper = cosechaMapper;
    }

    @Transactional
    public CosechaDTO crearCosecha(CosechaDTO cosechaDTO) {
        Cosecha cosecha = cosechaMapper.dtoToCosecha(cosechaDTO);
        Cosecha cosechaGuardada = cosechaRepository.save(cosecha);
        return cosechaMapper.cosechaToDTO(cosechaGuardada);
    }

    public CosechaDTO obtenerCosechaPorId(Long id) {
        Optional<Cosecha> cosechaOptional = cosechaRepository.findById(id);
        return cosechaOptional.map(cosechaMapper::cosechaToDTO).orElse(null);
    }

    @Transactional
    public CosechaDTO actualizarCosecha(Long id, CosechaDTO cosechaDTO) {
        Optional<Cosecha> cosechaOptional = cosechaRepository.findById(id);
        if (cosechaOptional.isPresent()) {
            Cosecha cosecha = cosechaOptional.get();
            // Actualizar los atributos según sea necesario
            cosecha.setFechaInicio(cosechaDTO.getFechaInicio());
            cosecha.setFechaFinal(cosechaDTO.getFechaFinal());
            cosecha.setPesoTotalCafe(cosechaDTO.getPesoTotalCafe());
            cosecha.setPesoTotalCafeDespulpado(cosechaDTO.getPesoTotalCafeDespulpado());
            cosecha.setTipoRecoleccion(cosechaDTO.getTipoRecoleccion());
            cosecha.setObservaciones(cosechaDTO.getObservaciones());
            cosecha.setImagen(cosechaDTO.getImagen());
            //cosecha.setSecadoId(cosechaDTO.getSecadoId());
            //cosecha.setTostadoId(cosechaDTO.getTostadoId());
            // Guardar la actualización
            Cosecha cosechaActualizada = cosechaRepository.save(cosecha);
            return cosechaMapper.cosechaToDTO(cosechaActualizada);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarCosecha(Long id) {
        cosechaRepository.deleteById(id);
    }

    public List<CosechaDTO> obtenerTodasLasCosechas() {
        List<Cosecha> cosechas = (List<Cosecha>) cosechaRepository.findAll();
        return cosechas.stream()
                .map(cosechaMapper::cosechaToDTO)
                .collect(Collectors.toList());
    }
}

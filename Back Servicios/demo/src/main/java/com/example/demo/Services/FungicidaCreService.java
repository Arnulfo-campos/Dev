package com.example.demo.Services;

import com.example.demo.DTO.FungicidaCrecimientoDTO;
import com.example.demo.Mappers.FungicidaCreMapper;
import com.example.demo.persistance.Entities.FungicidaCrecimiento;
import com.example.demo.persistance.Repository.FungicidaCreRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FungicidaCreService {

    private final FungicidaCreRepository fungicidaCrecimientoRepository;
    private final FungicidaCreMapper fungicidaCrecimientoMapper;

    public FungicidaCreService(FungicidaCreRepository fungicidaCrecimientoRepository, FungicidaCreMapper fungicidaCrecimientoMapper) {
        this.fungicidaCrecimientoRepository = fungicidaCrecimientoRepository;
        this.fungicidaCrecimientoMapper = fungicidaCrecimientoMapper;
    }

    @Transactional
    public FungicidaCrecimientoDTO crearFungicidaCrecimiento(FungicidaCrecimientoDTO fungicidaCrecimientoDTO) {
        FungicidaCrecimiento fungicidaCrecimiento = fungicidaCrecimientoMapper.dtoToFungicidaCrecimiento(fungicidaCrecimientoDTO);
        FungicidaCrecimiento fungicidaCrecimientoGuardado = fungicidaCrecimientoRepository.save(fungicidaCrecimiento);
        return fungicidaCrecimientoMapper.fungicidaCrecimientoToDTO(fungicidaCrecimientoGuardado);
    }

    public FungicidaCrecimientoDTO obtenerFungicidaCrecimientoPorId(Long id) {
        Optional<FungicidaCrecimiento> fungicidaCrecimientoOptional = fungicidaCrecimientoRepository.findById(id);
        return fungicidaCrecimientoOptional.map(fungicidaCrecimientoMapper::fungicidaCrecimientoToDTO).orElse(null);
    }

    @Transactional
    public FungicidaCrecimientoDTO actualizarFungicidaCrecimiento(Long id, FungicidaCrecimientoDTO fungicidaCrecimientoDTO) {
        Optional<FungicidaCrecimiento> fungicidaCrecimientoOptional = fungicidaCrecimientoRepository.findById(id);
        if (fungicidaCrecimientoOptional.isPresent()) {
            FungicidaCrecimiento fungicidaCrecimiento = fungicidaCrecimientoOptional.get();
            // Actualizar los atributos según sea necesario
            fungicidaCrecimiento.setNombre(fungicidaCrecimientoDTO.getNombre());
            fungicidaCrecimiento.setCantidadAplicada(fungicidaCrecimientoDTO.getCantidadAplicada());
            fungicidaCrecimiento.setFechaAplicacion(fungicidaCrecimientoDTO.getFechaAplicacion());
            fungicidaCrecimiento.setFormulaAplicada(fungicidaCrecimientoDTO.getFormulaAplicada());
            fungicidaCrecimiento.setImagen(fungicidaCrecimientoDTO.getImagen());
            // Guardar la actualización
            FungicidaCrecimiento fungicidaCrecimientoActualizado = fungicidaCrecimientoRepository.save(fungicidaCrecimiento);
            return fungicidaCrecimientoMapper.fungicidaCrecimientoToDTO(fungicidaCrecimientoActualizado);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarFungicidaCrecimiento(Long id) {
        fungicidaCrecimientoRepository.deleteById(id);
    }

    public List<FungicidaCrecimientoDTO> obtenerTodosLosFungicidasCrecimiento() {
        List<FungicidaCrecimiento> fungicidasCrecimiento = (List<FungicidaCrecimiento>) fungicidaCrecimientoRepository.findAll();
        return fungicidasCrecimiento.stream()
                .map(fungicidaCrecimientoMapper::fungicidaCrecimientoToDTO)
                .collect(Collectors.toList());
    }
}

package com.example.demo.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.DTO.CultivadorDTO;
import com.example.demo.DTO.FungicidaDTO;
import com.example.demo.Mappers.FungicidaMapper;
import com.example.demo.persistance.Entities.Cultivador;
import com.example.demo.persistance.Entities.Fungicida;
import com.example.demo.persistance.Repository.FungicidaRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class FungicidaService {

    private final FungicidaRepository fungicidaRepository;
    private final FungicidaMapper fungicidaMapper;

    public FungicidaService(FungicidaRepository fungicidaRepository, FungicidaMapper fungicidaMapper) {
        this.fungicidaRepository = fungicidaRepository;
        this.fungicidaMapper = fungicidaMapper;
    }
    @Transactional
    public FungicidaDTO crearFungicida(FungicidaDTO fungicidaDTO) {
        Fungicida fungicida = fungicidaMapper.dtoToFungicida(fungicidaDTO);
        Fungicida fungicidaGuardado = fungicidaRepository.save(fungicida);
        return fungicidaMapper.fungicidaToDTO(fungicidaGuardado);
    }
    @Transactional
    public FungicidaDTO actualizarFungicida(Long id, FungicidaDTO fungicidaDTO) {
        Optional<Fungicida> fungicidaOptional = fungicidaRepository.findById(id);
        if (fungicidaOptional.isPresent()) {
            Fungicida fungicida = fungicidaOptional.get();
            fungicida.setNombre(fungicidaDTO.getNombre());
            // Establecer otros campos según sea necesario
            Fungicida fungicidaActualizado = fungicidaRepository.save(fungicida);
            return fungicidaMapper.fungicidaToDTO(fungicidaActualizado);
        } else {
            return null; // o lanzar una excepción, dependiendo de tu manejo de errores
        }
    }
  
    public List<FungicidaDTO> obtenerTodosLosFungicidas() {
        List<Fungicida> fungicidas = (List<Fungicida>) fungicidaRepository.findAll();
        return fungicidas.stream()
                .map(fungicidaMapper::fungicidaToDTO)
                .collect(Collectors.toList());
    }

    public FungicidaDTO obtenerFungicidaPorId(Long id) {
        Optional<Fungicida> fungicidaOptional = fungicidaRepository.findById(id);
        return fungicidaOptional.map(fungicidaMapper::fungicidaToDTO).orElse(null);
    }


    public void eliminarFungicida(Long id) {
        fungicidaRepository.deleteById(id);
    }
}

package com.example.demo.Services;

import com.example.demo.DTO.DescopeDTO;
import com.example.demo.Mappers.DescopeMapper;
import com.example.demo.persistance.Entities.Descope;
import com.example.demo.persistance.Repository.DescopeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DescopeService {

    private final DescopeRepository descopeRepository;
    private final DescopeMapper descopeMapper;

    public DescopeService(DescopeRepository descopeRepository, DescopeMapper descopeMapper) {
        this.descopeRepository = descopeRepository;
        this.descopeMapper = descopeMapper;
    }

    @Transactional
    public DescopeDTO crearDescope(DescopeDTO descopeDTO) {
        Descope descope = descopeMapper.dtoToDescope(descopeDTO);
        Descope descopeGuardado = descopeRepository.save(descope);
        return descopeMapper.descopeToDTO(descopeGuardado);
    }

    public DescopeDTO obtenerDescopePorId(Long id) {
        Optional<Descope> descopeOptional = descopeRepository.findById(id);
        return descopeOptional.map(descopeMapper::descopeToDTO).orElse(null);
    }

    @Transactional
    public DescopeDTO actualizarDescope(Long id, DescopeDTO descopeDTO) {
        Optional<Descope> descopeOptional = descopeRepository.findById(id);
        if (descopeOptional.isPresent()) {
            Descope descope = descopeOptional.get();
            // Actualizar los atributos según sea necesario
            descope.setFechaInicio(descopeDTO.getFechaInicio());
            descope.setFechaFinal(descopeDTO.getFechaFinal());
            descope.setImagen(descopeDTO.getImagen());
            //descope.setSembradoId(descopeDTO.getSembradoId());
            // Guardar la actualización
            Descope descopeActualizado = descopeRepository.save(descope);
            return descopeMapper.descopeToDTO(descopeActualizado);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarDescope(Long id) {
        descopeRepository.deleteById(id);
    }

    public List<DescopeDTO> obtenerTodosLosDescopes() {
        List<Descope> descopes = (List<Descope>) descopeRepository.findAll();
        return descopes.stream()
                .map(descopeMapper::descopeToDTO)
                .collect(Collectors.toList());
    }
}

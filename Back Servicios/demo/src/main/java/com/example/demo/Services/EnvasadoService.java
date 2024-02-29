package com.example.demo.Services;

import com.example.demo.DTO.EnvasadoDTO;
import com.example.demo.Mappers.EnvasadoMapper;
import com.example.demo.persistance.Entities.Envasado;
import com.example.demo.persistance.Repository.EnvasadoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EnvasadoService {

    private final EnvasadoRepository envasadoRepository;
    private final EnvasadoMapper envasadoMapper;

    public EnvasadoService(EnvasadoRepository envasadoRepository, EnvasadoMapper envasadoMapper) {
        this.envasadoRepository = envasadoRepository;
        this.envasadoMapper = envasadoMapper;
    }

    @Transactional
    public EnvasadoDTO crearEnvasado(EnvasadoDTO envasadoDTO) {
        Envasado envasado = envasadoMapper.dtoToEnvasado(envasadoDTO);
        Envasado envasadoGuardado = envasadoRepository.save(envasado);
        return envasadoMapper.envasadoToDTO(envasadoGuardado);
    }

    public EnvasadoDTO obtenerEnvasadoPorId(Long id) {
        Optional<Envasado> envasadoOptional = envasadoRepository.findById(id);
        return envasadoOptional.map(envasadoMapper::envasadoToDTO).orElse(null);
    }

    @Transactional
    public EnvasadoDTO actualizarEnvasado(Long id, EnvasadoDTO envasadoDTO) {
        Optional<Envasado> envasadoOptional = envasadoRepository.findById(id);
        if (envasadoOptional.isPresent()) {
            Envasado envasado = envasadoOptional.get();
            // Actualizar los atributos según sea necesario
            envasado.setFechaInicial(envasadoDTO.getFechaInicial());
            envasado.setFechaFinal(envasadoDTO.getFechaFinal());
            envasado.setImagen(envasadoDTO.getImagen());
            // Guardar la actualización
            Envasado envasadoActualizado = envasadoRepository.save(envasado);
            return envasadoMapper.envasadoToDTO(envasadoActualizado);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarEnvasado(Long id) {
        envasadoRepository.deleteById(id);
    }

    public List<EnvasadoDTO> obtenerTodosLosEnvasados() {
        List<Envasado> envasados = (List<Envasado>) envasadoRepository.findAll();
        return envasados.stream()
                .map(envasadoMapper::envasadoToDTO)
                .collect(Collectors.toList());
    }
}

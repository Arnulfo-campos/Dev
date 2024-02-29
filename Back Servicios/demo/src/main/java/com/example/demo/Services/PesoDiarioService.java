package com.example.demo.Services;

import com.example.demo.DTO.PesoDiarioDTO;
import com.example.demo.Mappers.PesoDiarioMapper;
import com.example.demo.persistance.Entities.PesoDiario;
import com.example.demo.persistance.Repository.PesoDiarioRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PesoDiarioService {

    private final PesoDiarioRepository pesoDiarioRepository;
    private final PesoDiarioMapper pesoDiarioMapper;

    public PesoDiarioService(PesoDiarioRepository pesoDiarioRepository, PesoDiarioMapper pesoDiarioMapper) {
        this.pesoDiarioRepository = pesoDiarioRepository;
        this.pesoDiarioMapper = pesoDiarioMapper;
    }

    @Transactional
    public PesoDiarioDTO crearPesoDiario(PesoDiarioDTO pesoDiarioDTO) {
        PesoDiario pesoDiario = pesoDiarioMapper.dtoToPesoDiario(pesoDiarioDTO);
        PesoDiario pesoDiarioGuardado = pesoDiarioRepository.save(pesoDiario);
        return pesoDiarioMapper.pesoDiarioToDTO(pesoDiarioGuardado);
    }

    public PesoDiarioDTO obtenerPesoDiarioPorId(Long id) {
        Optional<PesoDiario> pesoDiarioOptional = pesoDiarioRepository.findById(id);
        return pesoDiarioOptional.map(pesoDiarioMapper::pesoDiarioToDTO).orElse(null);
    }

    @Transactional
    public PesoDiarioDTO actualizarPesoDiario(Long id, PesoDiarioDTO pesoDiarioDTO) {
        Optional<PesoDiario> pesoDiarioOptional = pesoDiarioRepository.findById(id);
        if (pesoDiarioOptional.isPresent()) {
            PesoDiario pesoDiario = pesoDiarioOptional.get();
            // Actualizar los atributos según sea necesario
            pesoDiario.setFechaRegistro(pesoDiarioDTO.getFechaRegistro());
            pesoDiario.setPesoCafe(pesoDiarioDTO.getPesoCafe());
            pesoDiario.setPesoDespulpado(pesoDiarioDTO.getPesoDespulpado());
            pesoDiario.setImagen(pesoDiarioDTO.getImagen());
            // Guardar la actualización
            PesoDiario pesoDiarioActualizado = pesoDiarioRepository.save(pesoDiario);
            return pesoDiarioMapper.pesoDiarioToDTO(pesoDiarioActualizado);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarPesoDiario(Long id) {
        pesoDiarioRepository.deleteById(id);
    }

    public List<PesoDiarioDTO> obtenerTodosLosPesosDiarios() {
        List<PesoDiario> pesosDiarios = (List<PesoDiario>) pesoDiarioRepository.findAll();
        return pesosDiarios.stream()
                .map(pesoDiarioMapper::pesoDiarioToDTO)
                .collect(Collectors.toList());
    }
}

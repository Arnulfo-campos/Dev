package com.example.demo.Services;

import com.example.demo.DTO.LoteUsuarioDTO;
import com.example.demo.Mappers.LoteUsuarioMapper;
import com.example.demo.persistance.Entities.LoteUsuario;
import com.example.demo.persistance.Repository.LoteUsuarioRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LoteUsuarioService {

    private final LoteUsuarioRepository loteUsuarioRepository;
    private final LoteUsuarioMapper loteUsuarioMapper;

    public LoteUsuarioService(LoteUsuarioRepository loteUsuarioRepository, LoteUsuarioMapper loteUsuarioMapper) {
        this.loteUsuarioRepository = loteUsuarioRepository;
        this.loteUsuarioMapper = loteUsuarioMapper;
    }

    @Transactional
    public LoteUsuarioDTO crearLoteUsuario(LoteUsuarioDTO loteUsuarioDTO) {
        LoteUsuario loteUsuario = loteUsuarioMapper.dtoToLoteUsuario(loteUsuarioDTO);
        LoteUsuario loteUsuarioGuardado = loteUsuarioRepository.save(loteUsuario);
        return loteUsuarioMapper.loteUsuarioToDTO(loteUsuarioGuardado);
    }

    public LoteUsuarioDTO obtenerLoteUsuarioPorId(Long idLote) {
        Optional<LoteUsuario> loteUsuarioOptional = loteUsuarioRepository.findById(idLote);
        return loteUsuarioOptional.map(loteUsuarioMapper::loteUsuarioToDTO).orElse(null);
    }
    public List<LoteUsuarioDTO> obtenerLotesUsuarioPorFormulario(Long idLote, Long idCosecha, Long idFormulario) {
        List<LoteUsuario> lotesUsuarioPorFormulario = loteUsuarioRepository.findByIdLoteAndIdCosechaAndIdFormulario(idLote, idCosecha, idFormulario);
        return lotesUsuarioPorFormulario.stream()
                .map(loteUsuarioMapper::loteUsuarioToDTO)
                .collect(Collectors.toList());
    }
    public List<LoteUsuarioDTO> obtenerLotesUsuarioPorUsuario(Long idUsuario, long idFormulario) {
        List<LoteUsuario> lotesUsuarioPorUsuario = loteUsuarioRepository.findByIdUsuarioAndIdFormulario(idUsuario, idFormulario);
        return lotesUsuarioPorUsuario.stream()
                .map(loteUsuarioMapper::loteUsuarioToDTO)
                .collect(Collectors.toList());
    }
    @Transactional
    public LoteUsuarioDTO actualizarLoteUsuario(Long idLote, LoteUsuarioDTO loteUsuarioDTO) {
        Optional<LoteUsuario> loteUsuarioOptional = loteUsuarioRepository.findById(idLote);
        if (loteUsuarioOptional.isPresent()) {
            LoteUsuario loteUsuario = loteUsuarioOptional.get();
            // Actualizar los atributos según sea necesario
            loteUsuario.setHash(loteUsuarioDTO.getHash());
            loteUsuario.setIdUsuario(loteUsuarioDTO.getIdUsuario());
            loteUsuario.setIdFormulario(loteUsuarioDTO.getIdFormulario());
            // Guardar la actualización
            LoteUsuario loteUsuarioActualizado = loteUsuarioRepository.save(loteUsuario);
            return loteUsuarioMapper.loteUsuarioToDTO(loteUsuarioActualizado);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarLoteUsuario(Long idLote) {
        loteUsuarioRepository.deleteById(idLote);
    }

    public List<LoteUsuarioDTO> obtenerTodosLosLotesUsuarios() {
        List<LoteUsuario> lotesUsuarios = (List<LoteUsuario>) loteUsuarioRepository.findAll();
        return lotesUsuarios.stream()
                .map(loteUsuarioMapper::loteUsuarioToDTO)
                .collect(Collectors.toList());
    }
}

package com.example.demo.Services;

import com.example.demo.DTO.SecadoDTO;
import com.example.demo.Mappers.SecadoMapper;
import com.example.demo.persistance.Entities.Secado;
import com.example.demo.persistance.Repository.SecadoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SecadoService {

    private final SecadoRepository secadoRepository;
    private final SecadoMapper secadoMapper;

    public SecadoService(SecadoRepository secadoRepository, SecadoMapper secadoMapper) {
        this.secadoRepository = secadoRepository;
        this.secadoMapper = secadoMapper;
    }

    @Transactional
    public SecadoDTO crearSecado(SecadoDTO secadoDTO) {
        Secado secado = secadoMapper.dtoToSecado(secadoDTO);
        Secado secadoGuardado = secadoRepository.save(secado);
        return secadoMapper.secadoToDTO(secadoGuardado);
    }

    public SecadoDTO obtenerSecadoPorId(Long id) {
        Optional<Secado> secadoOptional = secadoRepository.findById(id);
        return secadoOptional.map(secadoMapper::secadoToDTO).orElse(null);
    }

    @Transactional
    public SecadoDTO actualizarSecado(Long id, SecadoDTO secadoDTO) {
        Optional<Secado> secadoOptional = secadoRepository.findById(id);
        if (secadoOptional.isPresent()) {
            Secado secado = secadoOptional.get();
            // Actualizar los atributos según sea necesario
            secado.setFechaInicio(secadoDTO.getFechaInicio());
            secado.setFechaFinal(secadoDTO.getFechaFinal());
            secado.setTipoSecado(secadoDTO.getTipoSecado());
            secado.setPesoAntesSecado(secadoDTO.getPesoAntesSecado());
            secado.setPesoFinalSecado(secadoDTO.getPesoFinalSecado());
            secado.setImagen(secadoDTO.getImagen());
            secado.setHumedad(secadoDTO.getHumedad());
            secado.setFactor(secadoDTO.getFactor());
            secado.setObservacion(secadoDTO.getObservacion());
            // Guardar la actualización
            Secado secadoActualizado = secadoRepository.save(secado);
            return secadoMapper.secadoToDTO(secadoActualizado);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarSecado(Long id) {
        secadoRepository.deleteById(id);
    }

    public List<SecadoDTO> obtenerTodosLosSecados() {
        List<Secado> secados = (List<Secado>) secadoRepository.findAll();
        return secados.stream()
                .map(secadoMapper::secadoToDTO)
                .collect(Collectors.toList());
    }
}

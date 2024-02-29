package com.example.demo.Services;

import com.example.demo.DTO.TostadoDTO;
import com.example.demo.Mappers.TostadoMapper;
import com.example.demo.persistance.Entities.Tostado;
import com.example.demo.persistance.Repository.TostadoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TostadoService {

    private final TostadoRepository tostadoRepository;
    private final TostadoMapper tostadoMapper;

    public TostadoService(TostadoRepository tostadoRepository, TostadoMapper tostadoMapper) {
        this.tostadoRepository = tostadoRepository;
        this.tostadoMapper = tostadoMapper;
    }

    @Transactional
    public TostadoDTO crearTostado(TostadoDTO tostadoDTO) {
        Tostado tostado = tostadoMapper.dtoToTostado(tostadoDTO);
        Tostado tostadoGuardado = tostadoRepository.save(tostado);
        return tostadoMapper.tostadoToDTO(tostadoGuardado);
    }

    public TostadoDTO obtenerTostadoPorId(Long id) {
        Optional<Tostado> tostadoOptional = tostadoRepository.findById(id);
        return tostadoOptional.map(tostadoMapper::tostadoToDTO).orElse(null);
    }

    @Transactional
    public TostadoDTO actualizarTostado(Long id, TostadoDTO tostadoDTO) {
        Optional<Tostado> tostadoOptional = tostadoRepository.findById(id);
        if (tostadoOptional.isPresent()) {
            Tostado tostado = tostadoOptional.get();
            // Actualizar los atributos
            tostado.setFechaInicio(tostadoDTO.getFechaInicio());
            tostado.setFechaFinal(tostadoDTO.getFechaFinal());
            tostado.setTemperaturaInicial(tostadoDTO.getTemperaturaInicial());
            tostado.setTemperatura2(tostadoDTO.getTemperatura2());
            tostado.setHoraTemperatura2(tostadoDTO.getHoraTemperatura2());
            tostado.setTemperatura3(tostadoDTO.getTemperatura3());
            tostado.setHoraTemperatura3(tostadoDTO.getHoraTemperatura3());
            tostado.setTemperaturaFinal(tostadoDTO.getTemperaturaFinal());
            tostado.setHumedadFinal(tostadoDTO.getHumedadFinal());
            tostado.setMuestraCafe(tostadoDTO.getMuestraCafe());
            tostado.setSeleccionGrano(tostadoDTO.getSeleccionGrano());
            tostado.setMalla(tostadoDTO.getMalla());
            tostado.setTonalidadAgtron(tostadoDTO.getTonalidadAgtron());
            
            Tostado tostadoActualizado = tostadoRepository.save(tostado);
            return tostadoMapper.tostadoToDTO(tostadoActualizado);
        } else {
            return null;
        }
    }

    public void eliminarTostado(Long id) {
        tostadoRepository.deleteById(id);
    }

    public List<TostadoDTO> obtenerTodosLosTostados() {
        List<Tostado> tostados = (List<Tostado>) tostadoRepository.findAll();
        return tostados.stream()
                .map(tostadoMapper::tostadoToDTO)
                .collect(Collectors.toList());
    }
}

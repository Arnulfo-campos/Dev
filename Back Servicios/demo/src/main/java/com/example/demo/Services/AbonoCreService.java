package com.example.demo.Services;

import com.example.demo.DTO.AbonoCrecimientoDTO;
import com.example.demo.Mappers.AbonoCrecimientoMapper;
import com.example.demo.persistance.Entities.AbonoCrecimiento;
import com.example.demo.persistance.Repository.AbonoCrecimientoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AbonoCreService {

    private final AbonoCrecimientoRepository abonoCrecimientoRepository;
    private final AbonoCrecimientoMapper abonoCrecimientoMapper;

    public AbonoCreService(AbonoCrecimientoRepository abonoCrecimientoRepository, AbonoCrecimientoMapper abonoCrecimientoMapper) {
        this.abonoCrecimientoRepository = abonoCrecimientoRepository;
        this.abonoCrecimientoMapper = abonoCrecimientoMapper;
    }

    @Transactional
    public AbonoCrecimientoDTO crearAbonoCrecimiento(AbonoCrecimientoDTO abonoCrecimientoDTO) {
        AbonoCrecimiento abonoCrecimiento = abonoCrecimientoMapper.dtoToAbonoCrecimiento(abonoCrecimientoDTO);
        @SuppressWarnings("null")
        AbonoCrecimiento abonoCrecimientoGuardado = abonoCrecimientoRepository.save(abonoCrecimiento);
        return abonoCrecimientoMapper.abonoCrecimientoToDTO(abonoCrecimientoGuardado);
    }

    public AbonoCrecimientoDTO obtenerAbonoCrecimientoPorId(Long id) {
        @SuppressWarnings("null")
        Optional<AbonoCrecimiento> abonoCrecimientoOptional = abonoCrecimientoRepository.findById(id);
        return abonoCrecimientoOptional.map(abonoCrecimientoMapper::abonoCrecimientoToDTO).orElse(null);
    }

    @Transactional
    public AbonoCrecimientoDTO actualizarAbonoCrecimiento(Long id, AbonoCrecimientoDTO abonoCrecimientoDTO) {
        @SuppressWarnings("null")
        Optional<AbonoCrecimiento> abonoCrecimientoOptional = abonoCrecimientoRepository.findById(id);
        if (abonoCrecimientoOptional.isPresent()) {
            AbonoCrecimiento abonoCrecimiento = abonoCrecimientoOptional.get();
            // Actualizar los atributos según sea necesario
            abonoCrecimiento.setNombre(abonoCrecimientoDTO.getNombre());
            abonoCrecimiento.setCantidadAplicada(abonoCrecimientoDTO.getCantidadAplicada());
            abonoCrecimiento.setFechaAplicacion(abonoCrecimientoDTO.getFechaAplicacion());
            abonoCrecimiento.setFormulaAplicada(abonoCrecimientoDTO.getFormulaAplicada());
            abonoCrecimiento.setImagen(abonoCrecimientoDTO.getImagen());
            // Guardar la actualización
            AbonoCrecimiento abonoCrecimientoActualizado = abonoCrecimientoRepository.save(abonoCrecimiento);
            return abonoCrecimientoMapper.abonoCrecimientoToDTO(abonoCrecimientoActualizado);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    @SuppressWarnings("null")
    public void eliminarAbonoCrecimiento(Long id) {
        abonoCrecimientoRepository.deleteById(id);
    }

    public List<AbonoCrecimientoDTO> obtenerTodosLosAbonosCrecimiento() {
        List<AbonoCrecimiento> abonosCrecimiento = (List<AbonoCrecimiento>) abonoCrecimientoRepository.findAll();
        return abonosCrecimiento.stream()
                .map(abonoCrecimientoMapper::abonoCrecimientoToDTO)
                .collect(Collectors.toList());
    }
}

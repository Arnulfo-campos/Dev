package com.example.demo.Services;

import com.example.demo.DTO.CrecimientoDTO;
import com.example.demo.Mappers.CrecimientoMapper;
import com.example.demo.persistance.Entities.Crecimiento;
import com.example.demo.persistance.Repository.CrecimientoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CrecimientoService {

    private final CrecimientoRepository crecimientoRepository;
    private final CrecimientoMapper crecimientoMapper;

    public CrecimientoService(CrecimientoRepository crecimientoRepository, CrecimientoMapper crecimientoMapper) {
        this.crecimientoRepository = crecimientoRepository;
        this.crecimientoMapper = crecimientoMapper;
    }

    @Transactional
    public CrecimientoDTO crearCrecimiento(CrecimientoDTO crecimientoDTO) {
        Crecimiento crecimiento = crecimientoMapper.dtoToCrecimiento(crecimientoDTO);
        Crecimiento crecimientoGuardado = crecimientoRepository.save(crecimiento);
        return crecimientoMapper.crecimientoToDTO(crecimientoGuardado);
    }

    public CrecimientoDTO obtenerCrecimientoPorId(Long id) {
        Optional<Crecimiento> crecimientoOptional = crecimientoRepository.findById(id);
        return crecimientoOptional.map(crecimientoMapper::crecimientoToDTO).orElse(null);
    }

    @Transactional
    public CrecimientoDTO actualizarCrecimiento(Long id, CrecimientoDTO crecimientoDTO) {
        Optional<Crecimiento> crecimientoOptional = crecimientoRepository.findById(id);
        if (crecimientoOptional.isPresent()) {
            Crecimiento crecimiento = crecimientoOptional.get();
            // Actualizar los atributos según sea necesario
            crecimiento.setFechaSembrado(crecimientoDTO.getFechaSembrado());
            crecimiento.setAreaLote(crecimientoDTO.getAreaLote());
            crecimiento.setSombra(crecimientoDTO.getSombra());
            crecimiento.setDistanciaSiembra(crecimientoDTO.getDistanciaSiembra());
            crecimiento.setTipoTrazo(crecimientoDTO.getTipoTrazo());
            crecimiento.setProfundidadAhoyado(crecimientoDTO.getProfundidadAhoyado());
            crecimiento.setChapolasSembradas(crecimientoDTO.getChapolasSembradas());
            crecimiento.setChapolasFinales(crecimientoDTO.getChapolasFinales());
            crecimiento.setFechaFinal(crecimientoDTO.getFechaFinal());
            crecimiento.setDepartamento(crecimientoDTO.getDepartamento());
            crecimiento.setCiudad(crecimientoDTO.getCiudad());
            crecimiento.setDireccion(crecimientoDTO.getDireccion());
            crecimiento.setNombreFinca(crecimientoDTO.getNombreFinca());
            crecimiento.setUbicacionLatitud(crecimientoDTO.getUbicacionLatitud());
            crecimiento.setUbicacionLongitud(crecimientoDTO.getUbicacionLongitud());
            crecimiento.setAltitud(crecimientoDTO.getAltitud());
            crecimiento.setTemperaturaMedia(crecimientoDTO.getTemperaturaMedia());
            crecimiento.setHumedadMedia(crecimientoDTO.getHumedadMedia());
            crecimiento.setObservaciones(crecimientoDTO.getObservaciones());
            crecimiento.setImagen(crecimientoDTO.getImagen());
            // Guardar la actualización
            Crecimiento crecimientoActualizado = crecimientoRepository.save(crecimiento);
            return crecimientoMapper.crecimientoToDTO(crecimientoActualizado);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarCrecimiento(Long id) {
        crecimientoRepository.deleteById(id);
    }

    public List<CrecimientoDTO> obtenerTodosLosCrecimientos() {
        List<Crecimiento> crecimientos = (List<Crecimiento>) crecimientoRepository.findAll();
        return crecimientos.stream()
                .map(crecimientoMapper::crecimientoToDTO)
                .collect(Collectors.toList());
    }
}

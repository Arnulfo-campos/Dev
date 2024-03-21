package com.example.demo.Services;

import com.example.demo.DTO.UsuarioDTO;
import com.example.demo.Mappers.UsuarioMapper;
import com.example.demo.persistance.Entities.Usuario;
import com.example.demo.persistance.Repository.UsuarioRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UsuarioService {

    private final UsuarioRepository usuarioRepository;
    private final UsuarioMapper usuarioMapper;

    public UsuarioService(UsuarioRepository usuarioRepository, UsuarioMapper usuarioMapper) {
        this.usuarioRepository = usuarioRepository;
        this.usuarioMapper = usuarioMapper;
    }

    @Transactional
    public UsuarioDTO crearUsuario(UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioMapper.DTOToUsuario(usuarioDTO);
        Usuario usuarioGuardado = usuarioRepository.save(usuario);
        return usuarioMapper.usuarioToDTO(usuarioGuardado);
    }

    public UsuarioDTO obtenerUsuarioPorId(Long id) {
        Optional<Usuario> usuarioOptional = usuarioRepository.findById(id);
        return usuarioOptional.map(usuarioMapper::usuarioToDTO).orElse(null);
    }

    @Transactional
    public UsuarioDTO actualizarUsuario(Long id, UsuarioDTO usuarioDTO) {
        Optional<Usuario> usuarioOptional = usuarioRepository.findById(id);
        if (usuarioOptional.isPresent()) {
            Usuario usuario = usuarioOptional.get();
            // Actualizar los atributos según sea necesario
            usuario.setNombre(usuarioDTO.getNombre());
            usuario.setEmail(usuarioDTO.getEmail());
            usuario.setPassword(usuarioDTO.getPassword());
            usuario.setTipo_usuario(usuarioDTO.getTipo_usuario());
            // Guardar la actualización
            Usuario usuarioActualizado = usuarioRepository.save(usuario);
            return usuarioMapper.usuarioToDTO(usuarioActualizado);
        } else {
            return null; // o lanzar una excepción, según sea necesario
        }
    }

    public void eliminarUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }

    public List<UsuarioDTO> obtenerTodosLosUsuarios() {
        List<Usuario> usuarios = (List<Usuario>) usuarioRepository.findAll();
        return usuarios.stream()
                .map(usuarioMapper::usuarioToDTO)
                .collect(Collectors.toList());
    }
}

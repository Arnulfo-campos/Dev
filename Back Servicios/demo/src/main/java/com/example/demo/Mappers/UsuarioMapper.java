// UsuarioMapper.java
package com.example.demo.Mappers;

import com.example.demo.DTO.UsuarioDTO;
import com.example.demo.persistance.Entities.Usuario;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UsuarioMapper {

    @Mapping(source = "id", target = "id")
    @Mapping(source = "nombre", target = "nombre")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "password", target = "password")
    @Mapping(source = "tipo_usuario", target = "tipo_usuario")
    UsuarioDTO usuarioToDTO(Usuario usuario);

    @Mapping(target = "id", ignore = true)
    @Mapping(source = "nombre", target = "nombre")
    @Mapping(source = "email", target = "email")
    @Mapping(source = "password", target = "password")
    @Mapping(source = "tipo_usuario", target = "tipo_usuario")
    Usuario DTOToUsuario(UsuarioDTO usuarioDTO);
}

package mx.backend.apirest.models.services;

import mx.backend.apirest.models.entity.Usuario;

public interface IUsuarioService {
	public Usuario findByUsername(String username);

}

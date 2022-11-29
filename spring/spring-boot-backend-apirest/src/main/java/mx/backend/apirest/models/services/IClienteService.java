package mx.backend.apirest.models.services;

import java.util.List;

import mx.backend.apirest.models.entity.Cliente;

public interface IClienteService {

	public List<Cliente> findAll();
	
}

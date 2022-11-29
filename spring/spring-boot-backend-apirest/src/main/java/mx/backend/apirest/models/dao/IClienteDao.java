package mx.backend.apirest.models.dao;

import org.springframework.data.repository.CrudRepository;

import mx.backend.apirest.models.entity.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long>{

}

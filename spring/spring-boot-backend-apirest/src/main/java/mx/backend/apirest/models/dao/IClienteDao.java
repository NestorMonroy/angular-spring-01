package mx.backend.apirest.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import mx.backend.apirest.models.entity.Cliente;

public interface IClienteDao extends JpaRepository<Cliente, Long>{

}

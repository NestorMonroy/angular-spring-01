package mx.backend.apirest.models.dao;

import org.springframework.data.repository.CrudRepository;

import mx.backend.apirest.models.entity.Factura;

public interface IFacturaDao extends CrudRepository<Factura,Long>{

}

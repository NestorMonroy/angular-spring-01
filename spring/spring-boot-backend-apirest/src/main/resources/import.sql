
INSERT INTO `usuarios` (username, password, enabled, nombre, apellido, email) VALUES ('nestor','$2a$10$MB.328OFDBXJJxTV.graMe0T5xZKehJEXTuX4V498lIENQyGeBd7y',1, 'nestor', 'usuario', 'abc@abc.com');
INSERT INTO `usuarios` (username, password, enabled, nombre, apellido, email) VALUES ('admin','$2a$10$qwNDGP31cXfdDr0OfPSD2.N37SR/Ci37kYXk1qYwm7ctQNJhLuIMW',1, 'admin', 'admin', 'abc1@abc.com');

INSERT INTO roles (nombre) VALUES ('ROLE_USER');
INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (1, 1);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2, 2);
INSERT INTO usuarios_roles (usuario_id, role_id) VALUES (2, 1);

INSERT INTO regiones (id, nombre) VALUES (1, 'Sudamérica');
INSERT INTO regiones (id, nombre) VALUES (2, 'Centroamérica');
INSERT INTO regiones (id, nombre) VALUES (3, 'Norteamérica');
INSERT INTO regiones (id, nombre) VALUES (4, 'Europa');
INSERT INTO regiones (id, nombre) VALUES (5, 'Asia');
INSERT INTO regiones (id, nombre) VALUES (6, 'Africa');
INSERT INTO regiones (id, nombre) VALUES (7, 'Oceanía');
INSERT INTO regiones (id, nombre) VALUES (8, 'Antártida');

INSERT INTO clientes (region_id, nombre, apellido, email, create_at) VALUES (1,'Usuario01', 'Apellido01','usuario01@abc.com','2022-01-01');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES (2,'Usuario02', 'Apellido02','usuario02@abc.com','2022-01-02');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES (2,'Usuario03', 'Apellido03','usuario03@abc.com','2022-02-03');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES (3,'Usuario04', 'Apellido04','usuario04@abc.com','2022-03-03');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES (3,'Usuario05', 'Apellido05','usuario05@abc.com','2022-04-03');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES (4,'Usuario06', 'Apellido06','usuario06@abc.com','2022-01-05');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES (5,'Usuario07', 'Apellido07','usuario07@abc.com','2022-01-06');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES (6,'Usuario08', 'Apellido08','usuario08@abc.com','2022-03-01');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES (7,'Usuario09', 'Apellido09','usuario09@abc.com','2022-05-01');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES (6,'Usuario10', 'Apellido10','usuario10@abc.com','2022-07-01');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES (8,'Usuario11', 'Apellido11','usuario11@abc.com','2022-09-01');
INSERT INTO clientes (region_id,nombre, apellido, email, create_at) VALUES (3,'Usuario12', 'Apellido12','usuario12@abc.com','2022-10-01');

INSERT INTO productos (nombre, precio, create_at) VALUES ('Producto 01', 25990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES ('Producto 02', 15990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES ('Producto 03', 3990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES ('Producto 04', 5990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES ('Producto 05', 9990, NOW());
INSERT INTO productos (nombre, precio, create_at) VALUES ('Producto 06', 75990, NOW());


INSERT INTO facturas(descripcion, observacion, cliente_id, create_at) VALUES ('Factura 01', null, 1, NOW())
INSERT INTO facturas_items(cantidad, factura_id, producto_id) VALUES (1,1,1)
INSERT INTO facturas_items(cantidad, factura_id, producto_id) VALUES (2,1,4)
INSERT INTO facturas_items(cantidad, factura_id, producto_id) VALUES (1,1,5)
INSERT INTO facturas_items(cantidad, factura_id, producto_id) VALUES (1,1,6)

INSERT INTO facturas(descripcion, observacion, cliente_id, create_at) VALUES ('Factura 02', 'Alguna nota', 1, NOW())
INSERT INTO facturas_items(cantidad, factura_id, producto_id) VALUES (3,2,3)

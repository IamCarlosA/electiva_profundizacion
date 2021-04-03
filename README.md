# Electiva de Profundización – Bases de Datos
## Actividad 4  2020-2
## Esquema Transaccional con Bases de Datos NoSQL
##Objetivo General
Desarrollar una implementación de una aplicación básica que permite practicar el desarrollo de transacciones en bases de datos NoSQL.

## Requerimiento para desarrollar
Se desea implementar el botón realizar pedido de un carrito de compras de un portal web de comercio electrónico, para lo cual se realizan las siguientes suposiciones:

El carrito de compras está conformado por una serie de artículos, que el usuario ha seleccionado previamente, desde una base de datos NoSQL.
La información de los artículos tiene un modelo en un “documento” que contiene la información básica del producto (código, descripción, presentación, impuesto, etc), y un campo que almacena la existencia del producto.
También existe un “documento” que guarda todas las transacciones sobre un producto, es decir, los registros de entrada y salida del producto para validar la existencia del producto.
Cuando el usuario presione el botón para realizar el pedido se debe generar la transacción factura, que genera este documento con características de legalidad, es decir registrando el pedido como una compra (modelo de factura), actualice los documentos de inventario y de productos con la nueva existencia.
En caso de que alguno de los productos no tenga existencia, no debe alterar la base de datos y debe informar al usuario.
Actividades para realizar
Utilizando una metodología ágil (SCRUM), diseñe un Sprint para brindar una solución al requerimiento.
Realice un diseño básico de la solución utilizando los conceptos POO. Desarrolle un diagrama de clases.
Diseñe el modelo de persistencia con el enfoque NoSQL para el modelo anterior.
Seleccione un proveedor NoSQL e implemente la base de datos. El proveedor de la base de datos debe ofrecer mecanismos básicos de integridad referencial y transaccionalidad.
Determine un modelo de software de implementación (por ejemplo MVC).
Desarrolle los componentes de software para implementar los CRUD de los documentos básicos (productos, movimientos, pedidos, facturas, etc).
Desarrolle los componentes de vistas para el carrito de compras, incluyendo el botón para realizar el pedido y la respuesta al lanzamiento de esta transacción.
Programe las siguientes consultas y las formas para su presentación:
Regeneración de una factura especifica.
Listado de artículos vendidos
Forma de Presentación
El resultado de esta actividad deberá ser sustentada por parte del grupo, directamente al profesor de manera remota.

## Fecha de presentación
Abril 05/2021

## Entregables
Modelo de la solución – Diagrama de clases
Diagrama de diseño y esquema de la base
Enlace a github de la solución desarrollada.
Video explicativo de la solución desarrollada con pruebas de la transacción desarrollada y de los resultados en la base de datos.

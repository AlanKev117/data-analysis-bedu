### Retos de la sesión 2
## Por Alan Kevin Fuentes García

show databases;
use tienda;
show tables;

desc articulo;
desc empleado;
desc puesto;
desc venta;

## ====== Reto 1. =======

# ¿Qué artículos incluyen la palabra Pasta en su nombre?
SELECT * FROM articulo WHERE nombre LIKE "%Pasta%";

# ¿Qué artículos incluyen la palabra Cannelloni en su nombre?
SELECT * FROM articulo WHERE nombre LIKE "%Canelloni%";

# ¿Qué nombres están separados por un guión (-) por ejemplo Puree - Kiwi?
SELECT * FROM articulo WHERE nombre LIKE "% - %";

# ¿Qué puestos incluyen la palabra Designer?
SELECT * FROM puesto WHERE nombre LIKE "%Designer%";

# ¿Qué puestos incluyen la palabra Developer?
SELECT * FROM puesto WHERE nombre LIKE "%Developer%";

## ====== Reto 2. =======

# ¿Cuál es el promedio de salario de los puestos?
SELECT AVG(salario) FROM puesto;

# ¿Cuántos artículos incluyen la palabra Pasta en su nombre?
SELECT COUNT(*) AS nombres_con_pasta FROM articulo WHERE nombre LIKE "%Pasta%";

# ¿Cuál es el salario mínimo y máximo?
SELECT MIN(salario) AS salario_min, MAX(salario) AS salario_max FROM puesto;

# ¿Cuál es la suma del salario de los últimos cinco puestos agregados?
SELECT SUM(salario) AS suma_ultimos_5_salarios FROM puesto WHERE id_puesto > (SELECT MAX(id_puesto) FROM puesto) - 5;

## ====== Reto 3. =======

# ¿Cuántos registros hay por cada uno de los puestos?
SELECT nombre AS nombre_puesto, COUNT(*) AS cantidad FROM puesto GROUP BY nombre;

# ¿Cuánto dinero se paga en total por puesto?
SELECT nombre AS nombre_puesto, SUM(salario) FROM puesto GROUP BY nombre;

# ¿Cuál es el número total de ventas por vendedor?
SELECT id_empleado AS id_vendedor, COUNT(*) as num_ventas FROM venta GROUP BY id_empleado;

# ¿Cuál es el número total de ventas por artículo?
SELECT id_articulo, COUNT(*) as num_ventas FROM venta GROUP BY id_articulo;
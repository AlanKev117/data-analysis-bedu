### Retos de la sesión 2
## Por Alan Kevin Fuentes García

USE tienda;

# ================================================================
# === Reto 1
# ================================================================

# 1.1 ¿Cuál es el nombre de los empleados cuyo sueldo es menor a $10,000?
SELECT 
	nombre, 
    apellido_paterno
FROM empleado
WHERE id_puesto IN (SELECT id_puesto FROM puesto WHERE salario < 15000); # Salario mayor para obtener resultados

# 1.2 ¿Cuál es la cantidad mínima y máxima de ventas de cada empleado?
SELECT 
	id_empleado,
	min(total_ventas) AS min_ventas, 
    max(total_ventas) AS max_ventas
FROM
	(SELECT 
		clave, 
		id_empleado, 
		count(*) AS total_ventas
	FROM venta
	GROUP BY clave, id_empleado) AS sq
GROUP BY id_empleado;

# 1.3 ¿Cuáles claves de venta incluyen artículos cuyos precios son mayores a $5,000?
SELECT id_venta 
FROM venta 
WHERE id_articulo IN (SELECT id_articulo FROM articulo WHERE precio > 5000);

# ================================================================
# === Reto 2
# ================================================================

# 2.1 ¿Cuál es el nombre de los empleados que realizaron cada venta?
SELECT 
	e.nombre AS nombre, 
    e.apellido_paterno AS apellido, 
    v.clave AS clave_venta
FROM empleado AS e JOIN venta AS v
ON e.id_empleado = v.id_empleado;

# 2.2 ¿Cuál es el nombre de los artículos que se han vendido?
SELECT 
	a.nombre AS articulo, 
    v.clave AS clave_venta
FROM articulo a JOIN venta v
ON a.id_articulo = v.id_articulo;

# 2.3 ¿Cuál es el total de cada venta?
SELECT 
	v.clave AS clave_venta, 
    SUM(a.precio) AS total
FROM articulo a JOIN venta v
ON a.id_articulo = v.id_articulo
GROUP BY clave_venta;

# ================================================================
# === Reto 3
# ================================================================

# 3.1 Obtener el puesto de un empleado.
CREATE VIEW puesto_empleado_061 AS
SELECT 
	e.id_empleado,
	e.nombre AS nombre, 
	e.apellido_paterno AS apellido,
    p.nombre AS puesto
FROM empleado AS e
JOIN puesto AS p
ON e.id_puesto = p.id_puesto;

SELECT * FROM puesto_empleado_061;

# 3.2 Saber qué artículos ha vendido cada empleado.
CREATE VIEW articulos_empleado_061 AS
SELECT 
    e.id_empleado, 
    e.nombre, 
    e.apellido_paterno, 
    group_concat(a.nombre separator ", ") AS articulos_vendidos
FROM venta v 
join articulo a 
on v.id_articulo = a.id_articulo 
join empleado e 
on e.id_empleado = v.id_empleado
group by id_empleado;

SELECT * FROM articulos_empleado_061;

# 3.3 Saber qué puesto ha tenido más ventas.
CREATE VIEW puesto_ventas_061 AS
SELECT
	p.id_puesto,
	p.nombre AS puesto,
    count(*) AS num_ventas
FROM 
	puesto p,
	empleado e, 
    venta v 
WHERE p.id_puesto = e.id_puesto 
AND v.id_empleado = e.id_empleado
GROUP BY p.id_puesto;

SELECT * FROM puesto_ventas_061 ORDER BY num_ventas DESC LIMIT 1;
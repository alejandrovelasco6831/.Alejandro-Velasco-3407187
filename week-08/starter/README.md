# Week 8 – Gestión de Inventario

## Descripción

En esta actividad se desarrolló un sistema de gestión de inventario en JavaScript aplicado al dominio Diseño de Interiores, permitiendo administrar proyectos mediante operaciones de inserción, eliminación, búsqueda y transformación de datos.

## Objetivo

Aplicar los conceptos de:

* Manipulación de arrays (`push`, `pop`, `unshift`, `splice`)
* Métodos de arrays (`forEach`, `filter`, `find`, `map`)
* Uso de funciones para organizar la lógica
* Creación de copias inmutables con el operador spread (`...`)
* Generación de reportes en consola con template literals

## Funcionalidades

El sistema permite agregar proyectos, eliminar elementos del inventario, priorizar elementos, buscar proyectos por nombre, filtrar los proyectos activos, generar listas transformadas y mostrar un reporte completo del estado del inventario.

## Estructura del proyecto

week-08
starter
script.js
README.md

## Archivo principal

starter/script.js

## Cómo ejecutarlo

1. Abrir la terminal en la carpeta principal del proyecto.
2. Verificar que Node.js esté instalado con el comando: node -v
3. Ejecutar el siguiente comando: node week-08/starter/script.js
4. El programa mostrará en consola el reporte completo del inventario.

## Ejemplo de salida

==================================================
📦 GESTIÓN DE DISEÑO DE INTERIORES
==================================

📋 Inventario inicial (5 proyectos):
[1] Sala moderna — residencial — $1500000
[2] Oficina ejecutiva — oficina — $2000000
[3] Cocina integral — residencial — $1800000
[4] Local comercial — comercial — $2500000
[5] Habitación minimalista — residencial — $1200000

--- Operaciones de mutación ---

Agregado: Terraza moderna
Prioritario agregado: Proyecto VIP
Eliminado por índice: Cocina integral
Eliminado: Terraza moderna

--- Inventario después de mutaciones ---

[0] Proyecto VIP — comercial — $3000000
[1] Sala moderna — residencial — $1500000
[2] Oficina ejecutiva — oficina — $2000000
[4] Local comercial — comercial — $2500000
[5] Habitación minimalista — residencial — $1200000

--- Búsqueda y filtrado ---

Búsqueda: [1] Sala moderna — residencial — $1500000
Activos: 4

--- Transformación con map ---

Nombres: Sala moderna, Oficina ejecutiva, Local comercial, Habitación minimalista
Precios con descuento: 1350000, 1800000, 2250000, 1080000

--- Resumen final ---

Total en inventario: 5 proyectos
Activos: 4 | Inactivos: 1

==================================================
✅ Reporte completado
====================

## Dominio utilizado

Diseño de Interiores

## Autor

Alejandro Velasco

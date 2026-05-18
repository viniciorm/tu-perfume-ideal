# TDD Rules

## Principio general

Antes de implementar lógica compleja, definir el comportamiento esperado.

El proyecto debe priorizar funciones puras testeables para:

- Matching de productos.
- Filtros.
- Búsqueda.
- Formateo de precios.
- Generación de links de WhatsApp.
- Cálculo de total.

## Funciones que deben ser testeables

### Matching

Archivo:

```txt
/src/utils/matching.ts
```

Función:

```ts
getProductScore(product, answers)
```

Debe cumplir:

- Coincidencia de género suma +3.
- Coincidencia de línea/formato suma +2.
- Coincidencia de familia olfativa suma +4.
- Coincidencia de ocasión suma +3.
- Coincidencia de intensidad suma +2.
- Coincidencia de texto con `inspiredBy`, `name`, `brandReference` o `code` suma +6.
- Coincidencia de tags suma +2.
- Producto destacado en empate suma +1.

### Búsqueda

Debe buscar en:

- code
- name
- inspiredBy
- brandReference
- line
- family
- mainNotes
- tags

Debe ser case-insensitive.

### Filtros

Los filtros deben poder combinarse.

Ejemplo:

- Línea = Hombre
- Familia = Maderoso
- Stock = Disponible

Debe mostrar solo productos que cumplan todas las condiciones activas.

### WhatsApp

Debe:

- Codificar correctamente el mensaje.
- Usar el número de `STORE_CONFIG`.
- Incluir productos seleccionados.
- Incluir precios.
- Incluir preferencias si existen.

### Precios

Debe:

- Obtener precio desde `priceKey`.
- Formatear CLP como `$17.000`.
- Calcular total de selección.

## Reglas de implementación

- No mezclar lógica de negocio dentro de componentes visuales.
- Crear funciones puras en `/utils`.
- Mantener componentes pequeños.
- Evitar duplicación.
- No agregar backend.
- No agregar dependencias innecesarias.
- No romper el alcance del MVP.

## Criterios de aceptación

La app cumple el MVP si:

- El usuario puede buscar perfume.
- El usuario puede usar la guía.
- El usuario puede ver resultados.
- El usuario puede seleccionar productos.
- El usuario puede enviar WhatsApp.
- Los precios vienen desde `prices.ts`.
- El catálogo viene desde `products.ts`.
- La nota legal aparece visible.

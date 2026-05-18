# WhatsApp Flow

## Objetivo

La conversión principal de la app es WhatsApp.

El usuario debe enviar mensaje solo después de:

- Seleccionar un producto.
- Seleccionar varios productos.
- No encontrar lo que busca.
- Querer hacer una consulta general.

## Archivo

Crear:

```txt
/src/utils/whatsapp.ts
```

## Funciones requeridas

```ts
createGeneralWhatsappLink()
createProductWhatsappLink(product)
createSelectionWhatsappLink(selectedProducts, wizardAnswers)
createNotFoundWhatsappLink(searchText, wizardAnswers)
```

## Formato base

```ts
https://wa.me/569XXXXXXXX?text=MENSAJE_CODIFICADO
```

El número debe venir desde:

```ts
STORE_CONFIG.whatsappNumber
```

## Mensaje para producto único

```txt
Hola, quiero consultar por este perfume:

Producto: [Código] - Aroma inspirado en [InspiredBy]
Línea: [Línea]
Formato: [Formato]
Precio estimado: $[Precio]

¿Tienes stock disponible?
```

## Mensaje para selección múltiple

```txt
Hola, quiero consultar por estos perfumes:

1. [Código] - Aroma inspirado en [InspiredBy] - [Formato] - $[Precio]
2. [Código] - Aroma inspirado en [InspiredBy] - [Formato] - $[Precio]

Mis preferencias fueron:
Género: [respuesta]
Familia/Aroma: [respuesta]
Intensidad: [respuesta]
Uso: [respuesta]

¿Tienes stock disponible y cómo puedo comprar?
```

## Mensaje para perfume no encontrado

```txt
Hola, estoy buscando un perfume alternativo con estas características:

Búsqueda: [searchText]
Género: [respuesta]
Familia/Aroma: [respuesta]
Intensidad: [respuesta]
Uso: [respuesta]

¿Me puedes ayudar a encontrar una alternativa?
```

## Reglas UX

- No forzar WhatsApp al inicio.
- El CTA principal debe aparecer después de selección.
- Puede existir botón flotante de consulta general, pero no debe competir con el flujo principal.
- En cards, usar “Seleccionar” como acción principal.
- “Consultar este” puede ser acción secundaria.

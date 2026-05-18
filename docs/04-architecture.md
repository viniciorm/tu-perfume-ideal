# Architecture

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- ShadCN/UI
- Lucide React

## Principios

- Mobile-first.
- Sin backend en MVP.
- Sin autenticación.
- Sin base de datos.
- Datos desde archivos locales.
- Código modular y fácil de mantener.
- Componentes reutilizables.
- Lógica separada de la UI.

## Estructura sugerida

```txt
/src
  /components
    Header.tsx
    Hero.tsx
    QuickSearch.tsx
    GuidedWizard.tsx
    WizardStep.tsx
    ProductFilters.tsx
    ProductGrid.tsx
    ProductCard.tsx
    ProductDetailModal.tsx
    SelectionSummary.tsx
    ProductLines.tsx
    FeaturedProducts.tsx
    HowToBuy.tsx
    FAQ.tsx
    Footer.tsx

  /config
    store.ts

  /data
    products.ts
    prices.ts
    categories.ts

  /utils
    whatsapp.ts
    matching.ts
    formatters.ts

  /types
    product.ts
    wizard.ts

  App.tsx
  main.tsx
```

## Responsabilidades

### `/components`

Componentes visuales y de interacción.

### `/data`

Datos locales editables:

- Productos.
- Precios.
- Categorías.
- Líneas de producto.

### `/utils`

Funciones puras:

- Generación de links de WhatsApp.
- Matching de productos.
- Formateo de precios.
- Filtros y búsqueda.

### `/config`

Datos configurables:

- Nombre de tienda.
- WhatsApp.
- Instagram.
- País.
- Moneda.
- Texto legal.

### `/types`

Tipos TypeScript compartidos.

## Estado de la app

Manejar con React state:

- Texto de búsqueda.
- Filtros seleccionados.
- Paso actual del wizard.
- Respuestas del wizard.
- Productos seleccionados.
- Producto abierto en detalle.

No usar Redux ni Zustand en el MVP salvo que sea estrictamente necesario.

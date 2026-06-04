# 🌸 Tu Perfume Ideal — Web App de Alta Perfumería en Chile

¡Bienvenido a **Tu Perfume Ideal**! Esta es una aplicación web interactiva, moderna y de diseño premium construida para conectar a los clientes con alternativas de alta perfumería inspiradas en las marcas más famosas del mundo. 

La aplicación permite explorar un catálogo curado, utilizar un **Asesor de Fragancias Inteligente** (paso a paso), descubrir aromas a través de un **Mapa de Fragancias interactivo**, leer sobre notas olfativas y finalizar las compras enviando un pedido pre-formateado directamente a **WhatsApp**.

---

## 🎨 Características Clave

* 🎯 **Asesor Inteligente (Guided Wizard)**: Una guía interactiva paso a paso para personas que no saben qué perfume elegir. Pregunta por género, tipo de aroma (floral, frutal, cítrico, maderoso, etc.), ocasión de uso, intensidad y formato para recomendar las mejores coincidencias del catálogo.
* 🔍 **Buscador Rápido Ultra-Filtro (QuickSearch)**: Permite a los usuarios buscar por nombre del perfume, marca de referencia, código, familia olfativa, notas principales o etiquetas (ej. *"verano"*, *"dulce"*, *"noche"*).
* 🗺️ **Mapa de Fragancias (Fragrance Map)**: Sección visual interactiva para explorar perfumes según sus familias olfativas e intensidades (fresco, equilibrado, intenso, etc.) de forma lúdica.
* 🛍️ **Carrito de Selección Inteligente**: Una barra inferior dinámica (Selection Summary) que calcula totales estimados, muestra un resumen del pedido y permite realizar ajustes rápidos de cantidad.
* 💬 **Integración WhatsApp de Alta Fidelidad**: Convierte todo el pedido seleccionado (junto con las preferencias del asesor, códigos y subtotales) en un mensaje de WhatsApp perfectamente formateado y listo para que un operador coordine el stock y despacho.
* 📸 **Imágenes de Presentación Reales**: Muestra los frascos reales para la línea femenina (Mujer - F) y masculina (Hombre - H) en sus tres tamaños estándar (20 ml, 50 ml y 100 ml).
* 🎁 **Promociones y Packs Especiales**: Soporte nativo para combos de productos (ej. Body Splash + Hydra Cream, After Shave + Perfume) con landings dedicadas.

---

## 🛠️ Stack Tecnológico

La aplicación está construida sobre una base moderna y escalable:
1. **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) para un tipado estricto de productos y flujos de datos.
2. **Construcción y HMR**: [Vite 8](https://vite.dev/) para compilaciones y recarga en caliente ultrarrápidas en desarrollo.
3. **Estilos y Animaciones**: [Tailwind CSS 3](https://tailwindcss.com/) + [Tailwindcss Animate](https://github.com/jamiebuilds/tailwindcss-animate) para transiciones y micro-animaciones premium, y [Lucide Icons](https://lucide.dev/) para iconografía limpia.
4. **Componentes UI**: Componentes de alta accesibilidad basados en [Radix UI](https://www.radix-ui.com/) (Dialog, Accordion, Select, Tabs, Progress).

---

## 📁 Estructura del Proyecto

A continuación se detalla la arquitectura de archivos del proyecto para comprender cómo está estructurado:

```bash
parfums/
├── public/
│   ├── favicon.svg             # Favicon de la aplicación
│   ├── icons.svg               # SVG sprites para iconos
│   └── images/                 # Imágenes de los perfumes (recortes de las botellas reales)
│       ├── perfume-hombre.jpg  # Envases H (Hombre): 20ml, 50ml, 100ml
│       ├── perfume-mujer.jpg   # Envases F (Mujer): 20ml, 50ml, 100ml
│       ├── perfume-red.jpg     # Colección premium RED (100ml)
│       └── perfume-black.jpg   # Colección premium BLACK (100ml)
├── src/
│   ├── components/             # Componentes reactivos modulares
│   │   ├── ui/                 # Componentes base reutilizables (Dialog, Button, Input, Badge)
│   │   ├── Header.tsx          # Barra de navegación superior
│   │   ├── Hero.tsx            # Sección de bienvenida y propuesta de valor
│   │   ├── QuickSearch.tsx     # Barra de búsqueda y filtrado rápido
│   │   ├── GuidedWizard.tsx    # Interfaz interactiva paso a paso del asesor
│   │   ├── ProductCard.tsx     # Ficha de producto en cuadrícula
│   │   ├── ProductDetailModal.tsx # Detalle ampliado de notas, intensidad y formato
│   │   ├── FragranceMap.tsx    # Explorador visual de notas y familias olfativas
│   │   ├── AromaBlog.tsx       # Guía de tips de fijación, notas de salida, corazón y fondo
│   │   ├── SelectionSummary.tsx # Barra inferior del carrito con cotización automática
│   │   └── Footer.tsx          # Pie de página con descargos legales e información
│   ├── config/
│   │   └── store.ts            # Ajustes globales del negocio (Número WhatsApp de Chile, RRSS, etc.)
│   ├── data/
│   │   ├── products.ts         # Base de datos local de productos (Familias, notas, marcas de inspiración)
│   │   ├── prices.ts           # Definición de costos y precios de venta sugeridos por formato
│   │   └── categories.ts       # Opciones estandarizadas de géneros, aromas e intensidades
│   ├── hooks/                  # Hooks personalizados de React
│   ├── types/                  # Definiciones de tipos TypeScript (.d.ts)
│   │   ├── product.ts          # Tipado estricto del esquema de productos y líneas
│   │   └── wizard.ts           # Tipado de respuestas del asesor guiado
│   ├── utils/
│   │   ├── matching.ts         # Motor de scoring (+6 ref, +4 aroma, etc.) y filtrado difuso
│   │   ├── formatters.ts       # Formateador de moneda local (CLP)
│   │   └── whatsapp.ts         # Formateador de plantillas de texto dinámicas para enlaces WhatsApp
│   ├── App.tsx                 # Orquestador del estado principal de la aplicación
│   ├── index.css               # Definición de estilos globales y tokens de diseño
│   └── main.tsx                # Entrada de la aplicación React
├── package.json                # Dependencias y scripts de Vite
├── tailwind.config.js          # Configuración del motor Tailwind CSS
└── tsconfig.json               # Configuración del compilador TypeScript
```

---

## ⚡ Guía de Configuración Local

Sigue estos sencillos pasos para clonar el repositorio, instalar dependencias y levantar el servidor de desarrollo local.

### 📋 Requisitos Previos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada) y `npm` en tu sistema. Puedes comprobarlo ejecutando:

```bash
node --version
npm --version
```

### 🛠️ Pasos para Iniciar

1. **Instalar Dependencias**  
   Ejecuta el siguiente comando en la raíz del proyecto para descargar e instalar todas las dependencias necesarias:
   ```bash
   npm install
   ```

2. **Levantar el Servidor de Desarrollo**  
   Inicia el servidor local de Vite con recarga en caliente inmediata:
   ```bash
   npm run dev
   ```
   Una vez ejecutado, la consola te mostrará la URL local. Por lo general, estará en:  
   👉 [http://localhost:5173/](http://localhost:5173/)  
   Abre esta dirección en tu navegador para ver y probar la aplicación web interactiva.

3. **Compilar para Producción**  
   Si deseas validar o generar los archivos estáticos de producción optimizados (`HTML`, `JS` y `CSS` listos en la carpeta `dist/`):
   ```bash
   npm run build
   ```

4. **Previsualizar la Compilación**  
   Prueba localmente la versión de producción optimizada generada en el paso anterior:
   ```bash
   npm run preview
   ```

---

## ⚙️ ¿Cómo Personalizar o Cambiar el Inventario?

* **Modificar Perfumes o Inspiraciones**: Abre [src/data/products.ts](file:///c:/Users/marco/Documents/parfums/src/data/products.ts). Puedes añadir nuevos objetos siguiendo la estructura de tipos definida en [product.ts](file:///c:/Users/marco/Documents/parfums/src/types/product.ts).
* **Actualizar Tarifas y Precios**: Modifica las variables de costos y ventas en [prices.ts](file:///c:/Users/marco/Documents/parfums/src/data/prices.ts). La aplicación web recalcula automáticamente los totales de compra en base a estas claves.
* **Configurar el WhatsApp de Recepción**: Ve a [src/config/store.ts](file:///c:/Users/marco/Documents/parfums/src/config/store.ts) y edita el parámetro `whatsappNumber` con el número del local (ej: `569XXXXXXXX` para Chile) para que todos los pedidos comiencen a llegar directamente a tu WhatsApp oficial.

---

¡Disfruta desarrollando y personalizando **Tu Perfume Ideal**! Si tienes dudas sobre cómo estructurar nuevas líneas o componentes, abre una consulta. ✨

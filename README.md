# CRPONENTS - Plantilla de React con componentes reutilizables

Esta es una plantilla personalizada para proyectos de React, diseñada para proporcionar una estructura base sólida y componentes reutilizables. Incluye configuraciones para CSS y Tailwind, optimizada para un desarrollo rápido y eficiente, proyecto simple que incluye las cosas más comunes que necesitas para comenzar a construir tu aplicación.

## Inicio rápido

Para crear un nuevo proyecto usando esta plantilla:

```bash
git clone https://github.com/CristopherPaiz/CRPONENTS.git
```

## Características

- 🚀 Configuración de Vite para un desarrollo rápido
- ⚛️ React 18+
- 🎨 Soporte para Tailwind
- 📦 Componentes reutilizables pre-construidos
- 🖌️ ESLint para consistencia de código

## Componentes incluidos

- CRAlert
- CRButton
- CRCard
- CRCheckbox
- CRInput
- CRModal
- CRRadio
- CRSelect
- CRSwitch
- CRTable
- CRTabs
- CRToast
- CRTooltip

## Requisitos previos

- Node.js (versión 14 o superior)
- npm o yarn

## Estructura del proyecto

```
public/
└── [archivos estáticos]
src/
├── components/
│   ├── styles/
│   │   └── [archivos CSS o configuración de Tailwind]
│   ├── assets/
│   │   └── [archivos de imágenes o fuentes]
│   ├── Config/
│   │   └── [archivos de configuración]
│   ├── styles/
│   │   └── [archivos CSS o configuración de Tailwind]
│   ├── ui/
│   │   └── [componentes UI de CRPONENTS]
|   ├── utils/
|   |   └── [funciones de utilidad]
|   ├── views/
|   |   └── [páginas de la aplicación]
│   └── index.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── jsconfig.json
├── LICENSE
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run lint`: Ejecuta el linter
- `npm run preview`: Previsualiza la aplicación construida localmente

## Personalización

### Tailwind

La configuración de Tailwind se encuentra en `tailwind.config.js`. Modifica este archivo para ajustar los temas, colores, fuentes, etc.

### Componentes

Explora la carpeta `src/components/ui` para ver los componentes disponibles. Puedes modificarlos o crear nuevos según tus necesidades.

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerencias o mejoras.

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)

---

¿Problemas o preguntas? Abre un issue en este repositorio.

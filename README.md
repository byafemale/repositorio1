# Página Web Profesional 🌐

Una página web moderna, profesional y completamente responsiva construida con **HTML, CSS y JavaScript vanilla**.

## ✨ Características

- ✅ **Menú de Navegación Responsivo** - Se adapta automáticamente a dispositivos móviles
- ✅ **Sección Hero Animada** - Bienvenida impactante con gradientes y animaciones
- ✅ **Galería de Proyectos** - Grid responsivo de 6 proyectos con efectos hover
- ✅ **Formulario de Contacto** - Validación completa en tiempo real
- ✅ **Diseño Responsive** - Optimizado para móvil, tablet y desktop
- ✅ **Animaciones Suaves** - Transiciones elegantes al desplazarse
- ✅ **100% Vanilla JavaScript** - Sin dependencias externas

## 🎨 Colores y Diseño

La página utiliza un esquema de colores profesional:

| Variable | Color | Uso |
|----------|-------|-----|
| `--primary-color` | #2563eb (Azul) | Elementos principales |
| `--secondary-color` | #1e40af (Azul Oscuro) | Fondos secundarios |
| `--accent-color` | #0891b2 (Cyan) | Acentos y hover |

## 📁 Estructura de Archivos

```
repositorio1/
├── index.html      # Estructura HTML
├── styles.css      # Estilos y diseño
├── script.js       # Funcionalidades JavaScript
└── README.md       # Este archivo
```

## 🚀 Cómo Usar

### 1. Abrir la Página
Simplemente abre `index.html` en tu navegador:
```bash
open index.html
# o haz doble clic en el archivo
```

### 2. Personalizar Contenido

#### Cambiar el nombre de la empresa:
En `index.html`, busca "Mi Empresa" y reemplázalo:
```html
<div class="logo">Tu Nombre Aquí</div>
```

#### Cambiar colores:
En `styles.css`, modifica las variables CSS:
```css
:root {
    --primary-color: #FF6B6B;    /* Cambia el azul por rojo */
    --accent-color: #4ECDC4;     /* Cambia el cyan por verde agua */
}
```

#### Cambiar las imágenes de la galería:
En `index.html`, reemplaza las URLs de las imágenes:
```html
<img src="https://TU-IMAGEN.jpg" alt="Tu Proyecto">
```

Puedes usar imágenes de:
- 📸 Tu dispositivo (ruta local)
- 🌐 URLs públicas (Unsplash, Pexels, etc.)
- ☁️ Servicios en la nube (AWS S3, GitHub Pages, etc.)

#### Editar textos:
- Título del hero: Busca `<h1>Bienvenido a Mi Empresa</h1>`
- Descripciones: Busca las etiquetas `<p>` y `<h3>`
- Links de redes sociales: Busca `<a href="#" target="_blank">`

## 📱 Funcionalidades JavaScript

### Menú Hamburguesa
Automáticamente se activa en pantallas menores a 768px. El menú se cierra al hacer clic en un enlace.

### Validación de Formulario
✅ Verifica que todos los campos estén completos
✅ Valida el formato del email
✅ Valida el teléfono (mínimo 10 dígitos)
✅ Muestra mensajes de error/éxito

### Animaciones al Desplazar
Los elementos de la galería se animan cuando llegan al viewport.

### Scroll Suave
Los enlaces de navegación llevan suavemente a cada sección.

## 🎯 Secciones de la Página

### 1. Navegación (Navbar)
- Logo/Nombre de empresa
- Menú de navegación
- Gradiente azul profesional
- Sticky (se mantiene al desplazar)

### 2. Sección Hero
- Título grande y subtítulo
- Botón "Contacta con nosotros"
- Gradiente de azul a cyan
- Animaciones flotantes

### 3. Galería
- Grid responsivo (3 columnas en desktop, 1 en móvil)
- 6 proyectos de ejemplo
- Efectos hover que levantan las tarjetas
- Zoom en las imágenes

### 4. Formulario de Contacto
- Campos: Nombre, Email, Teléfono, Mensaje
- Validación en tiempo real
- Mensajes de confirmación/error
- Limpieza automática del formulario

### 5. Footer
- Información de derechos
- Enlaces a redes sociales

## 🛠️ Personalización Avanzada

### Cambiar la fuente:
En `styles.css`:
```css
body {
    font-family: 'Tu Fuente Aquí', sans-serif;
}
```

### Agregar más proyectos a la galería:
Copia este código en `index.html` dentro de `.gallery-grid`:
```html
<div class="gallery-item">
    <img src="url-de-imagen" alt="Tu Proyecto">
    <h3>Nombre del Proyecto</h3>
    <p>Descripción del proyecto</p>
</div>
```

### Cambiar el número de columnas:
En `styles.css`:
```css
.gallery-grid {
    grid-template-columns: repeat(4, 1fr); /* Cambia a 4 columnas */
}
```

## 📊 Compatibilidad

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Dispositivos móviles (iOS y Android)

## 💡 Tips Útiles

1. **Imágenes Gratuitas:**
   - Unsplash: https://unsplash.com
   - Pexels: https://pexels.com
   - Pixabay: https://pixabay.com

2. **Validación:**
   - El formulario valida emails automáticamente
   - Puede adaptarse para enviar datos realmente (requiere backend)

3. **SEO:**
   - Reemplaza "Mi Empresa Profesional" en el `<title>`
   - Agrega meta descripciones
   - Optimiza los nombres de imágenes

## 🎓 Aprende y Modifica

Este proyecto es perfecto para aprender:
- Estructura HTML5 semántica
- CSS3 moderno (Grid, Flexbox, Gradientes)
- JavaScript vanilla (DOM, Eventos, Validación)
- Diseño Responsive (Mobile-first)

## 📞 Soporte

Si necesitas ayuda:
1. Verifica la consola del navegador (F12) para errores
2. Revisa que los nombres de archivos sean correctos
3. Asegúrate de que las rutas de las imágenes sean válidas

## 📄 Licencia

Libre para uso personal y comercial.

---

**¡Tu página web está lista para usar! 🎉**

Próximos pasos:
1. Personaliza los colores y contenidos
2. Reemplaza las imágenes
3. Prueba en diferentes dispositivos
4. ¡Comparte tu sitio con el mundo!

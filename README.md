# 🌍 Nomad Vibe

¡Hola! Soy Ana y este es mi sitio web creado como parte de la **Entrega 3** del curso de **Desarrollo Web** en **CoderHouse**.

🔗 **[Ver sitio en línea](https://anasocialmedia.github.io/nomad-vibe/)**

---

## ✨ ¿Qué encontrarás en Nomad Vibe?

Un espacio personal para compartir mi estilo de vida nómada y experiencias de viaje:

- 📖 **Relatos de viaje** (como mi experiencia en Cusco)
- 🌎 **Destinos recomendados**
- 🧳 **Tips prácticos para viajeras**
- 📬 **Formulario de contacto**
- 🗺️ **Mapa embebido** con mis lugares favoritos

---

## 🛠️ Tecnologías utilizadas

- `HTML5`
- `CSS3` con **Grid y Flexbox**
- `Bootstrap 5` (navbar, grid responsive, botones, etc.)
- `Sass (SCSS)` con:
  - Variables
  - Nesting
  - Media Queries
  - Animaciones (`@keyframes mover`)
- `Git & GitHub` para control de versiones

---

## 📁 Estructura de carpetas

```bash
nomad-vibe/
│
├── index.html
├── pages/
│   ├── blog.html
│   ├── contacto.html
│   ├── destinos.html
│   └── tips.html
│
├── img/              # Imágenes
├── css/              # styles.css compilado
├── sass/             # styles.scss original
├── bootstrap/        # Bootstrap descargado
└── README.md
```

---

## 💼 Landing adicional: Nancy Torrealba

Dentro del repositorio también vive una landing page independiente de marca
personal para **Nancy Torrealba**, asesora en previsión familiar con más de 30
años de experiencia en el sector funerario.

🔗 **[Ver landing](https://nancy-torrealba.vercel.app/)**  
_(desplegada en Vercel desde la carpeta `nancy-torrealba/`)_

```bash
nancy-torrealba/
├── index.html      # Landing completa (una sola página)
├── styles.css      # Estilos propios, sin dependencias
├── script.js       # Menú móvil, animaciones y formulario a WhatsApp
└── img/            # Aquí va la foto (ver img/LEEME.txt)
```

Es autocontenida: no usa Bootstrap ni el `styles.css` de Nomad Vibe, así que se
puede mover a su propio dominio copiando la carpeta.

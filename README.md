# 📋 SAUL - Sistema de Autenticación y Lista de Tareas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

## 📖 Descripción

**SAUL** (Sistema de Asistente Universal de Login) es una aplicación web que combina un sistema de autenticación de usuarios con un gestor de tareas (To-Do List) funcional. El proyecto está diseñado con una interfaz moderna y responsive utilizando TailwindCSS.

## ✨ Características

### 🔐 Sistema de Login
- Formulario de inicio de sesión con validación en tiempo real
- Formulario de registro de nuevos usuarios
- Validación de formato de email
- Validación de contraseña (mínimo 8 caracteres)
- Validación de nombre (mínimo 3 caracteres)
- Mensajes de error personalizados
- Alternancia fluida entre formularios de login y registro

### ✅ Gestor de Tareas
- Agregar nuevas tareas
- Marcar tareas como completadas (click en el texto)
- Editar tareas existentes
- Eliminar tareas
- **Persistencia de datos** con `localStorage`
- Las tareas se mantienen después de cerrar el navegador
- Interfaz intuitiva con iconos de Font Awesome

## 🚀 Demo

### Credenciales de Prueba
```
Email: test@saul.com
Contraseña: 123456789
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados
- **JavaScript (Vanilla)**: Lógica de la aplicación
- **TailwindCSS**: Framework CSS para diseño responsive
- **Font Awesome**: Iconografía
- **localStorage**: Persistencia de datos local

## 📁 Estructura del Proyecto
```
Login/
│
├── login.html              # Página principal de autenticación
├── login.js                # Lógica de login y registro
│
├── agenda/
│   ├── agenda.html         # Gestor de tareas
│   └── agenda.js           # Lógica del CRUD de tareas
│
├── logo_saul.jpg           # Logo de la aplicación
└── Campus.jpg              # Imagen de fondo
```

## 🎯 Instalación y Uso

1. **Clonar el repositorio**
```bash
   git clone https://github.com/gitgaby/saul-login-tasks.git
```

2. **Navegar al directorio**
```bash
   cd saul-login-tasks
```

3. **Abrir en el navegador**
   - Abre el archivo `login.html` directamente en tu navegador
   - O usa un servidor local como Live Server (VS Code)

## 💻 Funcionalidades Detalladas

### Login y Registro

#### Validaciones Implementadas:
- ✅ Email con formato válido (`ejemplo@dominio.com`)
- ✅ Contraseña mínima de 8 caracteres
- ✅ Nombre completo mínimo de 3 caracteres
- ✅ Validación en tiempo real (evento `blur`)
- ✅ Mensajes de error específicos por campo

### Gestor de Tareas

#### Operaciones CRUD:
- **Create**: Agregar nuevas tareas con el botón "Agregar"
- **Read**: Visualización de todas las tareas en lista
- **Update**: Editar tareas existentes con el ícono de lápiz
- **Delete**: Eliminar tareas con el ícono de papelera
- **Completar**: Click en el texto de la tarea para marcarla como completada

#### Persistencia:
- Todas las tareas se guardan automáticamente en `localStorage`
- Las tareas persisten entre sesiones del navegador
- Los estados de completado también se guardan

## 🎨 Características de Diseño

- 🌓 Interfaz moderna y limpia
- 📱 Diseño responsive (mobile-first)
- 🎭 Animaciones y transiciones suaves
- 🎨 Paleta de colores personalizada (SAUL Blue: `#2D60A1`)
- 🖼️ Fondo personalizado con imagen del campus
- ⚡ Efectos hover en botones e inputs

## 🔧 Personalización

### Cambiar Credenciales de Prueba
Edita el archivo `login.js` en las líneas 132-133:
```javascript
const VALID_EMAIL = 'test@saul.com'; 
const VALID_PASSWORD = '123456789';
```

### Modificar Colores
Edita la configuración de Tailwind en `login.html` o `agenda.html`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'saul-blue': '#2D60A1',
                'saul-hover': '#234d80',
            }
        }
    }
}
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Gabriel Gómez**

- GitHub: [@gitgaby](https://github.com/gitgaby)
- Proyecto: [SAUL Login & Tasks](https://github.com/gitgaby/saul-login-tasks)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

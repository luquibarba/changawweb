# CONTEXT.md

# Changa+

## Contexto General

Changa+ es una aplicación mobile-first desarrollada en React cuyo objetivo es conectar clientes con trabajadores independientes mediante una interfaz moderna, intuitiva y profesional.

La aplicación está diseñada para funcionar inicialmente como una SPA (Single Page Application) utilizando React y posteriormente evolucionar hacia una aplicación móvil utilizando React Native o una PWA.

Todo el proyecto debe construirse pensando en escalabilidad, mantenibilidad y una experiencia de usuario premium.

---

# Objetivo del Proyecto

La finalidad principal de Changa+ es facilitar la contratación de trabajadores independientes para pequeños trabajos ("changas"), ofreciendo una plataforma rápida, segura y moderna.

El usuario debe sentir que la aplicación es:

* rápida
* simple
* elegante
* profesional
* confiable

No debe sentirse como una aplicación gubernamental ni empresarial tradicional.

Debe sentirse como una startup tecnológica moderna.

---

# Tecnologías

Frontend

* React
* React Router
* Framer Motion
* CSS puro

Iconografía

* Lucide React

Backend previsto

* Node.js
* Express
* JWT
* Socket.io
* PostgreSQL

IA prevista

* OpenAI API

Hosting previsto

Frontend:

* Vercel

Backend:

* Railway o Render

Base de datos:

* PostgreSQL

---

# Filosofía del Código

Todo componente debe ser:

* pequeño
* reutilizable
* limpio
* fácil de leer

Nunca escribir componentes gigantes.

Cada pantalla importante debe tener:

NombrePantalla.jsx

NombrePantalla.css

En un futuro:

NombrePantalla.test.jsx

---

# Organización

/src

/components

/pages

/data

/assets

/hooks

/context

/services

/utils

---

# Navegación Actual

Presentation

↓

Login

↓

Registro

↓

Worker Home

o

Client Home

↓

Chats

↓

Conversación

---

# Roles

Actualmente existen dos tipos de usuarios.

## Cliente

Busca trabajadores.

Puede:

* buscar profesionales
* crear solicitudes
* recibir presupuestos
* chatear
* valorar trabajadores

---

## Trabajador

Busca trabajos.

Puede:

* ver trabajos disponibles
* publicar servicios
* recibir mensajes
* responder clientes
* administrar publicaciones

---

# Pantallas implementadas

✔ Presentation

✔ Login

✔ Register

✔ Worker Home

✔ Client Home

✔ Lista de Chats

✔ Chat Individual

---

# Estado del Proyecto

Actualmente el proyecto es únicamente frontend.

No existe autenticación real.

No existe backend.

Los datos son mock.

Sin embargo toda la estructura debe desarrollarse pensando en conectar un backend sin modificar el diseño.

---

# Convenciones

Todos los nombres de componentes:

PascalCase

Ejemplo

WorkerHome.jsx

ClientHome.jsx

ChatRoom.jsx

Variables

camelCase

Constantes

UPPER_CASE

---

# CSS

No utilizar Bootstrap.

No utilizar Tailwind.

Todo el diseño debe realizarse mediante CSS puro.

Se permite Flexbox y Grid.

---

# Responsive

Toda pantalla debe diseñarse primero para móvil.

Ancho de referencia

390 px

Todo el proyecto gira alrededor de ese tamaño.

Posteriormente se adaptará a escritorio.

---

# React

Siempre utilizar componentes funcionales.

Siempre utilizar Hooks.

Nunca utilizar clases.

---

# Animaciones

Toda transición debe realizarse mediante Framer Motion.

Las animaciones deben sentirse:

* suaves
* rápidas
* modernas

Nunca exageradas.

---

# Estado Actual

El frontend ya posee una identidad visual definida.

Cualquier modificación futura deberá respetar completamente esa identidad.

Nunca introducir un componente cuyo estilo rompa la estética general.

---

# Próximos Objetivos

* Backend
* Base de datos
* Autenticación
* Sistema de publicaciones
* Sistema de solicitudes
* Sistema de chat en tiempo real
* Sistema de calificaciones
* Sistema de IA
* Notificaciones
* Geolocalización
* Pagos

---

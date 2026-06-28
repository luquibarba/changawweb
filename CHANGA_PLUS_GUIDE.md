CHANGA_PLUS_GUIDE.md
Parte I — Filosofía del Producto
Changa+
Product Design Guide

Versión 1.0

Documento oficial del proyecto.

Introducción

Este documento define la identidad completa de Changa+.

No es únicamente una guía de diseño.

Es una guía de desarrollo, experiencia de usuario, filosofía del producto y estándares técnicos.

Toda persona o inteligencia artificial que participe en este proyecto deberá leer este documento antes de realizar cualquier modificación.

La prioridad absoluta no es únicamente que la aplicación funcione.

La prioridad es que toda nueva funcionalidad parezca haber sido diseñada desde el primer día como parte del producto.

La experiencia debe sentirse coherente.

El usuario nunca debe notar diferencias entre pantallas antiguas y nuevas.

Todo debe parecer diseñado por el mismo equipo.

Filosofía

Changa+ no intenta ser una aplicación compleja.

Su objetivo es resolver un problema cotidiano con la menor cantidad posible de pasos.

Cada pantalla debe responder una única pregunta:

¿Qué necesita hacer el usuario exactamente en este momento?

Todo aquello que no contribuya a responder esa pregunta debe eliminarse.

El minimalismo no significa tener pocas cosas.

Significa que ninguna sobra.

Misión

Conectar trabajadores independientes con personas que necesitan resolver un problema.

De forma:

rápida

segura

simple

profesional

humana

Visión

Convertirse en la plataforma de referencia para contratar trabajadores independientes en Latinoamérica.

La aplicación debe transmitir innovación sin perder cercanía.

Debe sentirse tecnológica pero accesible.

Valores
Simplicidad

Cada interacción debe requerir el menor esfuerzo mental posible.

El usuario nunca debe preguntarse:

"¿Y ahora qué hago?"

La interfaz debe responder esa pregunta por sí sola.

Rapidez

La sensación de velocidad es más importante que la velocidad real.

Por eso existen:

animaciones suaves

feedback inmediato

hover

microinteracciones

transiciones

skeletons (en el futuro)

Confianza

El usuario entrega información personal.

Por ello todo debe transmitir seguridad.

Se evita el exceso de colores.

No existen elementos estridentes.

Todo posee jerarquía visual clara.

Profesionalismo

Aunque el trabajador pueda ser un electricista, albañil o plomero, la plataforma nunca debe verse improvisada.

Debe sentirse como una aplicación de nivel internacional.

Público Objetivo
Clientes

Edad aproximada

18–70 años

Generalmente buscan resolver un problema puntual.

No quieren aprender a usar una aplicación.

Quieren abrirla y encontrar un trabajador.

Por ello:

la aplicación debe explicar poco

y mostrar mucho.

Trabajadores

Edad aproximada

18–65 años

Muchos no poseen conocimientos tecnológicos avanzados.

La interfaz debe ser extremadamente clara.

Botones grandes.

Texto legible.

Acciones evidentes.

Principio más importante

Nunca hacer pensar al usuario.

Si el usuario debe detenerse a interpretar una pantalla,

el diseño falló.

Personalidad de la Marca

Si Changa+ fuera una persona sería:

amable

rápida

moderna

confiable

optimista

cercana

elegante

Nunca sería:

infantil

corporativa

fría

agresiva

recargada

Identidad Visual

Toda la identidad visual gira alrededor de un concepto:

Profesional pero cercano.

No buscamos un estilo empresarial.

Tampoco buscamos una aplicación llena de colores.

Queremos equilibrio.

La aplicación debe sentirse:

moderna

minimalista

premium

amigable

Inspiraciones

La experiencia de usuario toma inspiración de aplicaciones como:

Spotify

Airbnb

Uber

Discord

Notion

Duolingo

LinkedIn

No se copian sus diseños.

Se toma inspiración de:

sus espacios

sus animaciones

sus transiciones

sus microinteracciones

su claridad visual

Regla Fundamental

Cada nueva pantalla debe responder esta pregunta:

"¿Un usuario que nunca abrió Changa+ entendería esta pantalla en menos de cinco segundos?"

Si la respuesta es no,

el diseño debe rehacerse.

Regla de Oro

Antes de agregar cualquier componente nuevo debe preguntarse:

¿Respeta la identidad visual?
¿Respeta los colores?
¿Respeta la tipografía?
¿Respeta las animaciones?
¿Respeta los espacios?
¿Respeta la simplicidad?

Si alguna respuesta es negativa,

el componente no debe incorporarse hasta adaptarlo al estilo del proyecto.

Design System
El objetivo del Design System

Un Design System no es una colección de colores y botones.

Es un conjunto de reglas que hacen que absolutamente toda la aplicación parezca construida por un único diseñador.

Cuando un usuario pase de Login a Chats, de Chats a Perfil o de Perfil a Publicaciones, nunca debe sentir que cambió de aplicación.

Toda la experiencia debe sentirse uniforme.

Principio Fundamental

Todos los componentes de Changa+ deben responder a cuatro características.

Claridad

El usuario debe entender inmediatamente qué puede hacer.

No existen botones ambiguos.

No existen colores sin significado.

No existen elementos decorativos innecesarios.

Consistencia

Un botón debe comportarse exactamente igual en cualquier pantalla.

Un input debe verse exactamente igual en cualquier formulario.

Una card debe mantener la misma estructura sin importar el contenido.

Espacio

El espacio vacío también comunica.

Nunca llenar una pantalla únicamente porque existe lugar disponible.

Las pantallas deben respirar.

El contenido necesita márgenes amplios.

Movimiento

Toda interacción genera una respuesta visual.

Un botón responde.

Una card responde.

Un input responde.

La interfaz nunca permanece completamente estática.

El movimiento transmite vida.

Sistema de Colores

La aplicación posee únicamente cuatro colores principales.

No deben incorporarse nuevos colores salvo que exista una razón funcional.

Naranja

Color principal del trabajador.

Representa:

actividad

energía

trabajo

movimiento

acción

Debe utilizarse para:

Header Worker

Botones principales Worker

Elementos destacados del trabajador

Call To Action del trabajador

Hover Worker

Nunca utilizar el naranja para errores.

Nunca utilizar el naranja para advertencias.

Violeta

Color principal del cliente.

Representa:

confianza

servicio

tecnología

seguridad

planificación

Debe utilizarse para:

Header Cliente

Presentation

Botones Cliente

Elementos destacados Cliente

Hover Cliente

Nunca mezclar naranja y violeta dentro del mismo módulo salvo en el branding.

Crema

Color de fondo.

Representa:

limpieza

minimalismo

comodidad visual

El usuario pasa mucho tiempo leyendo.

Por eso se evita un blanco puro.

El fondo crema reduce el cansancio visual.

Gris

El gris únicamente posee funciones auxiliares.

Separadores.

Textos secundarios.

Bordes.

Información menos importante.

Nunca debe competir con el contenido principal.

Reglas del Color

Cada pantalla posee un color dominante.

Worker → naranja.

Cliente → violeta.

Presentation → violeta.

Chats → neutro.

Configuración → neutro.

Perfil → según el rol.

Nunca utilizar ambos colores principales compitiendo por atención.

Tipografía

Toda la aplicación utiliza una única familia tipográfica.

Poppins

No utilizar otra fuente.

Toda nueva pantalla deberá utilizar Poppins.

Jerarquía Tipográfica

Logo

Muy grande.

Ligero.

Elegante.

Debe transmitir marca.

Título principal

Grande.

Peso 600–700.

Siempre visible.

Subtítulo

Peso 400.

Color ligeramente más tenue.

Debe complementar al título.

Nunca competir con él.

Texto normal

Peso 400.

Muy legible.

Nunca demasiado pequeño.

Texto secundario

Color gris.

Información adicional.

Jamás utilizarlo para acciones importantes.

Espaciado

El espaciado es una de las características más importantes de Changa+.

Se debe evitar la sensación de interfaz comprimida.

Todo componente debe respirar.

Separación entre cards

12–16 px

Separación entre secciones

20–28 px

Padding interno de cards

12–16 px

Padding general

16–24 px

Radio de Bordes

La aplicación utiliza bordes suaves.

Nunca cuadrados.

Nunca exageradamente redondos.

Cards

14–18 px

Botones

18–22 px

Inputs

16–20 px

Search Bars

18 px

Sombras

Las sombras son extremadamente suaves.

Nunca utilizar sombras oscuras.

El objetivo es generar profundidad.

No dramatismo.

Ejemplo conceptual.

Incorrecto:

Botón negro flotando.

Correcto:

Botón ligeramente elevado.

Sistema de Elevación

Nivel 0

Fondo.

Nivel 1

Cards.

Nivel 2

Botones.

Nivel 3

Elementos presionados.

Nunca utilizar más de cuatro niveles de elevación.

Sistema de Botones

Todos los botones de la aplicación deben compartir la misma personalidad.

El usuario debe reconocer inmediatamente que algo es presionable.

Botón Principal

Características.

Grande.

Ancho.

Bordes redondeados.

Hover elegante.

Microanimación.

Elevación.

Ligero efecto de brillo.

Botón Secundario

Menor protagonismo.

Generalmente transparente.

Borde visible.

No competir con el botón principal.

Botón Terciario

Texto.

Sin fondo.

Se utiliza para enlaces.

Ejemplo.

"Ver todos"

"Iniciar sesión"

Comportamiento

Hover

Ligera elevación.

Cambio muy sutil del fondo.

Movimiento vertical de aproximadamente 2 px.

Click

Ligera reducción de escala.

Aproximadamente 0.98.

Nunca desaparecer.

Nunca girar.

Nunca hacer efectos exagerados.

Microinteracciones

Cada interacción debe durar aproximadamente:

180–250 ms

Nunca superior a 400 ms.

La interfaz debe sentirse rápida.

No cinematográfica.

Introducción

Todo componente existente o futuro debe pertenecer a una misma familia visual.

El usuario nunca debe sentir que un botón pertenece a una pantalla y otro botón a otra aplicación.

La coherencia es uno de los pilares fundamentales de Changa+.

Antes de crear un componente nuevo siempre deberá verificarse si puede reutilizarse uno ya existente.

Si un componente puede reutilizarse, deberá reutilizarse.

Si no puede reutilizarse, deberá diseñarse siguiendo exactamente las mismas reglas visuales.

Botones

Los botones representan la acción principal de la aplicación.

Deben transmitir confianza.

Nunca agresividad.

Nunca verse pesados.

Nunca verse antiguos.

Botón Primario

Se utiliza para la acción más importante de cada pantalla.

Ejemplos:

Ingresar

Crear Cuenta

Publicar Trabajo

Enviar Mensaje

Guardar Cambios

Características

Gran tamaño.
Alto entre 56 y 64 px.
Bordes muy redondeados.
Tipografía semibold.
Muy fácil de presionar.
Color sólido según el módulo.

Colores

Worker

Naranja

Cliente

Violeta

Estados

Reposo

Color sólido.

Hover

Ligera elevación.

Movimiento hacia arriba.

Aumento muy pequeño de brillo.

Active

Reduce ligeramente su tamaño.

Nunca más del 2%.

Disabled

Reduce opacidad.

No elimina completamente el contraste.

Animación

Toda animación debe durar aproximadamente

200 ms

Nunca debe sentirse lenta.

Botón Secundario

Representa acciones importantes pero no principales.

Ejemplos

Cancelar

Volver

Modificar

Más información

Características

Fondo transparente.

Borde visible.

Texto destacado.

Hover muy elegante.

Botón Terciario

Generalmente es texto.

Ejemplos

Ver todos

Regístrate aquí

Olvidé mi contraseña

Nunca debe competir visualmente con un botón primario.

Inputs

Los formularios son uno de los elementos más utilizados.

Todos los inputs deben compartir exactamente la misma apariencia.

Nunca modificar un input únicamente para una pantalla.

Características

Altura aproximada

54 px

Padding horizontal amplio.

Texto perfectamente centrado verticalmente.

Placeholder gris.

Bordes suaves.

Focus

El focus es extremadamente importante.

Debe sentirse vivo.

Al hacer click

Ligero aumento de sombra.

Cambio del color del borde.

Pequeña elevación.

Jamás utilizar únicamente el borde azul por defecto del navegador.

Hover

Muy sutil.

No exagerado.

Errores

En el futuro

Todos los errores deberán mostrarse debajo del input.

Nunca mediante alert().

Nunca mediante ventanas emergentes.

Search Bar

La Search Bar es prácticamente un componente principal de la aplicación.

Aparece en:

Worker Home

Client Home

Chats

Y futuras pantallas.

Debe ser siempre la misma.

Composición

Ícono izquierdo.

Input.

Padding amplio.

Radio grande.

Borde gris.

Fondo crema claro.

Comportamiento

Hover

Ligera elevación.

Focus

Cambio de borde.

Sombra muy suave.

Cards

Las cards representan información.

Toda información importante debe vivir dentro de una card.

Características

Padding amplio.

Bordes redondeados.

Fondo ligeramente distinto al fondo general.

Borde gris claro.

Sombra extremadamente suave.

Comportamiento

Hover

Sube aproximadamente

3 px

Aumenta ligeramente la sombra.

Nunca gira.

Nunca rebota.

Nunca cambia completamente de color.

Tipos

Actualmente existen

Job Card

Professional Card

Publication Card

Chat Card

Future Notification Card

Todas comparten exactamente la misma estructura visual.

Indicadores de Estado

Los estados deben comunicarse inmediatamente.

Nunca depender únicamente del texto.

Activo

Punto verde.

Pausado

Punto rojo.

Disponible

Punto verde brillante.

No disponible

Punto gris.

Pendiente

Punto amarillo.

Estos indicadores deben mantenerse idénticos en toda la aplicación.

Avatar

El avatar debe ser extremadamente simple.

Actualmente utiliza iniciales.

En el futuro podrá utilizar fotografías.

Mientras tanto.

Círculo.

Iniciales.

Color consistente.

Texto blanco.

Chat

El chat es uno de los módulos más importantes.

Debe transmitir una sensación moderna.

Inspiraciones

WhatsApp

Messenger

Discord

Telegram

Pero sin copiar su interfaz.

Lista de chats

Cada conversación posee

Avatar

Nombre

Último mensaje

Hora

Indicador online

Cantidad de mensajes sin leer

Todo perfectamente alineado.

Conversación

Mensajes propios

Alineados a la derecha.

Color principal.

Mensajes recibidos

Izquierda.

Color neutro.

Caja de escritura

Siempre visible.

Botón enviar grande.

Preparada para integración con Socket.io.

Navbar

La Navbar inferior es el eje principal de navegación.

Debe permanecer prácticamente igual durante toda la aplicación.

Nunca modificar su estructura.

Únicamente cambiar el elemento activo.

Composición

Cinco botones.

Inicio

Buscar

Publicaciones / Solicitudes

Chats

Perfil

Comportamiento

Hover

Cambio muy suave de color.

Pequeña elevación.

Activo

Color del módulo.

Worker

Naranja.

Cliente

Violeta.

Nunca eliminar la Navbar en pantallas principales.

Headers

Todos los módulos importantes poseen un Header.

Debe existir consistencia.

Worker

Header naranja.

Cliente

Header violeta.

Presentation

Header implícito.

Todo el fondo cumple esa función.

Contenido

Logo.

Saludo.

Nombre.

Buscador.

Nunca saturar el Header.

Animaciones

Toda pantalla nueva deberá incorporar animaciones.

Sin excepción.

Entrada

Fade.

Slide.

Pequeño movimiento vertical.

Cambio entre páginas

Framer Motion.

Fade.

Slide.

Nunca cambios bruscos.

Hover

Todos los elementos interactivos responden.

Botones.

Cards.

Navbar.

Chat.

Inputs.

Links.

Duraciones

Hover

180–220 ms

Cambio de pantalla

300–450 ms

Cards

200 ms

Botones

180 ms

Nunca utilizar animaciones superiores a 600 ms salvo pantallas de carga.

Filosofía de Componentes

Antes de crear cualquier componente nuevo deben responderse estas preguntas.

¿Ya existe uno parecido?

¿Puede reutilizarse?

¿Respeta la identidad visual?

¿Respeta las animaciones?

¿Respeta la jerarquía?

¿Respeta el espaciado?

¿Respeta la filosofía minimalista?

Si alguna respuesta es negativa.

Debe rediseñarse.

Regla más importante del proyecto
Si un usuario puede reconocer que una pantalla fue desarrollada por otra persona, el componente está mal diseñado.

La mejor interfaz es aquella donde absolutamente todas las pantallas parecen haber sido creadas el mismo día, por el mismo diseñador y el mismo equipo de desarrollo.

Guía para Desarrolladores e Inteligencias Artificiales

---

# Introducción

Este documento establece las normas obligatorias para cualquier persona o inteligencia artificial que participe en el desarrollo de Changa+.

No son sugerencias.

Son estándares.

El objetivo es garantizar que la aplicación mantenga una identidad única incluso después de cientos de modificaciones.

El usuario nunca debe notar cuándo una pantalla fue desarrollada por otra persona.

Toda nueva funcionalidad debe parecer diseñada desde el primer día del proyecto.

---

# Regla Nº1

Antes de escribir una sola línea de código debe comprenderse completamente el proyecto.

Nunca comenzar a programar inmediatamente.

Siempre analizar:

• la pantalla actual

• el flujo del usuario

• el diseño existente

• los componentes reutilizables

• el comportamiento esperado

---

# Filosofía del Desarrollo

No desarrollar pantallas.

Desarrollar experiencias.

Cada pantalla existe únicamente porque ayuda al usuario a resolver un problema.

Si una funcionalidad no mejora la experiencia.

Probablemente no deba existir.

---

# Reutilización

La reutilización es obligatoria.

Antes de crear cualquier componente nuevo.

Debe verificarse:

¿Existe ya un botón similar?

¿Existe ya una Card?

¿Existe un SearchBar?

¿Existe una Navbar?

¿Existe un Input?

Si la respuesta es sí.

Debe reutilizarse.

No duplicar componentes.

---

# Arquitectura

Cada pantalla debe mantenerse independiente.

Ejemplo

/pages

Login

Register

Presentation

WorkerHome

ClientHome

ChatList

ChatRoom

Cada una con su propio CSS.

Nunca crear un único archivo CSS enorme.

---

# Componentes

Cuando un componente sea utilizado por dos o más pantallas.

Debe moverse a

/components

Ejemplos futuros

Navbar.jsx

PrimaryButton.jsx

InputField.jsx

SearchBar.jsx

ChatCard.jsx

WorkerCard.jsx

ProfessionalCard.jsx

LoadingSkeleton.jsx

NotificationCard.jsx

---

# CSS

Utilizar únicamente CSS puro.

No utilizar:

Bootstrap

Tailwind

Material UI

Ant Design

Bulma

Semantic UI

La identidad visual pertenece únicamente a Changa+.

---

# React

Siempre utilizar:

Componentes funcionales.

Hooks.

Código limpio.

Funciones pequeñas.

Nunca escribir componentes de 800 líneas.

---

# Preparación para Backend

Aunque todavía no exista backend.

Todo debe prepararse pensando en él.

Ejemplo incorrecto

const nombre = "Lucas"

Ejemplo correcto

const user = {

name:"Lucas"

}

De esta forma.

Luego simplemente se reemplaza por datos reales.

---

# Mock Data

Mientras no exista backend.

Toda información proviene de

/data

Nunca escribir datos directamente dentro del componente.

---

# Navegación

Toda navegación utiliza

React Router.

Nunca modificar rutas existentes sin actualizar toda la documentación.

---

# Animaciones

Toda pantalla nueva debe incorporar animaciones.

Sin excepción.

Utilizar Framer Motion.

No CSS Animation.

No jQuery.

No librerías innecesarias.

---

# Preparación para Socket.io

Todo el sistema de Chat deberá diseñarse pensando en tiempo real.

Aunque inicialmente utilice datos falsos.

Las estructuras deberán parecer reales.

Ejemplo.

message

sender

receiver

timestamp

status

read

attachments

---

# API

Todo acceso al backend deberá realizarse mediante

/services

Nunca hacer fetch directamente dentro de una pantalla.

Ejemplo futuro.

services

authService.js

chatService.js

workerService.js

clientService.js

notificationService.js

publicationService.js

---

# Context

Los datos globales deberán administrarse mediante Context API.

Ejemplos.

UserContext

ThemeContext

NotificationContext

SocketContext

---

# Autenticación

Toda autenticación utilizará JWT.

Nunca guardar contraseñas.

Nunca guardar información sensible en LocalStorage.

Utilizar cookies HttpOnly cuando exista backend.

---

# Base de Datos

La aplicación deberá diseñarse pensando en PostgreSQL.

No desarrollar componentes que dependan de una base específica.

---

# Código

Todo código debe ser:

Legible.

Modular.

Escalable.

Reutilizable.

Autoexplicativo.

---

# Comentarios

No comentar código obvio.

Incorrecto

// suma dos números

return a+b

Correcto

Explicar únicamente decisiones complejas.

---

# Naming

Componentes

PascalCase

WorkerHome

ChatRoom

Navbar

Variables

camelCase

selectedWorker

currentUser

chatMessages

Constantes

UPPER_CASE

MAX_UPLOAD_SIZE

DEFAULT_RADIUS

PRIMARY_COLOR

---

# Imports

Orden obligatorio

Librerías

React

Hooks

Router

Componentes

CSS

Datos

---

# Responsive

Todo desarrollo comienza para móvil.

390 px

Luego

Tablet

Finalmente

Escritorio.

Nunca al revés.

---

# Rendimiento

Evitar renders innecesarios.

Evitar componentes gigantes.

Evitar lógica repetida.

Siempre pensar en escalabilidad.

---

# Accesibilidad

Todo botón debe poder utilizarse mediante teclado.

Todo input debe tener label.

Todo icono importante debe poseer texto.

Nunca depender únicamente del color.

---

# Calidad Visual

Una IA nunca debe introducir un componente que rompa el estilo visual.

Antes de terminar una tarea debe compararse con:

Login

Register

Presentation

WorkerHome

ClientHome

Chats

Si parece pertenecer a otra aplicación.

Debe rehacerse.

---

# Checklist Obligatorio

Antes de entregar cualquier pantalla.

Verificar.

□ Respeta el Design System

□ Utiliza Poppins

□ Respeta colores

□ Tiene animaciones

□ Tiene hover

□ Tiene active

□ Es responsive

□ Está preparada para backend

□ Utiliza componentes reutilizables

□ Mantiene el mismo estilo visual

□ No rompe la identidad del proyecto

□ Código limpio

□ CSS organizado

□ Sin duplicación

□ Fácil de mantener

---

# Roadmap Técnico

Fase 1

Frontend

✔ Presentation

✔ Login

✔ Register

✔ Home Cliente

✔ Home Trabajador

✔ Chats

✔ Navegación

---

Fase 2

Backend

Express

JWT

PostgreSQL

Socket.io

---

Fase 3

Tiempo Real

Mensajes

Notificaciones

Estados Online

Escribiendo...

---

Fase 4

Sistema de Publicaciones

Publicaciones

Solicitudes

Presupuestos

Aceptación

Cancelación

---

Fase 5

Sistema de Reputación

Calificaciones

Opiniones

Ranking

Nivel

Verificación

---

Fase 6

IA

Asistente

Recomendaciones

Matching inteligente

Optimización de búsquedas

Análisis de publicaciones

---

Fase 7

Pagos

Mercado Pago

Stripe

Facturación

Comisiones

---

Fase 8

Aplicación Móvil

React Native

Android

iOS

---

# Regla Final

Toda mejora debe cumplir una condición.

Cuando un usuario vea la nueva pantalla.

Debe pensar:

"Siempre estuvo ahí."

Si puede notar que fue agregada posteriormente.

La implementación aún no está terminada.

---

# Filosofía Final

Changa+ no es una colección de pantallas.

Es una experiencia.

Cada botón.

Cada color.

Cada animación.

Cada espacio.

Cada transición.

Cada mensaje.

Cada detalle.

Debe transmitir exactamente la misma idea.

Una plataforma moderna.

Profesional.

Confiable.

Minimalista.

Elegante.

Humana.

Esa identidad nunca debe perderse.

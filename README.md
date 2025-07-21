# API REST en Node.js

## Descripción

Esta es una API REST desarrollada con **Node.js** y **Express** para la gestión de productos. Permite realizar operaciones CRUD básicas y autenticación de usuarios utilizando un servicio en la nube para persistencia de datos.

---

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone <URL-del-repositorio>
   cd <nombre-del-proyecto>

2. Instalar dependencias:

    ```bash
    npm install

2. Configurar las variables de entorno:

    ```bash
    cp .env-example .env

4. Ejecutar en modo desarrollo:

    ```bash
    npm run dev


## Documentación de la API

### Endpoints

Productos

* GET /api/products
Devuelve todos los productos.

* GET /api/products/:id
Devuelve el producto con el ID especificado.

* POST /api/products/create
Crea un nuevo producto.
Se debe enviar un objeto con los datos del producto en el cuerpo de la solicitud.

* DELETE /api/products/:id
Elimina el producto con el ID especificado.

* Autenticación
POST /auth/login
Recibe las credenciales del usuario en el cuerpo de la solicitud y, si son válidas, devuelve un Bearer Token.
En caso contrario, responde con un error de autenticación.

### Tecnologías utilizadas

Node.js

Express.js

Firebase (para persistencia y autenticación)

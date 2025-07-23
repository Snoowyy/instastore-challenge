# InstaStore Project

InstaStore is a microservice in charge of selecting the closest "convenience" store to deliver a groceries order to our B2B clients.

# Table of contents 📋

- [InstaStore Project](#instastore-project)
  - [Getting started 🚀](#getting-started-🚀)
    - [Prerequisites 🧾](#prerequisites-🧾)
    - [Installation ⚙️](#installation-⚙️)
  - [Questions and answers 📃](#questions-and-answers-📃)
  - [How it's going work 🔨](#how-its-going-work-🔨)
    - [Archiecture 🏛️](#archiecture-🏛️)
    - [Explanation 🔍](#explanation-🔍)
    - [Folder structure 📁](#folder-structure-📁)
    - [Delivery estimate - 18 May 2024 🕛](#delivery-estimate---18-may-2024-🕛)

# Getting started 🚀

## Prerequisites 🧾

- Node.js v20.0.0 or higher

## Installation and how to run ⚙️

1. Clone the repository
2. Install dependencies
3. Create a `.env` file with the following variables:

```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/instastore
DB_USER=postgres
DB_HOST=localhost
DB_NAME=instastore
DB_PASSWORD=postgres
PGPORT=5432
```

4. Run the following command to create the database and the tables:

```
npm run migrate up
```

5. Run the following command to start the server:

```
npm run dev
```

# API documentation 📝

You can find the API documentation at [https://localhost:3000/api-docs](https://localhost:3000/api-docs).


# Questions and answers 📃

* ¿Cómo se determinarán las coordenadas de ubicación del cliente al hacer la solicitud? ¿Será a través de parámetros de la solicitud (latitud y longitud) o de alguna otra manera?

```
D: Para determinar la ubicación del cliente puedes definir la aproximación que más adecuada te parezca para tu solución.
```

* ¿Se utilizará una base de datos como MongoDB o PostgreSQL?
* Si la base de datos que se puede seleccionar es PostgreSQL, ¿Puedo utilizar Postgis o existe algún problema con su uso?
* Si la base de datos que se debe utilizar es MongoDB, ¿Se tiene algun algoritmo ya base que se pueda utilizar para calcular la distancia entre la ubicación del cliente y las tiendas disponibles?

```
D: Para las preguntas 2,3 y 4; la base de datos a utilizar queda a tu completa escogencia dado el caso y necesidad que tengas en la solución que postules, puedes usar las herramientas que consideres necesarias y el modelo de datos que consideres que más se ajuste. Recomiendo que incluyas una explicación sobre las decisiones que tomaste.
```

* ¿Cómo se gestionarán los campos isOpen y nextDeliveryTime de cada tienda? ¿Se utilizará un sistema de gestión de horarios para determinar si una tienda está abierta en un momento dado?

```
D: La utilidad del campo "isOpen", como su nombre lo enuncia, permite al cliente conocer si una tienda en cuestión se encuentra abierta al público. Por otra parte, el campo de "nextDeliveryTime" puede ser visto como el siguiente espacio de tiempo donde dicha tienda puede realizar una entrega de un pedido a un cliente. Con esto, espero que puedas definir de mejor manera el diseño de tu solución.
```

# How it's going work 🔨

## Archiecture 🏛️

<br/>
<div>
    <img src="https://github.com/Snoowyy/instastore-challenge/blob/main/architecture.png" alt="Project Architecture">
</div>
<br/>

## Explanation 🔍

The project architecture is separated by layers. From the API, we will have a layer responsible for all HTTP logic (Routes, Controllers) and a business logic layer (services, models) that will handle all processing and data management, both from the database and from external processes to other services.


## Folder structure 📁
```
/project
├── /migrations
├── /src
│   ├── /middleware
│   │   └── authMiddleware.ts
│   ├── /controllers
│   │   └── storeController.ts
│   ├── /models
│   │   └── storeModel.ts
│   ├── /routes
│   │   └── storeRoutes.ts
│   ├── /services
│   │   └── storeService.ts
│   ├── /config
│   │   └── database.ts
│   ├── /utils
│   │   └── logger.ts
│   ├── app.ts
│   └── server.ts
├── .env
├── migrate.config.ts
├── package.json
└── tsconfig.json
```
## Improvements and trade offs 📈

1. What would you improve from your code? why?

    - [ ] Add unit tests
    - [ ] Add more error handling
    - [ ] Use a more robust ORM
    - [ ] Use a more robust authentication middleware
    - [ ] Use a more robust rate limiting service
    - [ ] Use a more robust caching service
    - [ ] Use a more robust monitoring service
    - [ ] Use a more robust error tracking service

2. Which trade offs would you make to accomplish this on time? What'd you do next time to deliver more and sacrifice less?

    Para este caso en concreto no se requiere que se implemente un sistema de gestión de horarios, pero si se quiere implementar, se debe considerar que la base de datos de PostgreSQL no es el más eficiente para este tipo de tareas. En este caso, se podría considerar utilizar un motor de base de datos como MongoDB, que son más eficientes para tareas de gestión de horarios y otras tareas relacionadas con la gestión de datos.

    Para una proxima ocasion por ejemplo si se requeriera un sistema de gestión de horarios, se podría considerar utilizar un sistema de gestión de horarios como Airtable, que es una herramienta de gestión de datos muy popular y fácil de usar.

3. Do you think your service is secure? why?

    En este momento se tiene un middleware de autenticación que verifica si el token de acceso es válido consultando una API de autenticación externa.

    Si bien no es la mejor manera de validar el token, se puede considerar que la implementación actual es suficiente para el proyecto en cuestión.

4. What would you do to measure the behavior of your product in a production environment?
  To make sure and measure the performance of the application in a production environment, I would use tools like:
    - [ ] Datadog
    - [ ] New Relic
    - [ ] Lightstep
  

## Delivery estimate - 18 May 2024 🕛

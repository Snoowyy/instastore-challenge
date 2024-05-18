# InstaStore Project

InstaStore is a microservice in charge of selecting the closest "convenience" store to deliver a groceries order to our B2B clients.

## Questions and answers

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

## How it's going work

### Archiecture

<br/>
<div>
    <img src="https://github.com/Snoowyy/instastore-challenge/blob/main/architecture.png" alt="Project Architecture">
</div>
<br/>

### Explain

The project architecture is separated by layers. From the API, we will have a layer responsible for all HTTP logic (Routes, Controllers) and a business logic layer (services, models) that will handle all processing and data management, both from the database and from external processes to other services.

### Delivery estimate - 18 May 2024

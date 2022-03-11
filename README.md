# micrapp_backend

## Instalación

Para poder instalar la aplicación primero se debe crear una base de datos y se debe llenar con el script [micrapp_server.sql](docs/micrapp_server.sql)

Debe modificar el archivo [config.js](config/config.js) con las credenciales y el nombre de la base de datos para que la API tenga acceso a dicha base de datos.

Modifique el archivo [server.js](server.js) para poner el puerto en el que estará corriendo la API.

Ejecute el siguiente comando para instalar las dependencias
```
$ npm i
```

Ejecute el siguiente comando para ejecutar el servidor con nodemon
```
$ npm run dev
```

O el siguiente comando para ejecutar el servidor en modo producción
```
$ npm start
```

## Instalación con Docker

Ejecute el siguiente comando para crear la imagen del 
```
$ docker build -t micrapp_backend:latest .
```

Modifique el archivo [docker-compose.yaml](docker-compose.yaml) para poder llenar los datos necesarios para crear la base de datos y conectarla con la API.

Ejecute el siguiente comando para 
```
$ docker-compose up -d
```

(-d sirve para que los contenedores, también llamados servicios, se ejecuten en segundo plano)

## Campos

Los campos que pide la API del frontend tienen los mismos nombres que en la base de datos.

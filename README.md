# Postres

## Autor

- Fiamma Belén Andreozzi
- 44416819
- fbelen.andreozzi@gmail.com
- Tandil


# Postres

Para el proyecto del Seminario de Angular 2024 de la UNICEN Exactas, realicé una página para la compra de postres. 


## API
Se utilizó Mockapi. 
**API URL**: https://6689838e0ea28ca88b8835ca.mockapi.io/api/desserts/desserts

#### Obtener todos los postres

```http
  GET /api/desserts/desserts
```
## Características

- **Ruteo**: visibilidad del home, otro y otro más.
- **Componentes**: home incluye dos componentes interconectados a través de un tercer componente.
- **Interfaces**: utilizadas para la creación de los postres.
- **Directivas y controles de flujo**: for e if utilizados, por ejemplo, para mostrar cada postre y para mostrar la oferta en aquellos que lo tengan. 
- **Comunicación entre componentes**: utilizado para el input.
- **Servicios**: consumo de una MockAPI con la lista de productos.

## Servidor de desarrollo

Utiliza `ng serve` para el servidor de desarrollo. En el navegador utiliza `http://localhost:4200/` para visualizar. Se actualizará automáticamente si haces algún cambio

El proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

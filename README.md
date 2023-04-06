# React - Microfrontend Starter

En este ejemplo se muestra el consumo de módulos federados (Module Federation) desde un paquete de vite.

El `Host` depende de un componente `Remote` (Ambos basados en react) servido externamente.

## Ejecución

Primero, ejecute `pnpm install`, luego `pnpm run build` y `pnpm run serve`. Esto construirá y servirá tanto la aplicación `Host` como la `Remote` en los puertos 5000 y 5001 respectivamente.

- HOST: [localhost:5000](http://localhost:5000/)
- REMOTE: [localhost:5001](http://localhost:5001/)

## Desarrollo

Basta con realizar una ejecución del comando `pnpm build` y `pnpm run serve` en el componente en el que se han realizado los cambios para que se vean reflejados en el `Host` tras recargar la página.

## Detener

Para detener todas las ejecuciones ejecute `pnpm stop`.
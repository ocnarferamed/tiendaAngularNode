## Para iniciar se debe restaurar la base datos .
(los usuarios se pueden crear en /signup)

```
en el directorio donde esta la carpeta /dump ingresar :
mongorestore --db tiendaNext dump/tiendaNext

luego  desde la carpeta /VERSION_ANGULAR ingresar :
node api/index

finalmente , desde la carpeta /frontend/client :
ng serve.

abrir el navegador en  localhost:4200.
```
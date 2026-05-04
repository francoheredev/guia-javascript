1. ¿Qué se muestra primero?
Se muestra: "Local".

2. ¿Qué se muestra después?
Se muestra: "Global".

3. ¿Por qué?
Por la diferencia entre Scope Local y Scope Global:

Al llamar a la función, esta busca la variable nombre dentro de su propio bloque. Como encuentra una declarada ahí mismo (let nombre = "Local"), usa esa y la muestra.

El console.log de afuera no tiene acceso a lo que pasa dentro de la función. Por lo tanto, solo puede ver la variable declarada en el entorno global.

Importante: Aunque se llaman igual, son dos variables distintas porque viven en "mundos" (scopes) diferentes.
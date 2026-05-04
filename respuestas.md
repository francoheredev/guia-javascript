Respuestas sobre Variables en JavaScript
1. ¿Cuándo usarías let?
Usaría let para declarar variables cuyo valor sabemos que va a cambiar durante la ejecución del código. Es ideal para contadores en bucles (for), acumuladores de puntaje o variables que dependen de una condición lógica que puede variar. Su principal ventaja es que tiene "alcance de bloque", es decir, solo vive dentro de las llaves {} donde se declaró.

2. ¿Cuándo usarías const?
Usaría const para la gran mayoría de las declaraciones. Se usa para valores que no necesitan ser reasignados, como referencias a elementos del HTML (DOM), URLs de bases de datos o configuraciones fijas. Usar const por defecto hace que el código sea más seguro y fácil de leer, ya que garantiza que esa variable no va a cambiar de identidad accidentalmente.

3. ¿Por qué actualmente se recomienda evitar var?
Se recomienda evitar var porque su comportamiento es antiguo y propenso a errores (bugs). Los motivos principales son:

Problemas de Scope: A diferencia de let y const, var no respeta el alcance de bloque. Si declarás un var dentro de un if, la variable sigue existiendo fuera de él, lo que puede causar conflictos de nombres.

Hoisting: JavaScript "eleva" las declaraciones var al principio del código, permitiendo usarlas antes de definirlas, lo cual es muy confuso.

Redeclaración: var permite declarar la misma variable dos veces en el mismo lugar sin dar error, lo que facilita pisar datos importantes sin darse cuenta.
/**
 * DATOS CURRICULARES Y PROGRAMACIÓN DIDÁCTICA
 * Módulo: Fundamentos de Programación (2º SMR)
 * Centro: CIFP Carlos III (Cartagena)
 * Profesora: Virginia Zornoza Martínez
 * Total horas: 36 horas lectivas (Sesiones de 1h)
 */

const CURRICULO_DATA = {
  info: {
    modulo: "Fundamentos de Programación",
    ciclo: "Sistemas Microinformáticos y Redes (SMR)",
    nivel: "Formación Profesional de Grado Medio (2º Curso)",
    horas_totales: 36,
    horas_ev1: 26,
    horas_ev2: 10,
    profesora: "Virginia Zornoza Martínez",
    centro: "CIFP Carlos III",
    localidad: "Cartagena (Murcia)",
    curso_academico: "2026 - 2027",
    password_docente_default: "carlos3fp",
    contexto: {
      alumnado: "Los alumnos proceden principalmente de la ciudad de Cartagena, pero también de otras pedanías o municipios que, en algún caso, quedan distantes y requieren desplazamientos con transporte público que no siempre tiene la disponibilidad deseable. La vía de acceso principal es el bachillerato, si bien es frecuente contar con alumnos que han terminado otro ciclo formativo de grado superior de la misma familia, así como trabajadores activos que usan esta titulación como formación continua.",
      entorno: "Área industrial, tecnológica, naval y de servicios de Cartagena y la Región de Murcia. El perfil técnico de SMR requiere competencias sólidas en scripting, automatización de sistemas, soporte técnico y comprensión de lógica de programación aplicada.",
      normativa: [
        "Ordenación del sistema de formación profesional: Real Decreto 659/2023, de 18 de julio.",
        "Título: Real Decreto 1691/2007, de 14 de diciembre (modificado por Real Decreto 499/2024, de 21 de mayo).",
        "Currículo autonómico: Orden 4737/2026, de 25 de septiembre.",
        "Instrucciones de organización de ciclos formativos: Resolución de 4 de agosto de 2026 de la Dirección General de Formación Profesional, Enseñanzas de Régimen Especial y Educación Permanente (curso 2026-2027)."
      ],
      competencia_general: "Instalar, configurar y mantener sistemas microinformáticos, aislados o en red, así como redes locales en pequeños entornos, asegurando su funcionalidad y aplicando protocolos de calidad, seguridad y respeto al medio ambiente establecidos (RD 1691/2007, Art. 4).",
      competencias_modulo: [
        { letra: "m", texto: "Organizar y desarrollar el trabajo asignado manteniendo unas relaciones profesionales adecuadas en el entorno de trabajo." },
        { letra: "n", texto: "Mantener un espíritu constante de innovación y actualización en el ámbito del sector informático." },
        { letra: "ñ", texto: "Utilizar los medios de consulta disponibles, seleccionando el más adecuado en cada caso, para resolver en tiempo razonable supuestos no conocidos y dudas profesionales." },
        { letra: "o", texto: "Aplicar los protocolos y normas de seguridad, calidad y respeto al medio ambiente en las intervenciones realizadas." },
        { letra: "p", texto: "Cumplir con los objetivos de la producción, colaborando con el equipo de trabajo y actuando conforme a los principios de responsabilidad y tolerancia." },
        { letra: "r", texto: "Resolver problemas y tomar decisiones individuales siguiendo las normas y procedimientos establecidos definidos dentro del ámbito de su competencia." },
        { letra: "s", texto: "Ejercer sus derechos y cumplir con las obligaciones derivadas de las relaciones laborales, de acuerdo con lo establecido en la legislación vigente." },
        { letra: "v", texto: "Participar de forma activa en la vida económica, social y cultural, con una actitud crítica y responsable." }
      ],
      objetivos_generales: [
        { letra: "i", texto: "Interpretar y seleccionar información para elaborar documentación técnica y administrativa." },
        { letra: "l", texto: "Detectar y analizar cambios tecnológicos para elegir nuevas alternativas y mantenerse actualizado dentro del sector." },
        { letra: "ñ", texto: "Valorar las actividades de trabajo en un proceso productivo, identificando su aportación al proceso global para conseguir los objetivos de la producción." },
        { letra: "q", texto: "Reconocer sus derechos y deberes como agente activo en la sociedad, analizando el marco legal que regula las condiciones sociales y laborales para participar como ciudadano democrático." }
      ],
      actividades_extraescolares: [
        { fecha: "Final 1er Trimestre", evento: "Visita técnica a las instalaciones de Ática (Desarrollo y Sistemas)." },
        { fecha: "4 de marzo de 2027", evento: "Visita a la competición autonómica Murcia Skills, apoyando a la delegación del centro." },
        { fecha: "12 de mayo de 2027", evento: "Olimpiada Informática de la Región de Murcia." },
        { fecha: "12 de mayo de 2027", evento: "Concurso Regional de Modding." },
        { fecha: "12 de mayo de 2027", evento: "Competición y evento C3Gamer." }
      ],
      memoria_curso_anterior: "Las tareas se harán más concretas y en algunos casos, los exámenes serán a papel con preguntas cortas a completar con código. Se mantiene JavaScript como lenguaje principal del módulo por su versatilidad en scripting, soporte nativo multiplataforma y relación con entornos web y Node.js."
    },
    resultados_aprendizaje: [
      {
        id: "RA1",
        unidad: "UT1",
        peso: 20,
        critico_empresa: false,
        titulo: "Reconoce la estructura de un programa informático, identificando y relacionando los elementos propios del lenguaje de programación utilizado.",
        criterios: [
          { letra: "a", texto: "Se han identificado los bloques que componen la estructura de un programa informático." },
          { letra: "b", texto: "Se han creado proyectos de desarrollo de aplicaciones." },
          { letra: "c", texto: "Se han utilizado entornos integrados de desarrollo." },
          { letra: "d", texto: "Se han identificado los distintos tipos de variables y la utilidad específica de cada uno." },
          { letra: "e", texto: "Se ha modificado el código de un programa para crear y utilizar variables." },
          { letra: "f", texto: "Se han creado y utilizado constantes y literales." },
          { letra: "g", texto: "Se han clasificado, reconocido y utilizado en expresiones los operadores del lenguaje." },
          { letra: "h", texto: "Se ha comprobado el funcionamiento de las conversiones de tipo." }
        ]
      },
      {
        id: "RA2",
        unidad: "UT3",
        peso: 30,
        critico_empresa: false,
        titulo: "Escribe y prueba programas sencillos, reconociendo y aplicando los fundamentos de la programación.",
        criterios: [
          { letra: "a", texto: "Se han identificado los fundamentos de la programación." },
          { letra: "b", texto: "Se han escrito programas simples." },
          { letra: "c", texto: "Se han utilizado métodos/funciones." },
          { letra: "d", texto: "Se han utilizado parámetros en la llamada métodos." },
          { letra: "e", texto: "Se han incorporado y utilizado librerías." },
          { letra: "f", texto: "Se ha comentado y documentado el código." }
        ]
      },
      {
        id: "RA3",
        unidad: "UT2",
        peso: 35,
        critico_empresa: true,
        titulo: "Escribe y depura código, analizando y utilizando las estructuras de control del lenguaje.",
        criterios: [
          { letra: "a", texto: "Se ha escrito y probado código que haga uso de estructuras de selección." },
          { letra: "b", texto: "Se han utilizado estructuras de repetición." },
          { letra: "c", texto: "Se han reconocido las posibilidades de las sentencias de salto." },
          { letra: "d", texto: "Se ha escrito código utilizando control de excepciones." },
          { letra: "e", texto: "Se han creado programas ejecutables utilizando diferentes estructuras de control." },
          { letra: "f", texto: "Se han probado y depurado los programas." }
        ]
      },
      {
        id: "RA4",
        unidad: "UT4",
        peso: 10,
        critico_empresa: false,
        titulo: "Realiza operaciones de entrada y salida de información utilizando ficheros usando las librerías que ofrece el lenguaje de programación.",
        criterios: [
          { letra: "a", texto: "Se ha utilizado la consola para realizar operaciones de entrada y salida de información." },
          { letra: "b", texto: "Se han aplicado formatos en la visualización de la información." },
          { letra: "c", texto: "Se han reconocido las posibilidades de entrada / salida del lenguaje y las librerías asociadas." },
          { letra: "d", texto: "Se han utilizado ficheros para almacenar y recuperar información." },
          { letra: "e", texto: "Se han creado programas que utilicen ficheros en distintos formatos." }
        ]
      },
      {
        id: "RA5",
        unidad: "UT4",
        peso: 5,
        critico_empresa: false,
        titulo: "Gestiona información almacenada en bases de datos relacionales manteniendo la integridad y la consistencia de los datos.",
        criterios: [
          { letra: "a", texto: "Se han identificado las características y métodos de acceso a sistemas gestores de bases de datos relacionales." },
          { letra: "b", texto: "Se han programado conexiones con bases de datos." },
          { letra: "c", texto: "Se ha escrito código para almacenar, borrar y modificar información en bases de datos." },
          { letra: "d", texto: "Se han creado programas para recuperar y mostrar información almacenada en bases de datos." },
          { letra: "e", texto: "Se han creado aplicaciones que ejecuten consultas sobre bases de datos." }
        ]
      }
    ],
    evaluacion_reglas: {
      instrumentos: [
        { nombre: "Pruebas objetivas (exámenes teórico-prácticos)", peso: 60, nota_minima: "5.0 / 10 puntos por cada RA para promediar" },
        { nombre: "Tareas individuales de programación", peso: 30, nota_minima: "Entrega en plazo con memoria técnica" },
        { nombre: "Cuestionarios en plataforma e-learning", peso: 10, nota_minima: "Superación de batería objetiva" }
      ],
      asistencia_limite_faltas: {
        ev1: { horas_lectivas: 26, max_faltas: 8, porcentaje: "30%" },
        ev2: { horas_lectivas: 10, max_faltas: 3, porcentaje: "30%" }
      },
      regla_aprobado: "Para aprobar la Fase de Centro se deben superar todos los RAs (o como máximo quedar 1 no crítico). La no superación de un RA crítico (como RA3) o 2 no críticos limita la nota global a 4.",
      ponderacion_empresa: "Nota Final = (Fase Centro × 90%) + (Fase Empresa FEM2 × 10%). Si FEM2 no se supera, la nota de centro queda en estado provisional."
    }
  },

  unidades: [
    {
      id: "ut1",
      numero: 1,
      titulo: "INTRODUCCIÓN A LA PROGRAMACIÓN",
      ra: "RA1 (CE1*)",
      horas: 10,
      evaluacion: 1,
      descripcion: "Fundamentos algorítmicos, representación mediante pseudocódigo, diagramas de flujo, tablas de decisión, Scratch para pensamiento computacional, tipos de datos, variables y entorno JavaScript en Visual Studio Code.",
      icon: "code"
    },
    {
      id: "ut2",
      numero: 2,
      titulo: "ESTRUCTURAS DE CONTROL",
      ra: "RA3 (CE3*) - RA Crítico",
      horas: 10,
      evaluacion: 1,
      descripcion: "Lógica condicional (if, if-else, switch), bucles iterativos (while, do-while, for), sentencias de control y salto, manejo robusto de excepciones (try-catch-finally, throw) y depuración en DevTools.",
      icon: "git-branch"
    },
    {
      id: "ut3",
      numero: 3,
      titulo: "FUNCIONES Y ESTRUCTURAS DE DATOS",
      ra: "RA2 (CE2*)",
      horas: 6,
      evaluacion: 1,
      descripcion: "Modularidad del código, definición y llamadas a funciones, paso de parámetros, retorno de datos, arrow functions, arrays dinámicos, objetos literales y documentación técnica mediante JSDoc.",
      icon: "box"
    },
    {
      id: "ut4",
      numero: 4,
      titulo: "FICHEROS Y BASES DE DATOS",
      ra: "RA4 y RA5 (CE4* y CE5*)",
      horas: 10,
      evaluacion: 2,
      descripcion: "Persistencia de datos: entrada/salida formateada, gestión de ficheros con Node.js (TXT, JSON, CSV), sistemas gestores de bases de datos relacionales, lenguaje SQL (DDL y DML) y conexión desde JavaScript.",
      icon: "database"
    }
  ],

  // 36 SESIONES DE 1 HORA DETALLADAS
  sesiones: [
    // ==========================================
    // UT1: INTRODUCCIÓN A LA PROGRAMACIÓN (10h)
    // ==========================================
    {
      id: "s01",
      numero: 1,
      ut: 1,
      evaluacion: 1,
      titulo: "Presentación del Módulo, Programación Didáctica y Conceptos Iniciales",
      subtema: "1.1 Introducción",
      ras: "RA1 (CE1.a)",
      duracion: "1 hora",
      tipo: "Teórico-Metodológica",
      objetivos: [
        "Comprender la programación didáctica, criterios de calificación y calendario del curso.",
        "Asimilar el concepto de algoritmo, programa y lenguaje informático en el entorno de SMR.",
        "Conocer las normas de evaluación continua (límite de 8 faltas en 1ª Ev) y el uso de Moodle."
      ],
      teoria: `
### 1. Presentación del Módulo
¡Bienvenidos al módulo de **Fundamentos de Programación** de 2º curso de Sistemas Microinformáticos y Redes en el CIFP Carlos III!
El perfil del técnico en SMR no solo instala hardware y configura redes: en las empresas actuales de Cartagena y comarca, un técnico necesita crear **scripts de automatización**, resolver incidencias mediante lógica estructurada y comunicarse eficazmente con bases de datos y servicios web.

### 2. Estructura de un Programa Informático
Un programa es una secuencia ordenada de instrucciones ejecutables por una máquina para procesar una entrada de datos (*Input*), realizar un procesamiento (*Process*) y producir un resultado (*Output*).
- **Entrada (Input):** Datos recibidos desde teclado, red, ficheros o sensores.
- **Procesamiento:** Operaciones aritmético-lógicas, almacenamiento en memoria y toma de decisiones.
- **Salida (Output):** Visualización en pantalla, almacenamiento en disco o envío por red.

### 3. Compromisos y Normativa
- Módulo estructurado en **36 horas lectivas** (26h en la 1ª Evaluación y 10h en la 2ª Evaluación).
- Límite de faltas para conservar la evaluación continua: **8 faltas en 1ª Ev** y **3 faltas en 2ª Ev** (30% máximo).
      `,
      practica: `
**Actividad 1.1 en el aula:**
1. Acceder al curso en la plataforma Moodle del CIFP Carlos III.
2. Descargar la guía del alumno y verificar los criterios de calificación.
3. Responder en el foro de presentación: ¿Has tenido experiencia previa programando (Scratch, Arduino, HTML/JS o scripts bash)? ¿Qué esperas automatizar en tu futuro trabajo como técnico?
      `,
      solucion: "Participación registrada en el foro del aula virtual con la reflexión inicial sobre la programación en entornos SMR.",
      recursos: ["Plataforma Moodle CIFP Carlos III", "Reglamento de Régimen Interior", "Normativa RD 659/2023"]
    },
    {
      id: "s02",
      numero: 2,
      ut: 1,
      evaluacion: 1,
      titulo: "Datos, Variables, Constantes y Operadores Fundamentales",
      subtema: "1.2 Datos, algoritmos y programas",
      ras: "RA1 (CE1.d, CE1.e, CE1.f, CE1.g)",
      duracion: "1 hora",
      tipo: "Teórico-Práctica",
      objetivos: [
        "Diferenciar tipos de datos primitivos: numéricos, cadenas de texto (strings) y booleanos.",
        "Aprender a declarar variables (\`let\`) y constantes (\`const\`) con nombres descriptivos.",
        "Aplicar operadores aritméticos (+, -, *, /, %) y de comparación (===, !==, <, >)."
      ],
      teoria: `
### Tipos de Datos Primitivos
1. **Number:** Números enteros o decimales (\`let puerto = 8080;\`, \`let temperatura = 23.5;\`).
2. **String:** Cadenas de caracteres delimitadas por comillas simples, dobles o backticks (\`let host = "servidor.carlos3.es";\`).
3. **Boolean:** Valores lógicos de verdad (\`let redActiva = true;\`, \`let bloqueo = false;\`).
4. **Undefined / Null:** Representan ausencia de valor o variable no inicializada.

### Declaración de Variables: \`let\` vs \`const\`
- **\`const\` (Constante):** Se usa por defecto siempre que el valor no vaya a reasignarse. Evita mutaciones accidentales.
- **\`let\` (Variable):** Se utiliza cuando el valor cambiará durante el flujo del algoritmo (contadores, acumuladores).
- *Regla de oro:* ¡Evitar el uso de \`var\` por su ámbito de elevación (hoisting) confuso!

\`\`\`javascript
const MAX_CONEXIONES = 100;
let usuariosConectados = 12;
usuariosConectados = usuariosConectados + 1; // Correcto
// MAX_CONEXIONES = 200; // Error: TypeError
\`\`\`
      `,
      practica: `
**Ejercicio en consola del navegador (F12):**
Crea variables para almacenar la configuración de red de un equipo microinformático del CIFP Carlos III:
- Dirección IP (cadena constante)
- Máscara de subred (cadena constante)
- Memoria RAM disponible en GB (número variable)
- Servidor DHCP activo (booleano)
Calcula el porcentaje de RAM ocupada si el sistema tiene instalados 16 GB y se están utilizando 6.4 GB.
      `,
      solucion: `
\`\`\`javascript
const ip = "192.168.1.45";
const mascara = "255.255.255.0";
const ramTotalGB = 16;
let ramUsadaGB = 6.4;
let dhcpActivo = true;

let porcentajeUso = (ramUsadaGB / ramTotalGB) * 100;
console.log("RAM usada: " + porcentajeUso + "%"); // Muestra 40%
\`\`\`
      `,
      recursos: ["Consola de desarrollador del navegador (F12)", "Hoja de referencia de operadores JavaScript"]
    },
    {
      id: "s03",
      numero: 3,
      ut: 1,
      evaluacion: 1,
      titulo: "Algoritmos y Pseudocódigo: Ejercicio Calculadora 4 Operaciones",
      subtema: "1.2 Datos, algoritmos y programas. Pseudocódigo",
      ras: "RA1 (CE1.a, CE1.e, CE1.g)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      interactivo: "calculadora_pseudocodigo",
      objetivos: [
        "Escribir algoritmos legibles y precisos utilizando pseudocódigo en español estructurado.",
        "Implementar el ejercicio oficial: pedir 2 números, permitir elegir entre 4 operaciones (+, -, *, /) y mostrar el resultado.",
        "Gestionar casos especiales como la división entre cero."
      ],
      teoria: `
### ¿Qué es el Pseudocódigo?
El pseudocódigo es un lenguaje intermedio entre el lenguaje humano y el de programación. No depende de la sintaxis estricta de un compilador, sino que permite centrarse en la **lógica del algoritmo**.

### Estructura formal:
\`\`\`text
Algoritmo CalculadoraBasica
    // 1. Declaración e inicialización
    Definir num1, num2, resultado Como Real
    Definir operacion Como Entero

    // 2. Entrada de datos
    Escribir "Introduce el primer número:"
    Leer num1
    Escribir "Introduce el segundo número:"
    Leer num2

    // 3. Selección de operación
    Escribir "Elige operación: 1.Suma | 2.Resta | 3.Multiplicación | 4.División"
    Leer operacion

    // 4. Procesamiento
    Segun operacion Hacer
        1: resultado <- num1 + num2
        2: resultado <- num1 - num2
        3: resultado <- num1 * num2
        4: 
           Si num2 != 0 Entonces
               resultado <- num1 / num2
           Sino
               Escribir "Error: No se puede dividir entre cero."
           FinSi
        De Otro Modo:
           Escribir "Operación no válida."
    FinSegun

    // 5. Salida de datos
    Escribir "El resultado final es: ", resultado
FinAlgoritmo
\`\`\`
      `,
      practica: `
**Ejercicio guiado:**
1. Copia y analiza el pseudocódigo de la calculadora en tu cuaderno/editor.
2. Ejecuta la herramienta interactiva de calculadora integrada en esta web.
3. Prueba introducir 10 y 0 con la operación de división para comprobar el control del error.
      `,
      solucion: "El algoritmo valida num2 !== 0 antes de realizar la división evitando valores infinitos o excepciones.",
      recursos: ["Herramienta interactiva de Pseudocódigo embebida", "PSeInt Software (opcional)"]
    },
    {
      id: "s04",
      numero: 4,
      ut: 1,
      evaluacion: 1,
      titulo: "Diagramas de Flujo (Ordinogramas): Simbología Específica y Ejercicio Oficial",
      subtema: "1.2 Pseudocódigo, Diagramas de flujo y tablas de decisión",
      ras: "RA1 (CE1.a, CE1.b)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      interactivo: "diagrama_flujo",
      objetivos: [
        "Identificar con exactitud la forma geométrica normalizada para cada función algorítmica: Escribir, Leer, Decidir, Procesar, Inicio y Fin.",
        "Diferenciar el símbolo de Salida/Escribir (rectángulo con base ondulada) frente al símbolo de Entrada/Leer (paralelogramo).",
        "Diseñar e interpretar el diagrama de flujo estándar: Determinación de número par o impar mediante 'num MOD 2'."
      ],
      teoria: `
### Simbología Normalizada en Diagramas de Flujo (ISO / ANSI)
En el diseño formal de algoritmos es crítico **no confundir las formas geométricas**, pues cada una posee un significado funcional estricto:

1. **Inicio y Fin (Terminador):**
   - **Forma:** Rectángulo con esquinas redondeadas u óvalo.
   - **Función:** Marca de manera unívoca el punto de arranque y de finalización del programa.

2. **Escribir / Mostrar (Salida):**
   - **Forma:** Rectángulo con la base inferior ondulada (símbolo de visualización/documento).
   - **Función:** Envío de información al usuario, visualización por pantalla o generación de salida impresa (ej: *"Introduce un número entero"*, *"El número es par"*).

3. **Leer (Entrada):**
   - **Forma:** Paralelogramo inclinado.
   - **Función:** Captura de datos o variables introducidas desde teclado, red o periféricos (ej: \`num\`).

4. **Procesar (Cálculo / Asignación):**
   - **Forma:** Rectángulo estándar con bordes rectos.
   - **Función:** Ejecución de cálculos aritmético-lógicos, fórmulas y asignación de memoria (ej: \`par = num MOD 2\`).

5. **Decidir (Condición):**
   - **Forma:** Rombo.
   - **Función:** Evaluación de una proposición booleana con bifurcación de caminos (ramas **Sí** y **No**, ej: \`¿par = 0?\`).

6. **Líneas de Flujo:**
   - Flechas continuas que determinan el sentido de avance estricto del programa.

---

### Ejemplo de Referencia Oficial: Algoritmo Par / Impar
*Enunciado:* Diseñar un diagrama de flujo que pida un número entero al usuario, calcule el resto de su división entre 2 (\`num MOD 2\`) y determine si es par o impar:
- **Paso 1:** [Inicio] (Rectángulo redondeado).
- **Paso 2:** [Escribir: "Introduce un número entero"] (Rectángulo con base inferior ondulada).
- **Paso 3:** [Leer: num] (Paralelogramo inclinado).
- **Paso 4:** [Procesar: par = num MOD 2] (Rectángulo recto).
- **Paso 5:** [Decidir: ¿par = 0?] (Rombo de decisión).
  - *Rama Sí:* [Escribir: "El número es par"] (Base ondulada).
  - *Rama No:* [Escribir: "El número es impar"] (Base ondulada).
- **Paso 6:** [Fin] (Rectángulo redondeado).
      `,
      practica: `
**Actividad en clase (Papel y Simulador Web):**
1. Dibuja a mano en papel cuadriculado el diagrama de flujo oficial para el cálculo de par/impar, asegurando trazar correctamente:
   - Los rectángulos redondeados para **Inicio** y **Fin**.
   - Los rectángulos con la **base ondulada** para los mensajes de **Escribir**.
   - El **paralelogramo** para la lectura de **num**.
   - El **rectángulo recto** para el cálculo \`par = num MOD 2\`.
   - El **rombo** para la pregunta condicional \`¿par = 0?\`.
2. Prueba diferentes valores (números pares, impares y negativos) en el simulador interactivo integrado más abajo para observar la animación del flujo.
      `,
      solucion: "Diagrama estructurado idéntico al modelo pedagógico de referencia: Inicio -> Escribir (ondulado) -> Leer (paralelogramo) -> Procesar (rectángulo) -> Rombo (¿par = 0?) -> Ramas Sí / No -> Escribir (ondulado) -> Fin.",
      recursos: ["Simulador interactivo de Diagrama de Flujo oficial", "Plantilla de simbología ISO", "assets/diagrama_par_impar.png"]
    },
    {
      id: "s05",
      numero: 5,
      ut: 1,
      evaluacion: 1,
      titulo: "Tablas de Decisión Binarias: Lógica Booleana y Casos Múltiples",
      subtema: "1.2 Tablas de decisión binarias",
      ras: "RA1 (CE1.a, CE1.g)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      interactivo: "tabla_decision",
      objetivos: [
        "Comprender la estructura de una tabla de decisión: Condiciones, Acciones y Reglas.",
        "Calcular el número total de combinaciones binarias posibles ($2^n$).",
        "Resolver un caso real de soporte microinformático: Conexión a Internet y Fallo de Tarjeta de Red."
      ],
      teoria: `
### ¿Qué es una Tabla de Decisión?
Es una herramienta visual y matricial que permite modelar problemas complejos con múltiples condiciones lógicas booleanas simultáneas (Verdadero/Falso, Sí/No).

### Componentes:
- **Cuadrante de Condiciones:** Preguntas o estados lógicos a evaluar.
- **Cuadrante de Acciones:** Acciones técnicas que deben ejecutarse.
- **Reglas (Columnas R1, R2, R3...):** Cada combinación de respuestas y sus acciones resultantes. Si hay $n$ condiciones binarias, existen $2^n$ reglas posibles.

### Ejemplo de Soporte Técnico en el CIFP Carlos III:
- **Condición 1 (C1):** ¿El cable de red está conectado? (S/N)
- **Condición 2 (C2):** ¿Tiene asignada dirección IP válida? (S/N)
- **Acciones:**
  - A1: Conectar cable de red al switch.
  - A2: Renovar concesión DHCP (\`ipconfig /renew\`).
  - A3: Navegación operativa.
      `,
      practica: `
**Ejercicio en el aula:**
Construye la tabla de decisión de 4 reglas ($2^2$) para el supuesto anterior. Rellena las marcas (X) de las acciones correspondientes a cada regla.
      `,
      solucion: "R1 (S,S -> A3), R2 (S,N -> A2), R3 (N,S -> caso anómalo, verificar cable), R4 (N,N -> A1, verificar tarjeta).",
      recursos: ["Simulador interactivo de Tablas de Decisión"]
    },
    {
      id: "s06",
      numero: 6,
      ut: 1,
      evaluacion: 1,
      titulo: "Scratch Básico: Programación Visual por Bloques y Coordenadas",
      subtema: "1.8 Scratch",
      ras: "RA1 (CE1.a, CE1.b, CE1.c)",
      duracion: "1 hora",
      tipo: "Taller Práctico en Aula Informática",
      objetivos: [
        "Conocer el entorno de Scratch: escenario, coordenadas cartesianas (X, Y) y paleta de bloques.",
        "Implementar bucles continuos (bloque por siempre) y captura de eventos de teclado.",
        "Comprender cómo los bloques visuales se corresponden con código real estructurado."
      ],
      teoria: `
### ¿Por qué Scratch en SMR?
Scratch permite asimilar el **pensamiento computacional** sin la frustración de los errores sintácticos (como olvidar un punto y coma o cerrar una llave). Los conceptos que aprendemos aquí (eventos, bucles, condiciones y detección de colisiones) son idénticos a los que usaremos en JavaScript.

### Coordenadas del Escenario en Scratch:
- El centro es \`(x: 0, y: 0)\`.
- Eje X (horizontal): de \`-240\` (izquierda) a \`+240\` (derecha).
- Eje Y (vertical): de \`-180\` (suelo) a \`+180\` (techo).
- **Gravedad simulada:** Cambiar Y por un número negativo (\`-10\`) de forma continua.
      `,
      practica: `
**Primeros pasos con el personaje (Sprite):**
1. Abrir Scratch en el navegador del aula (scratch.mit.edu).
2. Crear un script que, al presionar la bandera verde, sitúe al personaje en el suelo: \`(x: -150, y: -100)\`.
3. Programar que al presionar la tecla FLECHA DERECHA sume 10 a X, y con FLECHA IZQUIERDA reste 10 a X.
      `,
      solucion: "Bloques de evento 'al presionar tecla...', sumar a X 10 y -10 respectivamente.",
      recursos: ["Scratch MIT Online", "Guía rápida de bloques de Scratch"]
    },
    {
      id: "s07",
      numero: 7,
      ut: 1,
      evaluacion: 1,
      titulo: "Scratch Avanzado: Mini-Juego de Salto y Evasión de Obstáculos",
      subtema: "1.8 Scratch",
      ras: "RA1 (CE1.a, CE1.b, CE1.d, CE1.e)",
      duracion: "1 hora",
      tipo: "Taller Práctico Guiado (Ejercicio Oficial)",
      interactivo: "scratch_minigame",
      objetivos: [
        "Desarrollar el ejercicio práctico oficial: Personaje que salta y evita un objeto en movimiento lateral.",
        "Programar la física del salto mediante variable de velocidad o repetición de coordenadas.",
        "Detectar colisiones mediante el bloque condicional '¿tocando objeto?' y gestionar el 'Game Over'."
      ],
      teoria: `
### Arquitectura del Mini-Juego de Salto:
1. **Personaje Principal (Jugador):**
   - Permanece en el eje X fijo (ej. \`x: -160\`).
   - Al pulsar la **BARRA ESPACIADORA**, realiza un impulso hacia arriba (salto) y luego desciende suavemente por gravedad hasta volver a su posición base (\`y: -100\`).
2. **Obstáculo Móvil (Enemigo/Caja):**
   - Se inicia en la derecha extrema del escenario (\`x: 240, y: -100\`).
   - Se desplaza en bucle infinito hacia la izquierda restando a X (\`cambiar x por -8\`).
   - Al llegar al borde izquierdo (\`x < -230\`), se teletransporta de nuevo al punto de salida con velocidad aleatoria.
3. **Detección de Colisión:**
   - Si el personaje toca el obstáculo: detener todo y emitir mensaje de derrota.
   - Puntuación: Si el obstáculo llega al borde izquierdo sin colisionar, suma +1 punto.
      `,
      practica: `
**Desarrollo del proyecto en el aula:**
1. Carga el simulador jugable embebido en esta web para comprender la mecánica física exacta.
2. Replica el proyecto en Scratch creando los dos objetos (Gato y Obstáculo).
3. Añade una variable "Puntuación" que aumente con cada salto exitoso.
      `,
      solucion: "Código completo de Scratch ilustrado en la aplicación con visualización interactiva del juego.",
      recursos: ["Simulador Scratch HTML5 integrado", "Proyecto base Scratch descargable"]
    },
    {
      id: "s08",
      numero: 8,
      ut: 1,
      evaluacion: 1,
      titulo: "Historia y Evolución de los Lenguajes: Compilados vs. Interpretados",
      subtema: "1.3, 1.4 y 1.5 Metodologías y tipos de lenguajes",
      ras: "RA1 (CE1.a, CE1.c)",
      duracion: "1 hora",
      tipo: "Teórica",
      objetivos: [
        "Conocer la evolución histórica desde el código máquina y ensamblador hasta los lenguajes de alto nivel.",
        "Comparar las diferencias técnicas y operativas entre lenguajes compilados (C, Go, Rust) e interpretados/JIT (JavaScript, Python).",
        "Identificar las metodologías de desarrollo de software: Cascada (Waterfall) frente a Metodologías Ágiles (Scrum/Kanban)."
      ],
      teoria: `
### 1. Evolución Histórica de los Lenguajes
- **1ª Generación:** Código Máquina binario (ceros y unos directos al procesador).
- **2ª Generación:** Lenguaje Ensamblador (mnemónicos como \`MOV\`, \`ADD\`, ligados al hardware).
- **3ª Generación:** Lenguajes de alto nivel estructurados (C, Pascal, BASIC).
- **4ª y 5ª Generación:** Lenguajes orientados a objetos, scripts dinámicos y declarative/IA (JavaScript, Python, SQL).

### 2. Compilados vs. Interpretados vs. JIT
| Característica | Lenguaje Compilado (ej. C, C++) | Lenguaje Interpretado (ej. Bash, Python clásico) | Lenguaje con Motor JIT (ej. JavaScript V8) |
| :--- | :--- | :--- | :--- |
| **Traducción** | De una sola vez a binario nativo (\`.exe\`) | Línea por línea en tiempo de ejecución | Se interpreta al vuelo y se compila a código nativo en caliente (JIT) |
| **Velocidad** | Máxima velocidad de ejecución | Más lenta por el intérprete intermedio | Muy rápida, optimizada dinámicamente |
| **Portabilidad** | Binario dependiente de SO y arquitectura | Altamente portable con intérprete | Universal: corre en cualquier navegador y Node.js |
| **Detección de errores** | En tiempo de compilación | En tiempo de ejecución | En tiempo de ejecución (o análisis estático) |

### 3. Metodologías de Desarrollo
- **Modelo en Cascada tradicional:** Fases rígidas (Requisitos -> Diseño -> Implementación -> Pruebas -> Mantenimiento).
- **Metodologías Ágiles (Agile/Scrum):** Entregas iterativas en sprints de 2-3 semanas, feedback continuo del cliente y adaptación rápida al cambio.
      `,
      practica: `
**Pregunta de debate técnico:**
¿Por qué para un técnico de SMR que administra servidores y redes es más práctico usar un lenguaje de scripting como JavaScript/Node o Python en vez de compilar código en C cada vez que cambia una configuración?
      `,
      solucion: "Rapidez de iteración, portabilidad sin recompilar para cada kernel/SO, y facilidad de integración con formatos web como JSON y APIs REST.",
      recursos: ["Línea temporal interactiva de lenguajes de programación"]
    },
    {
      id: "s09",
      numero: 9,
      ut: 1,
      evaluacion: 1,
      titulo: "¿Por qué JavaScript? Configuración del Entorno de Desarrollo (IDE)",
      subtema: "1.6 ¿Por qué JavaScript? y 1.7 IDE: Visual Studio",
      ras: "RA1 (CE1.b, CE1.c)",
      duracion: "1 hora",
      tipo: "Taller Práctico de Instalación y Configuración",
      objetivos: [
        "Comprender por qué JavaScript es el estándar indiscutible de la web y scripting moderno.",
        "Instalar y configurar el entorno de trabajo: Visual Studio Code, extensiones clave y Node.js.",
        "Crear el primer proyecto de desarrollo de software (\`app.js\`) y ejecutarlo por consola."
      ],
      teoria: `
### ¿Por qué JavaScript en SMR?
1. **Ubicuidad total:** Es el único lenguaje nativo de todos los navegadores web del planeta.
2. **Entorno de servidor con Node.js:** Permite programar servidores, scripts de sistema de ficheros y herramientas CLI con el mismo lenguaje.
3. **Formato JSON nativo:** El estándar mundial de intercambio de datos en redes y APIs es JavaScript Object Notation.
4. **Ecosistema NPM:** El mayor repositorio de módulos y librerías de software del mundo.

### Entorno de Desarrollo: Visual Studio Code
- **Editor ligero y potente** desarrollado por Microsoft.
- **Extensiones esenciales instaladas en el aula:**
  - *JavaScript (ES6) code snippets*
  - *Prettier - Code formatter* (para autoformatear el código y mantenerlo limpio)
  - *Live Server* (para servir aplicaciones web en tiempo real)
  - *Code Runner* (para ejecutar scripts con un clic)
      `,
      practica: `
**Paso a paso en los puestos de Carlos III:**
1. Abrir Visual Studio Code.
2. Crear una carpeta de trabajo personal: \`C:\\SMR2_Prog\\UT1_HolaMundo\`.
3. Crear el archivo \`index.html\` y \`app.js\`.
4. Vincular el script con la etiqueta \`<script src="app.js"></script>\`.
5. Escribir \`console.log("¡Hola CIFP Carlos III desde JavaScript!");\` y visualizarlo en la consola de Chrome (F12).
      `,
      solucion: "Proyecto configurado con éxito y mensaje mostrado en la consola del navegador.",
      recursos: ["Descarga VS Code", "Extensiones recomendadas para SMR"]
    },
    {
      id: "s10",
      numero: 10,
      ut: 1,
      evaluacion: 1,
      titulo: "Conversiones de Tipo, Expresiones y Cuestionario de Autoevaluación UT1",
      subtema: "1.2 Conversiones de tipo y Cuestionario Oficial",
      ras: "RA1 (CE1.g, CE1.h - CE1*)",
      duracion: "1 hora",
      tipo: "Evaluación y Cierre de Unidad",
      interactivo: "cuestionario_ut1",
      objetivos: [
        "Comprender la coerción de tipos implícita y realizar conversiones explícitas con Number(), String(), Boolean().",
        "Evitar los errores típicos de concatenación vs. suma aritmética con \`prompt\` o entradas de texto.",
        "Realizar el cuestionario interactivo de prueba oficial de la Unidad de Trabajo 1 (10% de la nota de RA1)."
      ],
      teoria: `
### Conversión de Tipos (Type Casting) en JavaScript
JavaScript es un lenguaje de **tipado dinámico y débil**: convierte tipos automáticamente cuando es necesario, lo que a veces produce sorpresas:

\`\`\`javascript
// Coerción implícita:
let a = "10";
let b = 5;
console.log(a + b); // "105" (¡Concatenación como texto, no suma!)
console.log(a - b); // 5 (Convierte "10" a número para restar)

// Conversión explícita (Recomendada):
let numeroConvertido = Number("10"); // 10
let sumaCorrecta = numeroConvertido + b; // 15
let texto = String(123); // "123"
let esValido = Boolean(1); // true
\`\`\`

### Cuestionario Oficial de la Unidad 1
Batería de 10 preguntas tipo test autocorregibles para consolidar todos los criterios del RA1.
      `,
      practica: `
**Actividad en el aula:**
1. Realiza el ejercicio interactivo de conversión de tipos.
2. Completa el Cuestionario de Autoevaluación de la UT1 en la sección interactiva.
3. Analiza las justificaciones de cada respuesta para preparar la prueba escrita a papel del trimestre.
      `,
      solucion: "El cuestionario proporciona retroalimentación instantánea y cálculo de puntuación sobre 10.",
      recursos: ["Cuestionario interactivo UT1 integrado", "Hoja de trucos de coerción en JS"]
    },

    // ==========================================
    // UT2: ESTRUCTURAS DE CONTROL (10h - RA3 CRÍTICO)
    // ==========================================
    {
      id: "s11",
      numero: 11,
      ut: 2,
      evaluacion: 1,
      titulo: "Estructuras Condicionales Simples y Dobles: if y if-else",
      subtema: "2.1 Estructuras de control: alternativas",
      ras: "RA3 (CE3.a)",
      duracion: "1 hora",
      tipo: "Teórico-Práctica",
      objetivos: [
        "Entender el flujo bifurcado en la toma de decisiones.",
        "Implementar sentencias \`if\` simples y bloques alternativos \`if-else\`.",
        "Validar condiciones complejas combinando operadores lógicos (\`&&\`, \`||\`, \`!\`)."
      ],
      teoria: `
### Sintaxis de la estructura alternativa doble:
\`\`\`javascript
let intentosFallidos = 3;
const MAX_INTENTOS = 3;

if (intentosFallidos >= MAX_INTENTOS) {
    console.warn("Cuenta bloqueada por seguridad. Contacte con el administrador de Carlos III.");
} else {
    console.log("Acceso concedido al terminal.");
}
\`\`\`
### Operadores lógicos esenciales:
- **AND (\`&&\`):** Ambas condiciones deben ser verdaderas.
- **OR (\`||\`):** Al menos una condición debe ser verdadera.
- **NOT (\`!\`):** Niega o invierte el valor de verdad.
      `,
      practica: `
**Ejercicio:** Escribe un script que solicite al usuario su dirección IP local. Si la IP comienza por "192.168." o "10.", mostrar: "IP privada de red de área local". En caso contrario, mostrar "IP pública o externa".
      `,
      solucion: `
\`\`\`javascript
let ip = "192.168.1.50";
if (ip.startsWith("192.168.") || ip.startsWith("10.")) {
    console.log("IP privada de red de área local.");
} else {
    console.log("IP pública o externa.");
}
\`\`\`
      `,
      recursos: ["Playground JS integrado"]
    },
    {
      id: "s12",
      numero: 12,
      ut: 2,
      evaluacion: 1,
      titulo: "Estructuras Condicionales Múltiples y Operador Ternario",
      subtema: "2.1 Estructuras de control: alternativas",
      ras: "RA3 (CE3.a)",
      duracion: "1 hora",
      tipo: "Teórico-Práctica",
      objetivos: [
        "Encadenar múltiples condiciones mediante \`if - else if - else\` de forma eficiente.",
        "Aprender a utilizar el operador condicional ternario (\`condición ? expr1 : expr2\`).",
        "Clasificar estados de carga de procesador y servicios en un servidor."
      ],
      teoria: `
### Estructura Encadenada \`if - else if - else\`:
\`\`\`javascript
let usoCPU = 88; // Porcentaje de uso

if (usoCPU < 50) {
    console.log("Estado: Óptimo (Verde)");
} else if (usoCPU < 80) {
    console.log("Estado: Advertencia de carga moderada (Amarillo)");
} else if (usoCPU <= 100) {
    console.log("Estado: Alerta crítica de sobrecarga (Rojo)");
} else {
    console.error("Lectura anómala del sensor de CPU.");
}

// Operador Ternario (Sintaxis compacta):
let mensajeAlerta = usoCPU > 80 ? "¡Enviar SMS al técnico!" : "Sin incidencias";
\`\`\`
      `,
      practica: `
**Reto:** Programa una escala de clasificación de la velocidad de un enlace de red fibra (en Mbps):
- < 100 Mbps: "Fast Ethernet (Obsoleto)"
- 100 a 999 Mbps: "Gigabit Ethernet estándar"
- >= 1000 Mbps: "Fibra de alta velocidad / 10 GbE"
      `,
      solucion: "Código con estructura if - else if - else validando rangos con operadores relacionales.",
      recursos: ["Consola interactiva"]
    },
    {
      id: "s13",
      numero: 13,
      ut: 2,
      evaluacion: 1,
      titulo: "Selección Múltiple: switch...case y Sentencia break",
      subtema: "2.1 Estructuras de control: alternativas",
      ras: "RA3 (CE3.a, CE3.c)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      interactivo: "consola_js",
      objetivos: [
        "Sustituir largas cadenas de \`if-else\` por la sentencia clara \`switch\`.",
        "Comprender la importancia de la palabra clave \`break\` y el bloque por defecto \`default\`.",
        "Desarrollar un menú de gestión de servicios de red en consola."
      ],
      teoria: `
### Sintaxis de \`switch\`:
\`\`\`javascript
let comando = "reiniciar";

switch (comando.toLowerCase()) {
    case "iniciar":
        console.log("Iniciando servicio Apache...");
        break;
    case "detener":
        console.log("Deteniendo servicio Apache...");
        break;
    case "reiniciar":
        console.log("Reiniciando servicio Apache...");
        break;
    case "estado":
        console.log("Servicio Apache activo y escuchando en el puerto 80.");
        break;
    default:
        console.warn("Comando desconocido. Opciones: iniciar, detener, reiniciar, estado.");
}
\`\`\`
      `,
      practica: `
Crea un menú con \`switch\` que reciba el número de puerto de un protocolo de red (21, 22, 25, 53, 80, 443) e imprima el nombre del protocolo asociado (FTP, SSH, SMTP, DNS, HTTP, HTTPS).
      `,
      solucion: "Switch con casos para 21, 22, 25, 53, 80, 443 y default para 'Puerto no catalogado en esta lista'.",
      recursos: ["Playground JS"]
    },
    {
      id: "s14",
      numero: 14,
      ut: 2,
      evaluacion: 1,
      titulo: "Bucles Controlados por Condición: while y do-while",
      subtema: "2.2 Estructuras de control: repetitivas",
      ras: "RA3 (CE3.b)",
      duracion: "1 hora",
      tipo: "Teórico-Práctica",
      objetivos: [
        "Comprender el concepto de iteración y condición de permanencia.",
        "Diferenciar cuándo se comprueba la condición: al inicio (\`while\`) vs al final (\`do-while\`).",
        "Evitar a toda costa los bucles infinitos asegurando la actualización de la variable de control."
      ],
      teoria: `
### Bucle \`while\` (Mientras):
Se ejecuta 0 o más veces mientras la condición sea cierta:
\`\`\`javascript
let pingCount = 1;
while (pingCount <= 4) {
    console.log("Haciendo ping a 8.8.8.8... Paquete #" + pingCount);
    pingCount++; // ¡Fundamental incrementar para no congelar la máquina!
}
\`\`\`

### Bucle \`do-while\` (Hacer mientras):
Se ejecuta **al menos una vez obligatoriamente**, antes de evaluar la condición:
\`\`\`javascript
let password = "";
do {
    // Simulación de petición de clave
    password = prompt("Introduce la contraseña de root del switch:");
} while (password !== "admin123");
\`\`\`
      `,
      practica: `
Simula un proceso de copia de seguridad con un bucle \`while\`: Se transfieren bloques de 250 MB hasta alcanzar el tamaño total de una imagen de disco de 2000 MB. Muestra en cada iteración los MB transferidos y el porcentaje completado.
      `,
      solucion: "Bucle que acumula +250 MB por vuelta e imprime progreso hasta 2000 MB.",
      recursos: ["Editor en vivo"]
    },
    {
      id: "s15",
      numero: 15,
      ut: 2,
      evaluacion: 1,
      titulo: "Bucles Contadores: Estructura for Tradicional y Anidamientos",
      subtema: "2.2 Estructuras de control: repetitivas",
      ras: "RA3 (CE3.b, CE3.e)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      interactivo: "consola_js",
      objetivos: [
        "Dominar las tres partes de la cabecera \`for\`: inicialización, condición e incremento.",
        "Iterar en sentido ascendente y descendente (cuenta atrás).",
        "Programar bucles anidados para escanear rangos de red y matrices."
      ],
      teoria: `
### Estructura del bucle \`for\`:
\`\`\`javascript
// for (inicialización; condición; incremento/decremento)
for (let i = 1; i <= 5; i++) {
    console.log("Comprobando switch puerto " + i + "... OK");
}

// Bucle anidado: Escaneo de subredes
for (let red = 1; red <= 2; red++) {
    for (let host = 1; host <= 3; host++) {
        console.log(\`Escaneando IP: 192.168.\${red}.\${host}\`);
    }
}
\`\`\`
      `,
      practica: `
Escribe un script que imprima la tabla de multiplicar de un número o simule la asignación de puertos Ethernet del 1 al 24 en un switch Cisco.
      `,
      solucion: "Uso de bucle for clásico con formateo mediante template literals (`${var}`).",
      recursos: ["Consola de código"]
    },
    {
      id: "s16",
      numero: 16,
      ut: 2,
      evaluacion: 1,
      titulo: "Sentencias de Salto e Interrupción: break y continue",
      subtema: "2.2 Estructuras de control: repetitivas",
      ras: "RA3 (CE3.c)",
      duracion: "1 hora",
      tipo: "Teórico-Práctica",
      objetivos: [
        "Controlar de manera precisa la ejecución de bucles con \`break\` (salida inmediata).",
        "Saltar iteraciones concretas con \`continue\` (pasar a la siguiente vuelta sin detener el bucle).",
        "Conocer las buenas prácticas de legibilidad para no abusar de las sentencias de interrupción."
      ],
      teoria: `
### \`break\` vs \`continue\`:
- **\`break\`:** Cancela completamente el bucle en el instante en que se ejecuta, saliendo de él.
- **\`continue\`:** Omite el resto del código de la iteración actual y salta directamente a la siguiente evaluación de la condición.

\`\`\`javascript
// Ejemplo de búsqueda de un equipo defectuoso:
for (let equipo = 1; equipo <= 10; equipo++) {
    if (equipo === 4) {
        console.log("¡Equipo 4 está en mantenimiento! Saltando verificación...");
        continue; // Salta al equipo 5
    }
    if (equipo === 8) {
        console.error("¡Fallo de seguridad crítico en equipo 8! Deteniendo escaneo...");
        break; // Detiene completamente el bucle
    }
    console.log("Equipo " + equipo + " verificado correctamente.");
}
\`\`\`
      `,
      practica: `
Escribe un bucle que recorra los números del 1 al 20 y muestre únicamente los números pares utilizando \`continue\` cuando el número sea impar (\`num % 2 !== 0\`).
      `,
      solucion: "if (i % 2 !== 0) continue; console.log(i);",
      recursos: ["Playground JS"]
    },
    {
      id: "s17",
      numero: 17,
      ut: 2,
      evaluacion: 1,
      titulo: "Depuración de Código (Debugging): Breakpoints y Call Stack en DevTools",
      subtema: "Depuración y prueba de programas",
      ras: "RA3 (CE3.f)",
      duracion: "1 hora",
      tipo: "Taller de Laboratorio",
      objetivos: [
        "Aprender a depurar código profesionalmente usando las Chrome DevTools / VS Code Debugger.",
        "Establecer puntos de interrupción (Breakpoints) y puntos condicionales.",
        "Inspeccionar el valor de variables en tiempo real, la pila de llamadas (Call Stack) y avanzar paso a paso (Step Over, Step Into)."
      ],
      teoria: `
### ¿Por qué depurar es la habilidad #1 de un programador?
En vez de llenar el código de \`console.log\`, los navegadores modernos y VS Code incluyen un depurador interactivo:
1. **Pestaña 'Sources' (Fuentes):** Localiza el archivo \`app.js\`.
2. **Hacer clic en el número de línea:** Coloca un breakpoint rojo. La ejecución se pausará automáticamente cuando el hilo llegue a esa línea.
3. **Controles de ejecución:**
   - *Resume (F8):* Continúa hasta el siguiente breakpoint.
   - *Step Over (F10):* Ejecuta la línea actual y pasa a la siguiente.
   - *Step Into (F11):* Entra dentro de la función que se está llamando.
4. **Panel 'Scope' y 'Watch':** Muestra los valores exactos de cada variable en memoria.
      `,
      practica: `
Se proporciona a los alumnos un script con un error sutil (off-by-one en un array o variable mal inicializada). Los alumnos deben encontrar el bug usando el depurador y no 'a ojo'.
      `,
      solucion: "Identificación de la variable que causa el bucle infinito al pausar con F10 en DevTools.",
      recursos: ["Chrome DevTools", "Herramienta de depuración integrada"]
    },
    {
      id: "s18",
      numero: 18,
      ut: 2,
      evaluacion: 1,
      titulo: "Manejo Estructurado de Excepciones: try, catch y finally",
      subtema: "2.3 Excepciones y manejo de errores",
      ras: "RA3 (CE3.d)",
      duracion: "1 hora",
      tipo: "Teórico-Práctica",
      objetivos: [
        "Comprender la diferencia entre errores sintácticos, lógicos y excepciones en tiempo de ejecución.",
        "Capturar fallos inesperados con el bloque \`try...catch\` sin que la aplicación se congele o caiga.",
        "Utilizar el bloque \`finally\` para liberar recursos (cerrar conexiones, ficheros, etc.)."
      ],
      teoria: `
### Bloque \`try...catch...finally\`:
\`\`\`javascript
try {
    console.log("Intentando conectar con el servidor proxy...");
    // Simulamos una llamada a una función no definida que causaría un crash
    conectarProxyInexistente(); 
    console.log("Conectado con éxito."); // No llegará aquí
} catch (error) {
    console.error("Se produjo una excepción:", error.name, "-", error.message);
} finally {
    console.log("Limpieza: Cerrando socket de red temporal (se ejecuta SIEMPRE).");
}
\`\`\`
      `,
      practica: `
Simula el parseo de una configuración en formato JSON recibida de un router. Envuelve \`JSON.parse(texto)\` en un bloque \`try...catch\` para atrapar cadenas mal formadas y mostrar un mensaje amistoso al usuario.
      `,
      solucion: "try { let config = JSON.parse('{puerto: 80}'); } catch(e) { console.error('JSON inválido:', e.message); }",
      recursos: ["Playground JS"]
    },
    {
      id: "s19",
      numero: 19,
      ut: 2,
      evaluacion: 1,
      titulo: "Lanzamiento Personalizado de Errores: Sentencia throw y Validación",
      subtema: "2.3 Excepciones y manejo de errores",
      ras: "RA3 (CE3.d, CE3.e)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      interactivo: "consola_js",
      objetivos: [
        "Aprender a lanzar excepciones personalizadas con la palabra clave \`throw new Error(...)\`.",
        "Validar rangos numéricos válidos en parámetros de red (ej. máscaras de subred, puertos 1-65535).",
        "Crear código robusto y defensivo ante entradas de usuario erróneas."
      ],
      teoria: `
### Lanzar excepciones con \`throw\`:
\`\`\`javascript
function asignarPuerto(puerto) {
    if (typeof puerto !== "number") {
        throw new TypeError("El puerto debe ser un número entero.");
    }
    if (puerto < 1 || puerto > 65535) {
        throw new RangeError("Número de puerto fuera de rango (1 a 65535): " + puerto);
    }
    return \`Puerto \${puerto} reservado con éxito.\`;
}

try {
    console.log(asignarPuerto(8080));
    console.log(asignarPuerto(99999)); // ¡Provocará el throw!
} catch (err) {
    console.warn("ALERTA TÉCNICA:", err.message);
}
\`\`\`
      `,
      practica: `
Crea una función \`validarCapacidadDisco(espacioGB)\` que lance un error si el espacio es menor que cero o mayor que 100000 GB, capturándolo con \`try-catch\`.
      `,
      solucion: "throw new Error('Capacidad fuera de rango comercial'); y captura con catch.",
      recursos: ["Editor de código interactivo"]
    },
    {
      id: "s20",
      numero: 20,
      ut: 2,
      evaluacion: 1,
      titulo: "Taller Integrador de Estructuras de Control y Prueba de la UT2",
      subtema: "Evaluación práctica de la UT2",
      ras: "RA3 (CE3* - RA Crítico 35%)",
      duracion: "1 hora",
      tipo: "Prueba Práctica y Evaluación de RA Crítico",
      objetivos: [
        "Integrar en un único programa condicionales, bucles, saltos y control de excepciones.",
        "Superar la prueba práctica formativa de control del RA3 (peso 35% y crítico para superar el módulo).",
        "Preparar el formato de examen a papel con código a completar según la memoria docente."
      ],
      teoria: `
### Requisitos del Reto Integrador: Monitor de Salud de Red
El programa debe:
1. Recorrer una lista de 5 servidores simulados.
2. Comprobar su latencia con un condicional:
   - < 20 ms: Excelente.
   - 20 a 100 ms: Aceptable.
   - > 100 ms: Lento.
3. Si un servidor reporta \`-1\` (caído), lanzar y capturar una excepción para que el programa no se detenga.
4. Generar un informe resumen final con el recuento de servidores activos.
      `,
      practica: `
Desarrollo individual del script en VS Code o en la consola web integrada con entrega en Moodle para calificación continua.
      `,
      solucion: "Código limpio estructurado con bucle for, if-else, try-catch y acumuladores.",
      recursos: ["Consola de código interactiva", "Enlace a entrega en Moodle"]
    },

    // ==========================================
    // UT3: FUNCIONES Y ESTRUCTURAS DE DATOS (6h - RA2)
    // ==========================================
    {
      id: "s21",
      numero: 21,
      ut: 3,
      evaluacion: 1,
      titulo: "Concepto de Función, Modularidad y Declaración Básica",
      subtema: "3.1 Funciones y librerías, 3.2 Definición de funciones",
      ras: "RA2 (CE2.a, CE2.b, CE2.c)",
      duracion: "1 hora",
      tipo: "Teórico-Práctica",
      objetivos: [
        "Comprender el principio DRY (Don't Repeat Yourself) y la modularización del software.",
        "Declarar funciones con la palabra clave \`function\` y llamarlas adecuadamente.",
        "Comprender el ámbito de las variables: variables locales vs. variables globales."
      ],
      teoria: `
### ¿Por qué funciones?
Una función es un bloque reutilizable de código diseñado para realizar una tarea específica. Evita duplicar líneas, facilita las pruebas y hace el programa mucho más legible.

\`\`\`javascript
// Declaración de una función
function mostrarBannerBienvenida() {
    console.log("=========================================");
    console.log("   CIFP CARLOS III - CENTRO INTEGRADO    ");
    console.log("   Sistemas Microinformáticos y Redes    ");
    console.log("=========================================");
}

// Invocación o llamada
mostrarBannerBienvenida();
mostrarBannerBienvenida();
\`\`\`
      `,
      practica: `
Crea una función llamada \`mostrarDiagnosticoRapido()\` que imprima el sistema operativo, la hora actual y el estado de la memoria libre. Llama a la función 3 veces.
      `,
      solucion: "function mostrarDiagnosticoRapido() { console.log('Diagnóstico a las ' + new Date().toLocaleTimeString()); }",
      recursos: ["Consola interactiva"]
    },
    {
      id: "s22",
      numero: 22,
      ut: 3,
      evaluacion: 1,
      titulo: "Paso de Parámetros, Argumentos y Retorno de Valores (return)",
      subtema: "3.2 Definición de funciones y paso de parámetros",
      ras: "RA2 (CE2.c, CE2.d)",
      duracion: "1 hora",
      tipo: "Teórico-Práctica",
      objetivos: [
        "Diferenciar entre parámetros (definición) y argumentos (llamada).",
        "Retornar resultados mediante la sentencia \`return\` para que otras partes del programa los aprovechen.",
        "Utilizar parámetros con valores por defecto (\`default parameters\`)."
      ],
      teoria: `
### Parámetros y \`return\`:
\`\`\`javascript
// Definición con parámetros por defecto
function calcularEspacioLibre(totalGB, ocupadoGB = 0) {
    let libre = totalGB - ocupadoGB;
    return libre; // Devuelve el dato procesado al invocador
}

let discoC = calcularEspacioLibre(512, 120);
console.log("Espacio libre en C: " + discoC + " GB");

let discoD = calcularEspacioLibre(1000); // ocupadoGB tomará 0 por defecto
console.log("Espacio libre en D: " + discoD + " GB");
\`\`\`
      `,
      practica: `
Escribe una función \`convertirMBaGB(megabytes)\` que reciba una cantidad en MB y devuelva su equivalente en GB con dos decimales (\`return (megabytes / 1024).toFixed(2)\`).
      `,
      solucion: "function convertirMBaGB(mb) { return (mb / 1024).toFixed(2); }",
      recursos: ["Playground JS"]
    },
    {
      id: "s23",
      numero: 23,
      ut: 3,
      evaluacion: 1,
      titulo: "Funciones Flecha (Arrow Functions) y Métodos Modernos",
      subtema: "3.2 Definición de funciones modernas",
      ras: "RA2 (CE2.c, CE2.d)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      interactivo: "consola_js",
      objetivos: [
        "Aprender la sintaxis moderna de funciones flecha (\`() => { ... }\`).",
        "Usar retornos implícitos de una sola línea.",
        "Comprender su aplicación práctica en callbacks y manejo de eventos."
      ],
      teoria: `
### Sintaxis clásica vs. Arrow Function:
\`\`\`javascript
// Función clásica:
function sumar(a, b) {
    return a + b;
}

// Función flecha equivalente:
const sumarFlecha = (a, b) => a + b; // Retorno implícito

// Función flecha con bloque de código:
const formatearMAC = (mac) => {
    let limpia = mac.replace(/[:-]/g, "").toUpperCase();
    return limpia.match(/.{1,2}/g).join(":");
};

console.log(formatearMAC("00-1B-44-11-3A-B7")); // "00:1B:44:11:3A:B7"
\`\`\`
      `,
      practica: `
Convierte una función de cálculo de IVA para material informático (21%) a sintaxis de función flecha de una sola línea.
      `,
      solucion: "const calcularPVP = (precio) => (precio * 1.21).toFixed(2);",
      recursos: ["Consola interactiva"]
    },
    {
      id: "s24",
      numero: 24,
      ut: 3,
      evaluacion: 1,
      titulo: "Estructuras de Datos I: Arrays Dinámicos y Métodos Principales",
      subtema: "3.5 y 3.6 Estructuras de datos simples y compuestas, dinámicas",
      ras: "RA2 (CE2.a, CE2.b)",
      duracion: "1 hora",
      tipo: "Teórico-Práctica",
      objetivos: [
        "Comprender el concepto de colección indexada (Array) en memoria.",
        "Manipular arrays dinámicos en JavaScript: longitud (\`.length\`), índices \`[0]\`.",
        "Utilizar métodos mutadores y de transformación: \`push()\`, \`pop()\`, \`shift()\`, \`includes()\`, \`join()\`, \`map()\` y \`filter()\`."
      ],
      teoria: `
### Arrays dinámicos en JavaScript:
A diferencia de C o Java donde los arrays tienen un tamaño estático fijo, en JavaScript los arrays son dinámicos: crecen y decrecen automáticamente en memoria según sea necesario.

\`\`\`javascript
let servidores = ["srv-dns", "srv-dhcp", "srv-web"];

// Añadir al final:
servidores.push("srv-backup");

// Comprobar existencia:
if (servidores.includes("srv-web")) {
    console.log("Servidor web registrado en el inventario.");
}

// Filtrar servidores:
let servidoresSrv = servidores.filter(s => s.startsWith("srv-"));
console.log("Total servidores activos:", servidores.length);
\`\`\`
      `,
      practica: `
Crea un array con las IPs de los 5 puestos del aula 204. Añade una IP con \`push\`, elimina la primera con \`shift\` y muestra la lista formateada separada por guiones usando \`.join(" - ")\`.
      `,
      solucion: "Uso de los métodos push, shift y join(' - ') sobre el array de IPs.",
      recursos: ["Playground JS"]
    },
    {
      id: "s25",
      numero: 25,
      ut: 3,
      evaluacion: 1,
      titulo: "Estructuras de Datos II: Objetos Literales en JavaScript (JSON-like)",
      subtema: "3.5 Estructuras de datos compuestas",
      ras: "RA2 (CE2.a, CE2.b)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      interactivo: "consola_js",
      objetivos: [
        "Modelar entidades reales (equipos informáticos, usuarios, tarjetas de red) con objetos literales clave-valor.",
        "Acceder a propiedades con notación de punto (\`obj.propiedad\`) y de corchetes (\`obj['propiedad']\`).",
        "Combinar arrays de objetos para construir un inventario microinformático."
      ],
      teoria: `
### Sintaxis de un Objeto Literal:
\`\`\`javascript
const equipoAula = {
    codigo: "PC-SMR-12",
    ubicacion: "Aula 204 CIFP Carlos III",
    ramGB: 16,
    discoSSD: true,
    ipAsignada: "192.168.10.112",
    softwareInstalado: ["VS Code", "Node.js", "Wireshark", "Packet Tracer"],
    mostrarInfo: function() {
        return \`\${this.codigo} (\${this.ubicacion}) - RAM: \${this.ramGB}GB\`;
    }
};

console.log(equipoAula.mostrarInfo());
console.log("Primer software:", equipoAula.softwareInstalado[0]);
\`\`\`
      `,
      practica: `
Crea un array con 3 objetos que representen 3 switches de red (marca, modelo, número de puertos, activo: true/false). Escribe un bucle que muestre únicamente los switches que tengan 24 o más puertos.
      `,
      solucion: "Array de objetos iterado con forEach o filter validando condicion item.puertos >= 24.",
      recursos: ["Consola interactiva"]
    },
    {
      id: "s26",
      numero: 26,
      ut: 3,
      evaluacion: 1,
      titulo: "Documentación Técnica con JSDoc y Gestión de Librerías / Módulos",
      subtema: "3.3 Módulos y paquetes, 3.4 Comentarios y documentación",
      ras: "RA2 (CE2.e, CE2.f - Cierre 1ª Evaluación)",
      duracion: "1 hora",
      tipo: "Teórico-Práctica y Cierre 1T",
      objetivos: [
        "Documentar funciones profesionalmente con el estándar JSDoc (@param, @returns).",
        "Aprender a importar y exportar módulos con sintaxis ES6 (\`import\` / \`export\`) y CommonJS (\`require\`).",
        "Cerrar los contenidos de la 1ª Evaluación (26 horas completadas)."
      ],
      teoria: `
### Documentación estándar JSDoc:
Visual Studio Code lee los bloques JSDoc para proporcionar autocompletado y ayuda contextual instantánea al programador:

\`\`\`javascript
/**
 * Calcula la máscara de red en formato CIDR a partir de una notación decimal.
 * @param {string} mascaraDecimal - Ejemplo: "255.255.255.0"
 * @returns {number} Prefijo CIDR equivalente (ejemplo: 24)
 * @throws {Error} Si la máscara introducida tiene un formato incorrecto
 */
function decimalACidr(mascaraDecimal) {
    if (!mascaraDecimal.includes(".")) throw new Error("Máscara no válida.");
    // Algoritmo de conteo de bits a 1
    return 24; 
}
\`\`\`

### Módulos en JavaScript:
- **Exportar:** \`export const PI = 3.1416;\` o \`module.exports = { ... };\`
- **Importar:** \`import { PI } from './constantes.js';\`
      `,
      practica: `
Toma dos funciones de las sesiones anteriores y redáctales el bloque JSDoc completo con descripción, parámetros y retorno. Comprueba cómo VS Code muestra la ayuda emergente al poner el cursor encima.
      `,
      solucion: "Funciones comentadas siguiendo rigurosamente las etiquetas @param y @returns de JSDoc.",
      recursos: ["Guía oficial de JSDoc", "Resumen de contenidos de la 1ª Evaluación"]
    },

    // ==========================================
    // UT4: FICHEROS Y BASES DE DATOS (10h - 2ª Ev, RA4 y RA5)
    // ==========================================
    {
      id: "s27",
      numero: 27,
      ut: 4,
      evaluacion: 2,
      titulo: "Entrada y Salida Formateada en Consola: Flujos I/O y Buffers",
      subtema: "4.1 Estructuras externas: ficheros y bases de datos",
      ras: "RA4 (CE4.a, CE4.b, CE4.c)",
      duracion: "1 hora",
      tipo: "Teórico-Práctica",
      objetivos: [
        "Entender los flujos estándar del sistema operativo: \`stdin\` (0), \`stdout\` (1) y \`stderr\` (2).",
        "Formatear salidas complejas en consola utilizando tablas (\`console.table\`), grupos y colores ANSI.",
        "Capturar datos del usuario por terminal en Node.js mediante el módulo nativo \`readline/promises\`."
      ],
      teoria: `
### Flujos de E/S en Entornos Microinformáticos
Cuando ejecutamos scripts de consola en Linux o Windows, nos comunicamos con tres flujos:
1. **stdin:** Entrada estándar (teclado o redirección con tubería \`|\`).
2. **stdout:** Salida estándar de datos (\`console.log\`).
3. **stderr:** Salida estándar de errores y alertas (\`console.error\`).

### Métodos avanzados de la Consola:
\`\`\`javascript
const inventario = [
    { aula: "201", equipos: 18, so: "Ubuntu 24.04" },
    { aula: "204", equipos: 22, so: "Dual Boot (Win/Linux)" },
    { aula: "205", equipos: 20, so: "Windows 11 Pro" }
];

console.table(inventario); // Muestra una tabla ASCII perfectamente alineada
\`\`\`
      `,
      practica: `
Crea un script en Node.js que pida por consola el nombre de un equipo y su IP, y luego imprima un resumen con \`console.table\`.
      `,
      solucion: "Uso de readline/promises para pedir entradas e imprimir con console.table.",
      recursos: ["Módulo readline de Node.js", "Códigos de color ANSI para terminales"]
    },
    {
      id: "s28",
      numero: 28,
      ut: 4,
      evaluacion: 2,
      titulo: "Operaciones con Ficheros de Texto Plano en Node.js (fs/promises)",
      subtema: "4.2 Operaciones básicas sobre ficheros",
      ras: "RA4 (CE4.c, CE4.d)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      objetivos: [
        "Comprender la persistencia permanente de datos en disco frente a la memoria RAM volátil.",
        "Utilizar el módulo oficial \`fs/promises\` de Node.js con funciones asíncronas (\`async/await\`).",
        "Leer (\`readFile\`), escribir (\`writeFile\`) y añadir datos (\`appendFile\`) a ficheros de texto."
      ],
      teoria: `
### Manejo moderno de ficheros con \`fs/promises\`:
\`\`\`javascript
import fs from 'node:fs/promises';

async function gestionarLog() {
    try {
        const ruta = './servidor_acceso.log';
        const nuevaEntrada = \`[\${new Date().toISOString()}] Inicio de sesión admin\\n\`;
        
        // Escribe o añade al final sin borrar lo anterior
        await fs.appendFile(ruta, nuevaEntrada, 'utf-8');
        console.log("Log registrado con éxito en disco.");
        
        // Leer el contenido completo
        const contenido = await fs.readFile(ruta, 'utf-8');
        console.log("Contenido actual del log:\\n" + contenido);
    } catch (error) {
        console.error("Error al acceder al sistema de ficheros:", error.message);
    }
}

gestionarLog();
\`\`\`
      `,
      practica: `
Crea un script que registre en un fichero \`historico_ips.txt\` cada IP que el usuario introduzca, comprobando que el fichero se actualiza en el explorador de archivos.
      `,
      solucion: "Implementación con fs.appendFile en un bloque try/catch.",
      recursos: ["Documentación oficial de Node.js fs"]
    },
    {
      id: "s29",
      numero: 29,
      ut: 4,
      evaluacion: 2,
      titulo: "Serialización y Persistencia con Ficheros JSON",
      subtema: "4.2 Operaciones básicas sobre ficheros en distintos formatos",
      ras: "RA4 (CE4.d, CE4.e)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      interactivo: "consola_js",
      objetivos: [
        "Comprender el formato JSON (JavaScript Object Notation) como estándar de almacenamiento estructurado.",
        "Serializar objetos a texto con \`JSON.stringify(obj, null, 2)\`.",
        "Deserializar texto JSON a objetos manipulables en memoria con \`JSON.parse(texto)\`."
      ],
      teoria: `
### Persistencia en JSON:
\`\`\`javascript
import fs from 'node:fs/promises';

const rutaBD = './inventario.json';

// Guardar array de objetos en disco
async function guardarInventario(datos) {
    const jsonTexto = JSON.stringify(datos, null, 2); // 2 espacios de indentación
    await fs.writeFile(rutaBD, jsonTexto, 'utf-8');
}

// Cargar array desde el disco
async function cargarInventario() {
    try {
        const texto = await fs.readFile(rutaBD, 'utf-8');
        return JSON.parse(texto);
    } catch (err) {
        return []; // Si no existe, devuelve array vacío
    }
}
\`\`\`
      `,
      practica: `
Crea un archivo \`equipos.json\` con dos equipos y escribe un script que cargue el archivo, añada un tercer equipo al array y lo guarde de nuevo en el fichero.
      `,
      solucion: "Lectura con readFile -> JSON.parse -> array.push() -> JSON.stringify -> writeFile.",
      recursos: ["Validador de JSON online"]
    },
    {
      id: "s30",
      numero: 30,
      ut: 4,
      evaluacion: 2,
      titulo: "Formatos Estructurados para Microinformática: Ficheros CSV y Logs",
      subtema: "4.2 Operaciones básicas sobre ficheros",
      ras: "RA4 (CE4.e - Cierre RA4)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      objetivos: [
        "Comprender la estructura de ficheros CSV (Comma-Separated Values).",
        "Generar informes exportables a Microsoft Excel o LibreOffice Calc desde scripts de JS.",
        "Parsear líneas CSV delimitadas por comas o puntos y coma."
      ],
      teoria: `
### Estructura de un CSV:
\`\`\`csv
Hostname,DireccionIP,Planta,Estado
PC-AULA1-01,192.168.1.101,Planta 1,Activo
PC-AULA1-02,192.168.1.102,Planta 1,Mantenimiento
SRV-CENTRAL,192.168.1.1,Planta Baja,Activo
\`\`\`

### Generación con JavaScript:
\`\`\`javascript
function exportarACSV(datos) {
    const cabecera = "Hostname,DireccionIP,Estado\\n";
    const filas = datos.map(e => \`\${e.host},\${e.ip},\${e.estado}\`).join("\\n");
    return cabecera + filas;
}
\`\`\`
      `,
      practica: `
Diseña un script que reciba un array de 4 impresoras de red del centro y las exporte a un fichero \`impresoras.csv\` que pueda abrirse correctamente con Excel.
      `,
      solucion: "Función de conversión a texto CSV separada por comas y escritura con writeFile.",
      recursos: ["LibreOffice Calc / Excel"]
    },
    {
      id: "s31",
      numero: 31,
      ut: 4,
      evaluacion: 2,
      titulo: "Introducción a los Sistemas Gestores de Bases de Datos Relacionales (SGBD)",
      subtema: "4.1 Estructuras externas y 4.3 Bases de datos",
      ras: "RA5 (CE5.a)",
      duracion: "1 hora",
      tipo: "Teórica",
      objetivos: [
        "Comprender la necesidad de los SGBD frente a los ficheros planos: integridad, concurrencia y seguridad.",
        "Identificar los elementos relacionales: tablas, registros (filas), campos (columnas) y claves primarias (PRIMARY KEY).",
        "Conocer los motores más habituales en entornos SMR: MariaDB/MySQL, PostgreSQL y SQLite."
      ],
      teoria: `
### Ficheros vs. Bases de Datos Relacionales
- **Problemas de los ficheros planos:** Si dos técnicos modifican un archivo JSON a la vez, uno sobrescribe al otro (falta de concurrencia). No hay validación estricta de tipos de datos.
- **Ventajas de un SGBD:**
  - **Integridad referencial:** Evita registros huérfanos mediante claves foráneas.
  - **Lenguaje estándar SQL:** Mismo lenguaje para consultar millones de filas en milisegundos.
  - **Control de transacciones (ACID):** Atomicidad, Consistencia, Aislamiento y Durabilidad.
  - **Seguridad y permisos de usuario.**
      `,
      practica: `
Identifica en un esquema de inventario de equipos del CIFP Carlos III cuáles serían los campos adecuados, su tipo de dato (INTEGER, VARCHAR, BOOLEAN) y cuál actuaría como clave primaria única.
      `,
      solucion: "Tabla EQUIPOS: id (PK, entero autoincremental), mac (VARCHAR 17 único), nombre (VARCHAR), aula (VARCHAR).",
      recursos: ["Esquema entidad-relación explicativo"]
    },
    {
      id: "s32",
      numero: 32,
      ut: 4,
      evaluacion: 2,
      titulo: "Lenguaje SQL I: Creación de Tablas (CREATE TABLE) e Integridad",
      subtema: "4.3 Operaciones básicas sobre bases de datos",
      ras: "RA5 (CE5.a, CE5.c)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      objetivos: [
        "Aprender la sintaxis DDL (Data Definition Language) de SQL.",
        "Definir tablas con \`CREATE TABLE\` aplicando restricciones: \`PRIMARY KEY\`, \`NOT NULL\`, \`UNIQUE\`, \`DEFAULT\`.",
        "Instalar y usar SQLite Viewer / DBeaver en el aula informática."
      ],
      teoria: `
### Sentencia \`CREATE TABLE\`:
\`\`\`sql
CREATE TABLE IF NOT EXISTS equipos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre_host TEXT NOT NULL UNIQUE,
    ip TEXT NOT NULL,
    ram_gb INTEGER DEFAULT 16,
    sistema_operativo TEXT NOT NULL,
    fecha_alta DATETIME DEFAULT CURRENT_TIMESTAMP
);
\`\`\`
### Tipos de restricciones:
- **PRIMARY KEY:** Identificador único irrepetible por fila.
- **NOT NULL:** El campo no puede dejarse vacío.
- **UNIQUE:** No permite dos registros con el mismo valor (ej. hostname o MAC).
      `,
      practica: `
Escribe la sentencia SQL para crear una tabla llamada \`incidencias_soporte\` que guarde: id de incidencia, id de equipo, descripción del problema, técnico asignado y fecha.
      `,
      solucion: "CREATE TABLE incidencias (id INTEGER PRIMARY KEY, id_equipo INTEGER, descripcion TEXT NOT NULL, tecnico TEXT, fecha TEXT);",
      recursos: ["SQLite Studio / DBeaver"]
    },
    {
      id: "s33",
      numero: 33,
      ut: 4,
      evaluacion: 2,
      titulo: "Lenguaje SQL II: Inserción, Modificación y Borrado (INSERT, UPDATE, DELETE)",
      subtema: "4.3 Operaciones básicas sobre bases de datos",
      ras: "RA5 (CE5.c)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      objetivos: [
        "Insertar nuevos registros con la sentencia \`INSERT INTO ... VALUES\`.",
        "Modificar datos existentes con \`UPDATE ... SET ... WHERE\`.",
        "Eliminar registros de manera controlada con \`DELETE FROM ... WHERE\` evitando borrar toda la tabla por error."
      ],
      teoria: `
### Sentencias DML Básicas:
\`\`\`sql
-- 1. Insertar registros
INSERT INTO equipos (nombre_host, ip, ram_gb, sistema_operativo)
VALUES ('PC-SMR-01', '192.168.1.101', 16, 'Windows 11 Pro');

-- 2. Modificar registros (¡SIEMPRE con cláusula WHERE!)
UPDATE equipos 
SET ip = '192.168.1.200', ram_gb = 32
WHERE nombre_host = 'PC-SMR-01';

-- 3. Borrar registros (¡SIEMPRE con cláusula WHERE!)
DELETE FROM equipos 
WHERE id = 1;
\`\`\`
*¡Peligro crítico!:* Ejecutar un \`UPDATE\` o \`DELETE\` sin \`WHERE\` modificará o eliminará TODOS los registros de la base de datos.
      `,
      practica: `
Inserta 3 equipos ficticios en la base de datos, actualiza la IP del segundo a \`10.0.0.50\` y borra el tercer equipo por su id.
      `,
      solucion: "Comprobación de la ejecución correcta en SQLite Studio.",
      recursos: ["Consola SQLite"]
    },
    {
      id: "s34",
      numero: 34,
      ut: 4,
      evaluacion: 2,
      titulo: "Lenguaje SQL III: Consultas de Datos (SELECT, WHERE, ORDER BY, LIMIT)",
      subtema: "4.3 Operaciones básicas sobre bases de datos",
      ras: "RA5 (CE5.d, CE5.e)",
      duracion: "1 hora",
      tipo: "Taller Práctico",
      interactivo: "consola_js",
      objetivos: [
        "Recuperar información precisa con la sentencia \`SELECT\`.",
        "Filtrar filas mediante condiciones lógicas en la cláusula \`WHERE\` (\`AND\`, \`OR\`, \`LIKE\`).",
        "Ordenar resultados con \`ORDER BY ... ASC/DESC\` y limitar el número de filas con \`LIMIT\`."
      ],
      teoria: `
### Sintaxis de Consultas:
\`\`\`sql
-- Seleccionar todos los campos de todos los equipos
SELECT * FROM equipos;

-- Seleccionar columnas específicas con filtro de RAM
SELECT nombre_host, ip, ram_gb 
FROM equipos 
WHERE ram_gb >= 16 AND sistema_operativo LIKE '%Linux%'
ORDER BY nombre_host ASC 
LIMIT 10;
\`\`\`
### Operador \`LIKE\` para búsquedas de texto:
- \`'PC-%'\`: Que empiece por "PC-".
- \`'%SMR%'\`: Que contenga "SMR" en cualquier posición.
      `,
      practica: `
Escribe consultas SQL para:
1. Obtener los nombres de todos los equipos con Windows 11.
2. Contar el número total de equipos registrados en la tabla (\`SELECT COUNT(*) FROM equipos;\`).
      `,
      solucion: "SELECT COUNT(*) FROM equipos; y SELECT nombre_host FROM equipos WHERE sistema_operativo = 'Windows 11';",
      recursos: ["Visor SQLite"]
    },
    {
      id: "s35",
      numero: 35,
      ut: 4,
      evaluacion: 2,
      titulo: "Conexión y Consultas a Bases de Datos desde JavaScript (better-sqlite3)",
      subtema: "4.3 Operaciones básicas sobre bases de datos desde el lenguaje",
      ras: "RA5 (CE5.b, CE5.c, CE5.d, CE5.e)",
      duracion: "1 hora",
      tipo: "Taller de Programación en Node.js",
      objetivos: [
        "Programar la conexión a un archivo SQLite local desde Node.js.",
        "Preparar y ejecutar consultas parametrizadas para evitar ataques de Inyección SQL.",
        "Recuperar los resultados como objetos nativos de JavaScript y mostrarlos en consola."
      ],
      teoria: `
### Conexión con \`better-sqlite3\` en Node.js:
\`\`\`javascript
import Database from 'better-sqlite3';

// 1. Abrir conexión con el archivo de base de datos
const db = new Database('carlos3_redes.db');

// 2. Preparar sentencia con parámetros seguros (?)
const stmtInsert = db.prepare('INSERT INTO equipos (nombre_host, ip) VALUES (?, ?)');
stmtInsert.run('PC-SMR-20', '192.168.1.120');

// 3. Consultar y recuperar todas las filas
const stmtSelect = db.prepare('SELECT * FROM equipos WHERE ip LIKE ?');
const filas = stmtSelect.all('192.168.1.%');

console.log("Equipos encontrados en la subred:");
console.table(filas);

// 4. Cerrar conexión
db.close();
\`\`\`
      `,
      practica: `
Crea un script que conecte a la base de datos, consulte todos los equipos y calcule la media de memoria RAM de los equipos del centro.
      `,
      solucion: "Cálculo de la media iterando sobre filas devueltas por la consulta SQL.",
      recursos: ["Módulo better-sqlite3", "Node.js"]
    },
    {
      id: "s36",
      numero: 36,
      ut: 4,
      evaluacion: 2,
      titulo: "Proyecto Integrador Final: Sistema de Inventario Microinformático y Cierre del Módulo",
      subtema: "Proyecto final y evaluación global",
      ras: "RA4 y RA5 (CE4* y CE5* - Fin del módulo 36h)",
      duracion: "1 hora",
      tipo: "Evaluación Práctica y Exposición",
      objetivos: [
        "Integrar en una aplicación funcional de consola la persistencia en Base de Datos y exportación a fichero JSON/CSV.",
        "Comprobar el cálculo final de calificaciones ponderadas según la normativa oficial de FP.",
        "Presentar las soluciones técnicas y preparar la transición a la Fase de Empresa (FEM 2)."
      ],
      teoria: `
### Requisitos del Proyecto Final de Módulo:
La aplicación debe permitir a un técnico del CIFP Carlos III:
1. Añadir nuevos equipos a la base de datos SQLite con validación de IP y MAC.
2. Listar equipos por aula o sistema operativo.
3. Exportar un informe en fichero de texto \`inventario_carlos3.csv\`.
4. Manejar excepciones con \`try-catch\` ante fallos de disco o datos duplicados.

### Calificación Definitiva:
- Peso en Centro: RA1 (20%) + RA2 (30%) + RA3 (35% Crítico) + RA4 (10%) + RA5 (5%) = 100%.
- Ajuste final tras la fase de prácticas en empresa: **Nota Final = (Nota Centro × 90%) + (FEM 2 × 10%)**.
      `,
      practica: `
Entrega del repositorio del proyecto en Moodle y prueba en directo con la profesora Virginia Zornoza Martínez.
      `,
      solucion: "Proyecto integral que demuestra la consecución de todos los Resultados de Aprendizaje del módulo.",
      recursos: ["Rúbrica de evaluación final", "Calculadora oficial de notas integrada"]
    }
  ],

  // CUESTIONARIO OFICIAL UT1 (RA1) CON PREGUNTAS TIPO TEST FORMATIVAS
  cuestionario_ut1: [
    {
      id: "q1",
      pregunta: "¿Cuál de las siguientes palabras clave de JavaScript se debe utilizar para declarar una variable cuyo valor no volverá a ser reasignado a lo largo del programa?",
      opciones: ["var", "let", "const", "static"],
      correcta: 2,
      explicacion: "En JavaScript moderno (ES6+), 'const' declara una referencia constante que no puede ser reasignada, protegiendo contra errores accidentales."
    },
    {
      id: "q2",
      pregunta: "En un diagrama de flujo estándar (ordinograma), ¿qué símbolo geométrico se utiliza para representar una toma de decisión condicional?",
      opciones: ["Un rectángulo", "Un rombo", "Un óvalo", "Un paralelogramo"],
      correcta: 1,
      explicacion: "El rombo representa la evaluación de una condición lógica con dos o más salidas alternativas (típicamente Sí/No o Verdadero/Falso)."
    },
    {
      id: "q3",
      pregunta: "¿Qué resultado devolverá en la consola de JavaScript la expresión '10' + 5?",
      opciones: ["15", "NaN", "'105'", "TypeError"],
      correcta: 2,
      explicacion: "El operador '+' con una cadena de texto realiza una concatenación implícita de cadenas, convirtiendo el número 5 en texto para producir '105'."
    },
    {
      id: "q4",
      pregunta: "En una tabla de decisión binaria con 3 condiciones independientes (Sí/No), ¿cuántas reglas o columnas de combinaciones existen en total?",
      opciones: ["3 reglas", "6 reglas", "8 reglas", "9 reglas"],
      correcta: 2,
      explicacion: "El número de reglas posibles ante n condiciones binarias es 2^n. Por tanto, 2^3 = 8 combinaciones posibles."
    },
    {
      id: "q5",
      pregunta: "¿Qué diferencia fundamental existe entre un lenguaje compilado como C y un lenguaje interpretado con motor JIT como JavaScript?",
      opciones: [
        "El compilado genera un archivo binario nativo ejecutable antes de correr; el interpretado/JIT procesa y compila dinámicamente en tiempo de ejecución.",
        "Los lenguajes compilados no admiten variables de texto.",
        "JavaScript solo funciona en sistemas operativos Windows.",
        "Los lenguajes interpretados son siempre más rápidos que los compilados."
      ],
      correcta: 0,
      explicacion: "Los lenguajes compilados traducen todo el código fuente a código máquina previamente, mientras que JavaScript es interpretado y compilado al vuelo (JIT) por el motor V8."
    },
    {
      id: "q6",
      pregunta: "En Scratch, ¿cuál es la coordenada del centro exacto del escenario visual?",
      opciones: ["(x: 100, y: 100)", "(x: 0, y: 0)", "(x: -240, y: -180)", "(x: 240, y: 180)"],
      correcta: 1,
      explicacion: "El origen del sistema cartesiano en Scratch está ubicado en el centro exacto de la pantalla: (0, 0)."
    },
    {
      id: "q7",
      pregunta: "¿Qué operador de comparación estricta en JavaScript comprueba que dos valores sean iguales tanto en valor como en tipo de dato?",
      opciones: ["==", "=", "===", "!="],
      correcta: 2,
      explicacion: "El operador '===' es la igualdad estricta: comprueba que el valor y el tipo coincidan exactamente sin realizar coerción implícita."
    },
    {
      id: "q8",
      pregunta: "En la programación didáctica del módulo en el CIFP Carlos III, ¿cuántas faltas de asistencia suponen la pérdida de evaluación continua en la 1ª Evaluación (26 horas lectivas)?",
      opciones: ["4 faltas", "6 faltas", "8 faltas", "12 faltas"],
      correcta: 2,
      explicacion: "Según la Orden de 1 de junio de 2006 y la programación didáctica, el límite es el 30% del total de horas lectivas de la evaluación: 8 faltas en la 1ª Ev (26h) y 3 faltas en la 2ª Ev (10h)."
    },
    {
      id: "q9",
      pregunta: "¿Qué resultado de aprendizaje (RA) está calificado como CRÍTICO en la empresa y módulo, teniendo el mayor peso (35%) en la nota?",
      opciones: ["RA1 (UT1)", "RA2 (UT3)", "RA3 (UT2 - Estructuras de Control)", "RA4 (UT4)"],
      correcta: 2,
      explicacion: "El RA3 (Estructuras de Control) tiene un 35% de peso y está marcado como crítico (☒ en empresa). Si no se supera, la nota máxima del módulo es un 4."
    },
    {
      id: "q10",
      pregunta: "¿Qué función nativa de JavaScript permite convertir explícitamente una cadena de texto a un número decimal o entero?",
      opciones: ["ToString()", "Number() o parseInt()", "Convert.ToNumber()", "Math.toNumber()"],
      correcta: 1,
      explicacion: "La función global Number() o parseInt() convierte cadenas numéricas al tipo Number primitivo de forma explícita."
    }
  ]
};

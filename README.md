# Fundamentos de Programación - 2º FP Grado Medio (SMR)
## CIFP Carlos III (Cartagena) | Curso Académico 2026 - 2027
**Profesora Responsable:** Virginia Zornoza Martínez  
**Horas Totales Programadas:** 36 horas lectivas (Sesiones de 1 hora)  
**Distribución:** 1ª Evaluación (26 horas) • 2ª Evaluación (10 horas)

---

## 🚀 Descripción de la Aplicación Web

Aplicación web didáctica interactiva diseñada específicamente para el módulo profesional de **Fundamentos de Programación** del ciclo formativo de grado medio **Sistemas Microinformáticos y Redes (SMR)** en el **CIFP Carlos III** de Cartagena.

La plataforma desarrolla el currículo oficial sesión por sesión (36 sesiones de 1 hora lectiva cada una), con herramientas interactivas integradas, simuladores, editores de código en tiempo real y gestión curricular docente.

---

## 📌 Estructura Curricular por Unidades de Trabajo

| Unidad | Título | Horas | Ev. | RA Asociado | Ponderación | Carácter |
| :---: | :--- | :---: | :---: | :--- | :---: | :---: |
| **UT 1** | **INTRODUCCIÓN A LA PROGRAMACIÓN** | 10 h | 1ª | **RA1 (CE1\*)** | 20% | Ordinario |
| **UT 2** | **ESTRUCTURAS DE CONTROL** | 10 h | 1ª | **RA3 (CE3\*)** | 35% | **CRÍTICO ☒** |
| **UT 3** | **FUNCIONES Y ESTRUCTURAS DE DATOS** | 6 h | 1ª | **RA2 (CE2\*)** | 30% | Ordinario |
| **UT 4** | **FICHEROS Y BASES DE DATOS** | 10 h | 2ª | **RA4 (CE4\*) y RA5 (CE5\*)** | 10% + 5% | Ordinario |
| **Total** | **4 Unidades de Trabajo** | **36 h** | - | **RA1 a RA5** | **100%** | - |

---

## 🛠️ Herramientas y Ejercicios Interactivos Oficiales

1. **Laboratorio del DOM y Condicionales (UT2 - Sesión 11):** Simulador visual interactivo que demuestra la captura de elementos HTML mediante `document.getElementById()`, lectura con `.value`, conversión con `Number()`, evaluación condicional con `if / if-else` y modificación del DOM (`.textContent`, `.style`). Incluye escenarios técnicos reales de SMR (IPs locales, puertos HTTP/HTTPS y alertas de seguridad).
2. **Scratch (UT1 - Sesión 07):** Mini-juego interactivo de canvas jugable con personaje saltador que esquiva un objeto móvil en bucle lateral con detección de colisiones, puntuación y récord, acompañado de la transcripción de bloques de Scratch.
3. **Pseudocódigo (UT1 - Sesión 03):** Calculadora estructurada interactiva con traza en consola: petición de 2 números, selección de 4 operaciones (+, -, \*, /) y control de división entre cero.
4. **Diagrama de Flujo (UT1 - Sesión 04):** Ordinograma interactivo con simbología ISO (óvalos de inicio/fin, paralelogramos de lectura, rombo de decisión, rectángulos de proceso y formas de documento onduladas para escribir) para el cálculo de número par/impar (`num MOD 2`).
5. **Tabla de Decisión Binaria (UT1 - Sesión 05):** Matriz interactiva de $2^2 = 4$ reglas lógicas para el diagnóstico de conectividad de red local (cable conectado vs. asignación de IP por DHCP).
6. **Cuestionario Oficial UT1 (UT1 - Sesión 10):** Batería de 10 preguntas tipo test con corrección automática, justificación pedagógica inmediata y calificación sobre 10.

---

## 👥 Modos de Usuario y Acceso

- **Modo Alumno / Visitante:** Acceso libre sin registro. Permite consultar toda la programación, leer los contenidos teóricos de las 36 sesiones, ejecutar todos los ejercicios prácticos interactivos, utilizar la consola de JavaScript y realizar el cuestionario de autoevaluación.
- **Modo Docente (Profesora Virginia Zornoza Martínez):**
  - Botón **🔑 Acceso Docente** en el encabezado.
  - Clave predeterminada: `carlos3fp` (o `carlos3`).
  - Permite retocar en vivo cualquier sesión, modificar enunciados, actualizar soluciones y añadir notas técnicas.
  - Persistencia automática de los cambios en `localStorage`.
  - Herramientas de **Exportar Respaldo JSON**, **Importar Respaldo** y **Restaurar de Fábrica**.

---

## 🧮 Calculadora Oficial de Calificaciones

Accesible desde el encabezado o la barra lateral, implementa con total fidelidad la normativa de evaluación:
- **Ponderación por RA:** RA1 (20%), RA2 (30%), RA3 (35% Crítico), RA4 (10%), RA5 (5%).
- **Instrumentos por RA:** Exámenes (60%), Tareas individuales (30%), Cuestionarios (10%).
- **Regla del mínimo 5.0 en examen:** Si la prueba objetiva es menor de 5, no se promedian tareas ni cuestionarios.
- **Tope de 4.0:** Si se suspende el RA crítico (RA3) o 2 o más RAs no críticos, la nota final de centro queda topada en 4.0.
- **Ajuste 90/10 con Fase de Empresa (FEM 2):** `Nota Final = (Centro × 90%) + (Empresa × 10%)`.
- **Control de Faltas:** Límite del 30% (máximo 8 faltas en 1ª Ev y 3 faltas en 2ª Ev).

---

## 💻 Cómo Ejecutar la Aplicación

No requiere ninguna instalación previa ni servidor web complejo. 
Basta con abrir el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.):

```bash
# Opción 1: Doble clic en index.html

# Opción 2: Servidor local ligero (si se desea)
npx serve .
# o con Python:
python -m http.server 8000
```

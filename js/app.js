/**
 * APLICACIÓN DIDÁCTICA: FUNDAMENTOS DE PROGRAMACIÓN
 * CIFP Carlos III - Cartagena | 2º SMR
 * Profesora: Virginia Zornoza Martínez
 */

// Estado global de la aplicación
const AppState = {
  currentView: 'home', // 'home' | 'unidad' | 'sesion' | 'calculadora'
  currentUnit: 1,
  currentSessionId: 's01',
  isTeacher: false,
  isSidebarCollapsed: false,
  customData: null,
  scratchGame: {
    isRunning: false,
    score: 0,
    highScore: 0,
    catY: 150,
    catVelocityY: 0,
    isJumping: false,
    obstacleX: 450,
    obstacleSpeed: 5,
    animationId: null
  }
};

// Inicialización de datos persistentes desde localStorage
function cargarDatosPersonalizados() {
  try {
    const saved = localStorage.getItem('carlos3_fp_data');
    if (saved) {
      AppState.customData = JSON.parse(saved);
    } else {
      AppState.customData = JSON.parse(JSON.stringify(CURRICULO_DATA));
    }
  } catch (e) {
    console.error("Error al cargar datos locales:", e);
    AppState.customData = JSON.parse(JSON.stringify(CURRICULO_DATA));
  }

  // Comprobar sesión de profesor previa
  if (sessionStorage.getItem('carlos3_profesor_activo') === 'true') {
    AppState.isTeacher = true;
  }
}

// Guardar cambios en localStorage
function guardarDatosEnLocal() {
  try {
    localStorage.setItem('carlos3_fp_data', JSON.stringify(AppState.customData));
  } catch (e) {
    alert("Error al almacenar en localStorage: " + e.message);
  }
}

// Renderizado inicial al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  cargarDatosPersonalizados();
  inicializarUI();
  renderizarSidebar();
  navegarA('home');
  inicializarEventosGlobales();
});

// Inicialización de interfaz y temas
function inicializarUI() {
  // Tema oscuro persistente
  if (localStorage.getItem('carlos3_dark_theme') === 'true') {
    document.body.classList.add('dark-theme');
    const themeBtn = document.getElementById('btnToggleTheme');
    if (themeBtn) themeBtn.innerHTML = '☀️ Modo Claro';
  }

  // Estado del botón docente
  actualizarBotonDocente();
}

// Actualizar aspecto de botón docente en el encabezado
function actualizarBotonDocente() {
  const btn = document.getElementById('btnLoginDocente');
  if (!btn) return;

  if (AppState.isTeacher) {
    btn.classList.add('btn-docente-active');
    btn.innerHTML = '🔒 Sesión Docente (Activa)';
    btn.title = 'Sesión iniciada como Virginia Zornoza Martínez. Clic para cerrar o editar.';
  } else {
    btn.classList.remove('btn-docente-active');
    btn.innerHTML = '🔑 Acceso Docente';
    btn.title = 'Acceso con clave para edición de contenidos';
  }
}

// ==========================================================================
// RENDERIZADO DEL SIDEBAR CON 36 SESIONES Y UNIDADES
// ==========================================================================
function renderizarSidebar() {
  const navContainer = document.getElementById('sidebarNavContainer');
  if (!navContainer) return;

  const data = AppState.customData;
  let html = `
    <div class="nav-section-title">Programación Oficial</div>
    <div class="nav-link ${AppState.currentView === 'home' ? 'active' : ''}" onclick="navegarA('home')">
      <span>📋 Programación y Normativa</span>
      <span class="nav-badge-pill">36h</span>
    </div>
    <div class="nav-link ${AppState.currentView === 'calculadora' ? 'active' : ''}" onclick="navegarA('calculadora')">
      <span>🧮 Calculadora de Calificaciones</span>
      <span class="nav-badge-pill">FP</span>
    </div>

    <div class="nav-section-title" style="margin-top: 1rem;">Unidades de Trabajo (36h)</div>
  `;

  // Renderizar cada Unidad con sus sesiones
  data.unidades.forEach(ut => {
    const sesionesUT = data.sesiones.filter(s => s.ut === ut.numero);
    const isOpen = (AppState.currentUnit === ut.numero && (AppState.currentView === 'unidad' || AppState.currentView === 'sesion'));

    html += `
      <div class="unit-accordion ${isOpen ? 'open' : ''}" id="accordion-ut${ut.numero}">
        <button class="unit-header-btn" onclick="toggleAccordion(${ut.numero})">
          <span><strong>UT${ut.numero}:</strong> ${ut.titulo}</span>
          <span class="nav-badge-pill">${ut.horas}h</span>
        </button>
        <div class="unit-sessions-list">
          <div class="session-nav-item" onclick="navegarAUnidad(${ut.numero})" style="font-weight: 600; color: #38bdf8;">
            📑 Resumen y Objetivos UT${ut.numero}
          </div>
          ${sesionesUT.map(s => `
            <div class="session-nav-item ${AppState.currentSessionId === s.id && AppState.currentView === 'sesion' ? 'active' : ''}" 
                 onclick="navegarASesion('${s.id}')" title="Sesión ${s.numero}: ${s.titulo}">
              <strong>S${s.numero < 10 ? '0' + s.numero : s.numero}:</strong> ${s.titulo}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  navContainer.innerHTML = html;
}

function toggleAccordion(utNum) {
  const acc = document.getElementById(`accordion-ut${utNum}`);
  if (acc) {
    acc.classList.toggle('open');
  }
}

// Alternar visibilidad de la barra lateral
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('btnToggleSidebar');
  
  if (!sidebar) return;

  AppState.isSidebarCollapsed = !AppState.isSidebarCollapsed;
  if (AppState.isSidebarCollapsed) {
    sidebar.classList.add('collapsed');
    if (toggleBtn) toggleBtn.innerHTML = '☰ Mostrar Menú';
  } else {
    sidebar.classList.remove('collapsed');
    if (toggleBtn) toggleBtn.innerHTML = '◀ Ocultar Menú';
  }
}

// ==========================================================================
// CONTROL DE NAVEGACIÓN PRINCIPAL
// ==========================================================================
function navegarA(vista) {
  AppState.currentView = vista;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (vista === 'home') {
    renderizarVistaHome();
  } else if (vista === 'calculadora') {
    renderizarVistaCalculadora();
  }
  renderizarSidebar();
}

function navegarAUnidad(utNum) {
  AppState.currentView = 'unidad';
  AppState.currentUnit = utNum;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderizarVistaUnidad(utNum);
  renderizarSidebar();
}

function navegarASesion(sessionId) {
  AppState.currentView = 'sesion';
  AppState.currentSessionId = sessionId;
  const sesion = AppState.customData.sesiones.find(s => s.id === sessionId);
  if (sesion) {
    AppState.currentUnit = sesion.ut;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderizarVistaSesion(sessionId);
  renderizarSidebar();
}

// ==========================================================================
// VISTA: PROGRAMACIÓN DIDÁCTICA COMPLETA (HOME)
// ==========================================================================
function renderizarVistaHome() {
  const content = document.getElementById('mainContentArea');
  const data = AppState.customData;
  const ctx = data.info.contexto;

  content.innerHTML = `
    <!-- Banner de Encabezado de la Programación -->
    <div class="hero-banner">
      <div class="hero-title">${data.info.modulo}</div>
      <div class="hero-subtitle">
        Ciclo Formativo de Grado Medio: <strong>${data.info.ciclo}</strong> (2º Curso) <br>
        Centro Integrado de Formación Profesional <strong>${data.info.centro}</strong> (${data.info.localidad}) <br>
        Profesora Responsable: <strong>${data.info.profesora}</strong> | Curso Académico: <strong>${data.info.curso_academico}</strong>
      </div>

      <div class="hero-stats-grid">
        <div class="hero-stat-card">
          <div class="hero-stat-number">${data.info.horas_totales} h</div>
          <div class="hero-stat-label">Horas Totales Programadas</div>
        </div>
        <div class="hero-stat-card">
          <div class="hero-stat-number">26 h / 10 h</div>
          <div class="hero-stat-label">1ª Ev (26h) / 2ª Ev (10h)</div>
        </div>
        <div class="hero-stat-card">
          <div class="hero-stat-number">4 UTs</div>
          <div class="hero-stat-label">Unidades de Trabajo</div>
        </div>
        <div class="hero-stat-card">
          <div class="hero-stat-number">RA3 (35%)</div>
          <div class="hero-stat-label">RA Crítico en Empresa</div>
        </div>
      </div>
    </div>

    <!-- Acceso Rápido a las 4 Unidades -->
    <h2 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 1rem; color: var(--text-main);">
      📦 Estructura de Unidades de Trabajo
    </h2>
    <div class="units-grid">
      ${data.unidades.map(ut => `
        <div class="unit-card" onclick="navegarAUnidad(${ut.numero})">
          <div class="unit-card-header">
            <span class="unit-badge">UT ${ut.numero} • ${ut.horas} Sesiones (1h)</span>
            <span style="font-size: 0.75rem; font-weight: 700; color: #64748b;">${ut.evaluacion}ª Evaluación</span>
          </div>
          <div class="unit-card-title">${ut.titulo}</div>
          <div class="unit-card-ra">🎯 ${ut.ra}</div>
          <div class="unit-card-desc">${ut.descripcion}</div>
          <button class="btn-pager" style="width: 100%; justify-content: center; padding: 0.5rem;">
            Ver Sesiones Detalladas ➔
          </button>
        </div>
      `).join('')}
    </div>

    <!-- 1.2 Contextualización y Alumnado -->
    <div class="card">
      <div class="card-header-flex">
        <div class="card-title-lg">📍 1.2 Contextualización y Entorno Productivo</div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
        <div>
          <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--primary-accent);">
            1.2.1 Alumnado de SMR en CIFP Carlos III
          </h4>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.7;">
            ${ctx.alumnado}
          </p>
        </div>
        <div>
          <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--secondary);">
            1.2.2 Entorno Productivo y Memoria Docente
          </h4>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 0.75rem;">
            ${ctx.entorno}
          </p>
          <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 0.65rem 0.9rem; border-radius: 4px; font-size: 0.85rem; color: #92400e;">
            <strong>Propuestas de la Memoria del Curso Anterior:</strong> ${ctx.memoria_curso_anterior}
          </div>
        </div>
      </div>
    </div>

    <!-- 2. Objetivos, Normativa y Competencias -->
    <div class="card">
      <div class="card-header-flex">
        <div class="card-title-lg">⚖️ 2. Referencias Normativas y Competencias</div>
      </div>
      
      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem;">2.1 Marco Normativo Aplicable</h4>
        <ul style="padding-left: 1.5rem; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
          ${ctx.normativa.map(n => `<li>${n}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem;">2.2 Competencia General del Ciclo (Art. 4 RD 1691/2007)</h4>
        <p style="background: #f1f5f9; padding: 0.75rem 1rem; border-radius: 6px; font-style: italic; font-size: 0.9rem; color: #334155;">
          "${ctx.competencia_general}"
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem;">
        <div>
          <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--primary);">
            2.3 Competencias Profesionales Asociadas al Módulo
          </h4>
          <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem;">
            ${ctx.competencias_modulo.map(c => `
              <div style="padding: 0.35rem 0.6rem; background: var(--bg-main); border-radius: 4px; border-left: 3px solid var(--primary-light);">
                <strong>${c.letra})</strong> ${c.texto}
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--secondary);">
            2.4 Objetivos Generales del Ciclo
          </h4>
          <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem;">
            ${ctx.objetivos_generales.map(o => `
              <div style="padding: 0.35rem 0.6rem; background: var(--bg-main); border-radius: 4px; border-left: 3px solid var(--secondary);">
                <strong>${o.letra})</strong> ${o.texto}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- 4. Sistema de Evaluación y Ponderaciones Oficiales -->
    <div class="card">
      <div class="card-header-flex">
        <div class="card-title-lg">📊 4. Evaluación, Resultados de Aprendizaje y Criterios</div>
        <button class="btn-action-primary" onclick="navegarA('calculadora')">
          🧮 Abrir Simulador de Calificaciones
        </button>
      </div>

      <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 1rem;">
        La calificación en la fase de centro se obtiene mediante la media ponderada de los Resultados de Aprendizaje demostrados. 
        <strong>Importante:</strong> El <strong>RA3 es Crítico</strong>; si no se supera (mínimo 5.0) o si se suspenden 2 o más RAs no críticos, la nota final de la fase de centro será como máximo un <strong>4</strong>.
      </p>

      <div style="overflow-x: auto; margin-bottom: 1.5rem;">
        <table class="decision-table">
          <thead>
            <tr>
              <th style="text-align: left;">Resultado de Aprendizaje (RA)</th>
              <th>Unidad</th>
              <th>Horas</th>
              <th>Peso (%)</th>
              <th>Crítico en Empresa</th>
              <th>Criterios Evaluados</th>
            </tr>
          </thead>
          <tbody>
            ${data.info.resultados_aprendizaje.map(ra => `
              <tr>
                <td style="text-align: left; font-weight: 600;">
                  <span style="color: var(--primary);">${ra.id}:</span> ${ra.titulo}
                </td>
                <td><span class="unit-badge">${ra.unidad}</span></td>
                <td><strong>${ra.unidad === 'UT1' ? '10' : ra.unidad === 'UT2' ? '10' : ra.unidad === 'UT3' ? '6' : '10'} h</strong></td>
                <td><span style="font-size: 1rem; font-weight: 800; color: ${ra.peso >= 30 ? '#dc2626' : '#2563eb'};">${ra.peso}%</span></td>
                <td>
                  ${ra.critico_empresa ? '<span style="color: #dc2626; font-weight: 800; background: #fee2e2; padding: 0.2rem 0.5rem; border-radius: 4px;">☒ SÍ (Crítico)</span>' : '<span style="color: #64748b;">☐ No</span>'}
                </td>
                <td style="font-size: 0.8rem; text-align: left;">
                  ${ra.criterios.map(c => `<code>CE${ra.id.replace('RA','')}.${c.letra}</code>`).join(' ')}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Instrumentos y Faltas de Asistencia -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
        <div style="background: #f8fafc; border: 1px solid var(--border); border-radius: 8px; padding: 1rem;">
          <h4 style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.5rem;">🎯 Instrumentos de Evaluación (Por cada RA)</h4>
          <ul style="font-size: 0.88rem; list-style: none; display: flex; flex-direction: column; gap: 0.4rem;">
            <li>📝 <strong>Pruebas objetivas (Exámenes):</strong> 60% (Exige nota mínima de 5/10 para promediar)</li>
            <li>💻 <strong>Tareas individuales de código:</strong> 30%</li>
            <li>📋 <strong>Cuestionarios en Moodle:</strong> 10%</li>
          </ul>
        </div>

        <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 1rem;">
          <h4 style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.5rem; color: #b91c1c;">
            ⚠️ Control de Asistencia (Límite 30% de Faltas)
          </h4>
          <ul style="font-size: 0.88rem; list-style: none; display: flex; flex-direction: column; gap: 0.4rem; color: #991b1b;">
            <li>• <strong>1ª Evaluación (26 horas lectivas):</strong> Máximo <strong>8 faltas</strong>.</li>
            <li>• <strong>2ª Evaluación (10 horas lectivas):</strong> Máximo <strong>3 faltas</strong>.</li>
            <li>• La superación de este límite supone la pérdida del derecho a la evaluación continua.</li>
          </ul>
        </div>

        <div style="background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 1rem;">
          <h4 style="font-weight: 700; font-size: 0.95rem; margin-bottom: 0.5rem; color: #065f46;">
            🏢 Ajuste con Fase de Empresa (FEM 2)
          </h4>
          <p style="font-size: 0.88rem; color: #047857; line-height: 1.5;">
            Fase Centro aprobada (5-10) + FEM 2 superada: <br>
            <strong>Nota Final = (Nota Centro × 90%) + (FEM 2 × 10%)</strong> <br>
            <span style="font-size: 0.8rem;">Calificación definitiva sin decimales (redondeo al alza desde 0.5).</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Actividades Complementarias -->
    <div class="card">
      <div class="card-header-flex">
        <div class="card-title-lg">🚀 Actividades Complementarias y Extraescolares (Dpto. Informática)</div>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
        ${ctx.actividades_extraescolares.map(act => `
          <div style="border: 1px solid var(--border); border-radius: 6px; padding: 0.85rem; background: var(--bg-card);">
            <div style="font-size: 0.78rem; font-weight: 700; color: var(--primary-light); text-transform: uppercase;">${act.fecha}</div>
            <div style="font-size: 0.92rem; font-weight: 600; color: var(--text-main); margin-top: 0.25rem;">${act.evento}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ==========================================================================
// VISTA: RESUMEN DE UNIDAD DE TRABAJO (UT)
// ==========================================================================
function renderizarVistaUnidad(utNum) {
  const content = document.getElementById('mainContentArea');
  const data = AppState.customData;
  const ut = data.unidades.find(u => u.numero === utNum);
  const sesiones = data.sesiones.filter(s => s.ut === utNum);

  content.innerHTML = `
    <div class="session-header-card" style="margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <span class="session-number-badge">Unidad de Trabajo ${ut.numero}</span>
        <span class="unit-badge">${ut.horas} Horas Programadas • ${ut.evaluacion}ª Evaluación</span>
      </div>
      <h1 class="session-title-main">${ut.titulo}</h1>
      <p style="font-size: 1.05rem; color: var(--text-muted); margin-bottom: 1rem;">${ut.descripcion}</p>
      
      <div class="session-meta-chips">
        <span class="chip chip-ra">🎯 ${ut.ra}</span>
        <span class="chip">⏱ 1 hora por sesión lectiva</span>
        <span class="chip">📚 Aula Informática CIFP Carlos III</span>
      </div>
    </div>

    <!-- Lista de Sesiones de la Unidad -->
    <h2 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 1rem;">
      📅 Sesiones Lectivas Desarrolladas (${sesiones.length} sesiones)
    </h2>
    
    <div style="display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 2rem;">
      ${sesiones.map(s => `
        <div class="card" style="padding: 1.25rem; margin-bottom: 0; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 1rem;" 
             onclick="navegarASesion('${s.id}')">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="background: var(--primary); color: #fff; width: 44px; height: 44px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; flex-shrink: 0;">
              ${s.numero}
            </div>
            <div>
              <div style="font-size: 1.05rem; font-weight: 700; color: var(--text-main);">
                ${s.titulo}
              </div>
              <div style="font-size: 0.82rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.75rem; margin-top: 0.2rem;">
                <span><strong>Tema:</strong> ${s.subtema}</span>
                <span>•</span>
                <span style="color: var(--primary-accent); font-weight: 600;">${s.ras}</span>
                <span>•</span>
                <span class="chip" style="padding: 0.1rem 0.4rem; font-size: 0.72rem;">${s.tipo}</span>
              </div>
            </div>
          </div>
          <button class="btn-pager" style="flex-shrink: 0; padding: 0.4rem 0.8rem; font-size: 0.82rem;">
            Ver Contenido ➔
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

// ==========================================================================
// VISTA: DETALLE DE SESIÓN INDIVIDUAL (1 a 36) CON HERRAMIENTAS INTERACTIVAS
// ==========================================================================
function renderizarVistaSesion(sessionId) {
  const content = document.getElementById('mainContentArea');
  const data = AppState.customData;
  const sesion = data.sesiones.find(s => s.id === sessionId);
  if (!sesion) return;

  const totalSesiones = data.sesiones.length;
  const currentIndex = data.sesiones.findIndex(s => s.id === sessionId);
  const prevSession = currentIndex > 0 ? data.sesiones[currentIndex - 1] : null;
  const nextSession = currentIndex < totalSesiones - 1 ? data.sesiones[currentIndex + 1] : null;

  // Convertir markdown básico a HTML
  const formatMarkdown = (text) => {
    if (!text) return '';
    return text
      .replace(/^### (.*$)/gim, '<h3 style="font-size: 1.15rem; font-weight: 700; margin: 1.25rem 0 0.5rem 0; color: var(--primary-accent);">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 style="font-size: 1.3rem; font-weight: 800; margin: 1.5rem 0 0.75rem 0;">$1</h2>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/```javascript([\s\S]*?)```/g, '<pre><code class="language-javascript">$1</code></pre>')
      .replace(/```sql([\s\S]*?)```/g, '<pre><code class="language-sql">$1</code></pre>')
      .replace(/```csv([\s\S]*?)```/g, '<pre><code class="language-csv">$1</code></pre>')
      .replace(/```text([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n\n/g, '<br><br>');
  };

  let interactivoHtml = '';

  // Renderizar componente interactivo correspondiente
  if (sesion.interactivo === 'calculadora_pseudocodigo') {
    interactivoHtml = generarComponenteCalculadoraPseudocodigo();
  } else if (sesion.interactivo === 'diagrama_flujo') {
    interactivoHtml = generarComponenteDiagramaFlujo();
  } else if (sesion.interactivo === 'tabla_decision') {
    interactivoHtml = generarComponenteTablaDecision();
  } else if (sesion.interactivo === 'scratch_minigame') {
    interactivoHtml = generarComponenteScratch();
  } else if (sesion.interactivo === 'cuestionario_ut1') {
    interactivoHtml = generarComponenteCuestionarioUT1();
  } else if (sesion.interactivo === 'consola_js') {
    interactivoHtml = generarComponenteConsolaJS();
  }

  content.innerHTML = `
    <div class="session-detail-container">
      <!-- Encabezado de Sesión -->
      <div class="session-header-card">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <span class="session-number-badge">Sesión ${sesion.numero} de ${totalSesiones} • UT${sesion.ut}</span>
          <div style="display: flex; gap: 0.5rem;">
            ${AppState.isTeacher ? `
              <button class="btn-header" style="background: #2563eb; color: #fff;" onclick="abrirModalEditorSesion('${sesion.id}')">
                ✏️ Editar Contenido (Docente)
              </button>
            ` : ''}
            <button class="btn-header" style="background: var(--bg-main); color: var(--text-main);" onclick="window.print()">
              🖨 Imprimir Sesión
            </button>
          </div>
        </div>

        <h1 class="session-title-main">${sesion.titulo}</h1>
        
        <div class="session-meta-chips">
          <span class="chip">📖 Subtema: ${sesion.subtema}</span>
          <span class="chip chip-ra">🎯 ${sesion.ras}</span>
          <span class="chip">⏱ ${sesion.duracion}</span>
          <span class="chip">📌 Modalidad: ${sesion.tipo}</span>
          ${sesion.ut === 2 ? '<span class="chip chip-critico">⚠️ RA Crítico (35%)</span>' : ''}
        </div>
      </div>

      <!-- Objetivos Específicos de la Sesión de 1h -->
      <div class="session-section-box">
        <div class="section-box-title">🎯 Objetivos de la Sesión (1 Hora)</div>
        <ul class="objectives-list">
          ${sesion.objetivos.map(obj => `<li>${obj}</li>`).join('')}
        </ul>
      </div>

      <!-- Contenidos Teóricos y Conceptos -->
      <div class="session-section-box">
        <div class="section-box-title">📘 Desarrollo Teórico y Fundamentos</div>
        <div style="font-size: 0.95rem; line-height: 1.7; color: var(--text-main);">
          ${formatMarkdown(sesion.teoria)}
        </div>
      </div>

      <!-- Componente Interactivo Especial (si existe para esta sesión) -->
      ${interactivoHtml}

      <!-- Actividad Práctica de Aula o Taller -->
      <div class="session-section-box" style="border-left: 5px solid #2563eb;">
        <div class="section-box-title" style="color: #2563eb;">💻 Actividad Práctica en Aula Informática</div>
        <div style="font-size: 0.95rem; line-height: 1.7; color: var(--text-main);">
          ${formatMarkdown(sesion.practica)}
        </div>

        <!-- Solución o Guía Técnica Desplegable -->
        ${sesion.solucion ? `
          <div class="solution-toggle-box">
            <button class="btn-toggle-solution" onclick="toggleSolucion('${sesion.id}')">
              <span>💡 Ver Solución Orientativa / Pauta de Corrección</span>
              <span id="solArrow-${sesion.id}">▼</span>
            </button>
            <div class="solution-content-inner" id="solContent-${sesion.id}">
              ${formatMarkdown(sesion.solucion)}
            </div>
          </div>
        ` : ''}
      </div>

      <!-- Recursos Didácticos y Bibliografía -->
      <div class="session-section-box" style="background: var(--bg-main);">
        <div class="section-box-title" style="font-size: 1.05rem;">🔗 Recursos y Enlaces de Apoyo</div>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${sesion.recursos.map(r => `
            <span class="chip" style="background: var(--bg-card); border: 1px solid var(--border);">
              📁 ${r}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Paginador Anterior / Siguiente -->
      <div class="session-pager">
        ${prevSession ? `
          <button class="btn-pager" onclick="navegarASesion('${prevSession.id}')">
            ◀ S${prevSession.numero}: ${prevSession.titulo.substring(0, 30)}...
          </button>
        ` : '<div></div>'}

        <button class="btn-pager" onclick="navegarAUnidad(${sesion.ut})">
          📑 Índice de la UT${sesion.ut}
        </button>

        ${nextSession ? `
          <button class="btn-pager" onclick="navegarASesion('${nextSession.id}')">
            S${nextSession.numero}: ${nextSession.titulo.substring(0, 30)}... ▶
          </button>
        ` : '<div></div>'}
      </div>
    </div>
  `;

  // Inicializar listeners específicos de los componentes interactivos
  if (sesion.interactivo === 'scratch_minigame') {
    inicializarScratchMiniGame();
  }
}

function toggleSolucion(sessionId) {
  const content = document.getElementById(`solContent-${sessionId}`);
  const arrow = document.getElementById(`solArrow-${sessionId}`);
  if (content && arrow) {
    const isShowing = content.classList.contains('show');
    if (isShowing) {
      content.classList.remove('show');
      arrow.textContent = '▼';
    } else {
      content.classList.add('show');
      arrow.textContent = '▲';
    }
  }
}

// ==========================================================================
// COMPONENTES INTERACTIVOS REQUERIDOS EN LA UT1
// ==========================================================================

// 1. CALCULADORA INTERACTIVA DE PSEUDOCÓDIGO (S03)
function generarComponenteCalculadoraPseudocodigo() {
  return `
    <div class="interactive-calc-box">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: #166534;">
          🧪 Ejercicio Oficial: Calculadora Interactiva de Pseudocódigo
        </h3>
        <span class="unit-badge" style="background: #dcfce7; color: #15803d;">Ejercicio Práctico UT1</span>
      </div>
      <p style="font-size: 0.9rem; color: #14532d; margin-bottom: 1rem;">
        Pide dos números y evalúa la operación elegida (1. Suma, 2. Resta, 3. Multiplicación, 4. División) controlando la división entre cero.
      </p>

      <div class="calc-inputs-grid">
        <div class="input-group">
          <label>Primer Número (num1):</label>
          <input type="number" id="calcNum1" class="input-field" value="25">
        </div>
        <div class="input-group">
          <label>Segundo Número (num2):</label>
          <input type="number" id="calcNum2" class="input-field" value="5">
        </div>
        <div class="input-group">
          <label>Seleccionar Operación:</label>
          <select id="calcOperacion" class="input-field">
            <option value="1">1. Sumar (+)</option>
            <option value="2">2. Restar (-)</option>
            <option value="3">3. Multiplicar (*)</option>
            <option value="4">4. Dividir (/)</option>
          </select>
        </div>
      </div>

      <button class="btn-action-primary" onclick="ejecutarCalculadoraPseudocodigo()">
        ▶ Ejecutar Algoritmo Paso a Paso
      </button>

      <div class="pseudocode-log-box" id="calcLogBox">
[Consola de Ejecución del Algoritmo]:
Pulse 'Ejecutar Algoritmo' para iniciar la traza en pseudocódigo...
      </div>
    </div>
  `;
}

function ejecutarCalculadoraPseudocodigo() {
  const num1 = parseFloat(document.getElementById('calcNum1').value);
  const num2 = parseFloat(document.getElementById('calcNum2').value);
  const operacion = document.getElementById('calcOperacion').value;
  const logBox = document.getElementById('calcLogBox');

  if (isNaN(num1) || isNaN(num2)) {
    logBox.textContent = "Error: Por favor, introduce dos valores numéricos válidos.";
    return;
  }

  let log = `> INICIO Algoritmo CalculadoraBasica\n`;
  log += `> Leer num1: ${num1}\n`;
  log += `> Leer num2: ${num2}\n`;
  log += `> Leer operacion: Opción ${operacion}\n`;

  let resultado;
  let simbolo;

  switch (operacion) {
    case '1':
      resultado = num1 + num2;
      simbolo = "+";
      log += `> Rama Segun 1: resultado <- ${num1} + ${num2}\n`;
      break;
    case '2':
      resultado = num1 - num2;
      simbolo = "-";
      log += `> Rama Segun 2: resultado <- ${num1} - ${num2}\n`;
      break;
    case '3':
      resultado = num1 * num2;
      simbolo = "*";
      log += `> Rama Segun 3: resultado <- ${num1} * ${num2}\n`;
      break;
    case '4':
      simbolo = "/";
      log += `> Evaluando: ¿num2 != 0? -> ${num2} !== 0 (${num2 !== 0 ? 'Verdadero' : 'Falso'})\n`;
      if (num2 === 0) {
        log += `> ALERTA: No es posible dividir entre cero (Indeterminación matemática).\n`;
        log += `> FIN Algoritmo con código de error.\n`;
        logBox.textContent = log;
        return;
      }
      resultado = (num1 / num2);
      log += `> Rama Segun 4: resultado <- ${num1} / ${num2}\n`;
      break;
  }

  log += `> Escribir "El resultado final de ${num1} ${simbolo} ${num2} es: ${resultado}"\n`;
  log += `> FIN Algoritmo. Proceso finalizado con éxito.\n`;

  logBox.textContent = log;
}

// 2. DIAGRAMA DE FLUJO INTERACTIVO (S04) CON SIMBOLOGÍA ESTÁNDAR
function generarComponenteDiagramaFlujo() {
  return `
    <div class="session-section-box">
      <div class="section-box-title">📊 Simbología Estándar de Diagramas de Flujo y Ejemplo Oficial</div>
      <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 1.25rem;">
        En los diagramas de flujo técnicos es indispensable emplear el <strong>símbolo normalizado correcto</strong> para cada función algorítmica. A continuación se detallan las 5 formas estándar según la norma ISO/ANSI:
      </p>

      <!-- Guía y Leyenda de Simbología -->
      <div class="flow-symbol-legend-grid">
        <div class="flow-legend-card">
          <div class="flow-shape-icon shape-terminator">Inicio/Fin</div>
          <div>
            <div style="font-weight: 700; font-size: 0.88rem; color: #1e40af;">Inicio y Fin</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Rectángulo con bordes redondeados (Terminador).</div>
          </div>
        </div>

        <div class="flow-legend-card">
          <div class="flow-shape-icon shape-document">Escribir</div>
          <div>
            <div style="font-weight: 700; font-size: 0.88rem; color: #0e7490;">Escribir / Mostrar</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Rectángulo con borde inferior ondulado (Salida de datos / pantalla).</div>
          </div>
        </div>

        <div class="flow-legend-card">
          <div class="flow-shape-icon shape-input"><span>Leer</span></div>
          <div>
            <div style="font-weight: 700; font-size: 0.88rem; color: #b45309;">Leer (Entrada)</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Paralelogramo inclinado (Lectura de variables del usuario).</div>
          </div>
        </div>

        <div class="flow-legend-card">
          <div class="flow-shape-icon shape-process">Procesar</div>
          <div>
            <div style="font-weight: 700; font-size: 0.88rem; color: #1e293b;">Procesar</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Rectángulo estándar recto (Operaciones, cálculos y asignaciones).</div>
          </div>
        </div>

        <div class="flow-legend-card">
          <div class="flow-shape-icon shape-decision"><span>Decidir</span></div>
          <div>
            <div style="font-weight: 700; font-size: 0.88rem; color: #991b1b;">Decidir (Condición)</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Rombo de bifurcación con salidas alternativas (Sí / No).</div>
          </div>
        </div>
      </div>

      <!-- Simulador Interactivo del Ejemplo Oficial (Par o Impar) -->
      <div style="background: var(--bg-card); border: 1px solid var(--border); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.5rem;">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--primary);">
              🧪 Ejemplo de Diagrama: Clasificación de Número Par o Impar (num MOD 2)
            </h4>
            <p style="font-size: 0.85rem; color: var(--text-muted);">
              Introduce un número entero cualquiera para trazar la ejecución en el diagrama exacto de la programación:
            </p>
          </div>
          <div style="display: flex; gap: 0.75rem; align-items: center;">
            <button class="btn-header" style="background: var(--bg-main); color: var(--text-main); font-size: 0.8rem;" onclick="toggleModeloOriginalDiagrama()">
              📷 Ver Modelo Escaneado
            </button>
            <input type="number" id="flowNumInput" class="input-field" style="width: 110px; font-weight: 700;" value="7" placeholder="Ej: 7">
            <button class="btn-action-primary" onclick="probarDiagramaParImpar()">
              ▶ Ejecutar Flujo
            </button>
          </div>
        </div>

        <!-- Vista previa desplegable del modelo gráfico original aportado -->
        <div id="boxModeloOriginal" style="display: none; background: var(--bg-main); border: 1px dashed var(--border-strong); border-radius: 8px; padding: 1rem; margin-bottom: 1.25rem; text-align: center;">
          <div style="font-weight: 700; font-size: 0.88rem; margin-bottom: 0.5rem; color: var(--text-main);">
            📌 Esquema de referencia aportado (Simbología ISO):
          </div>
          <img src="assets/diagrama_par_impar.png" alt="Diagrama de flujo oficial: Par o Impar" style="max-height: 480px; max-width: 100%; border: 1px solid var(--border); border-radius: 6px; box-shadow: var(--shadow-sm);">
        </div>

        <!-- Diagrama Gráfico con Símbolos Oficiales -->
        <div class="flowchart-container" id="flowchartDiagramContainer">
          
          <!-- 1. INICIO (Rectángulo redondeado) -->
          <div class="flow-node-box node-terminator" id="node-f-inicio" title="Función: Inicio del algoritmo (Rectángulo con esquinas redondeadas)">
            Inicio
          </div>

          <div class="flow-connector-line">↓</div>

          <!-- 2. ESCRIBIR (Rectángulo con base ondulada / documento) -->
          <div class="flow-node-box node-document" id="node-f-escribir1" title="Función: Escribir / Mostrar por pantalla (Base ondulada)">
            <div>Introduce un número entero</div>
            <svg class="node-document-wave" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M 0,0 C 50,14 100,-4 150,10 C 175,14 190,4 200,8 L 200,12 L 0,12 Z" fill="currentColor" opacity="0.3"></path>
            </svg>
          </div>

          <div class="flow-connector-line">↓</div>

          <!-- 3. LEER (Paralelogramo inclinado) -->
          <div class="flow-node-box node-input-parallelogram" id="node-f-leer" title="Función: Leer variable (Paralelogramo inclinado)">
            <span class="node-content-skew">num <span id="trace-val-num" style="color: #b45309; font-weight: 800;"></span></span>
          </div>

          <div class="flow-connector-line">↓</div>

          <!-- 4. PROCESAR (Rectángulo estándar) -->
          <div class="flow-node-box node-process-rect" id="node-f-proceso" title="Función: Procesar operación aritmética (Rectángulo recto)">
            <div>par = num MOD 2</div>
            <div id="trace-val-par" style="font-size: 0.78rem; color: #2563eb; font-weight: 600; margin-top: 0.2rem;"></div>
          </div>

          <div class="flow-connector-line">↓</div>

          <!-- 5. DECIDIR (Rombo) -->
          <div class="node-decision-container">
            <div class="node-decision-diamond" id="node-f-decision" title="Función: Decisión condicional (Rombo)">
              <span>¿par = 0?</span>
            </div>
          </div>

          <!-- Ramas Sí / No -->
          <div class="flow-branch-row">
            <!-- Rama Sí -->
            <div class="flow-branch-col">
              <div style="font-weight: 800; color: #16a34a; font-size: 0.95rem; margin-bottom: 0.25rem;">
                ↙ Sí (Verdadero)
              </div>
              <div class="flow-node-box node-document" id="node-f-par" style="width: 100%;" title="Función: Escribir por pantalla">
                <div>El número es par</div>
                <svg class="node-document-wave" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M 0,0 C 50,14 100,-4 150,10 C 175,14 190,4 200,8 L 200,12 L 0,12 Z" fill="currentColor" opacity="0.3"></path>
                </svg>
              </div>
            </div>

            <!-- Rama No -->
            <div class="flow-branch-col">
              <div style="font-weight: 800; color: #dc2626; font-size: 0.95rem; margin-bottom: 0.25rem;">
                ↘ No (Falso)
              </div>
              <div class="flow-node-box node-document" id="node-f-impar" style="width: 100%;" title="Función: Escribir por pantalla">
                <div>El número es impar</div>
                <svg class="node-document-wave" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M 0,0 C 50,14 100,-4 150,10 C 175,14 190,4 200,8 L 200,12 L 0,12 Z" fill="currentColor" opacity="0.3"></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="flow-connector-line">↓</div>

          <!-- 6. FIN (Rectángulo redondeado) -->
          <div class="flow-node-box node-terminator" id="node-f-fin" title="Función: Fin del algoritmo (Terminador)">
            Fin
          </div>
        </div>

        <div id="flowExplanationBox" style="margin-top: 1rem; padding: 0.85rem 1rem; border-radius: 6px; background: #eff6ff; color: #1e40af; font-size: 0.9rem; line-height: 1.6;">
          💡 Pulsa <strong>'Ejecutar Flujo'</strong> para visualizar el recorrido dinámico del algoritmo paso a paso con los valores calculados.
        </div>
      </div>
    </div>
  `;
}

function probarDiagramaParImpar() {
  const valInput = document.getElementById('flowNumInput').value;
  const num = parseInt(valInput, 10);
  const explBox = document.getElementById('flowExplanationBox');

  if (isNaN(num)) {
    alert("Por favor, introduce un número entero válido (ejemplo: 7, 12, -4).");
    return;
  }

  const par = Math.abs(num % 2); // 0 si es par, 1 si es impar

  const allNodes = [
    'node-f-inicio', 'node-f-escribir1', 'node-f-leer', 
    'node-f-proceso', 'node-f-decision', 'node-f-par', 'node-f-impar', 'node-f-fin'
  ];

  // Limpiar estados previos
  allNodes.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('highlighted');
  });

  document.getElementById('trace-val-num').textContent = `(= ${num})`;
  document.getElementById('trace-val-par').textContent = `Resultado: ${num} MOD 2 = ${par}`;

  // Animación secuencial paso a paso
  document.getElementById('node-f-inicio').classList.add('highlighted');

  setTimeout(() => {
    document.getElementById('node-f-escribir1').classList.add('highlighted');
  }, 300);

  setTimeout(() => {
    document.getElementById('node-f-leer').classList.add('highlighted');
  }, 600);

  setTimeout(() => {
    document.getElementById('node-f-proceso').classList.add('highlighted');
  }, 900);

  setTimeout(() => {
    document.getElementById('node-f-decision').classList.add('highlighted');
  }, 1200);

  setTimeout(() => {
    if (par === 0) {
      document.getElementById('node-f-par').classList.add('highlighted');
      explBox.innerHTML = `✅ <strong>Traza del Flujo:</strong> num = ${num} ➔ par = ${num} MOD 2 = 0 ➔ ¿par = 0? es <strong>SÍ (Verdadero)</strong> ➔ Salida: <em>"El número es par"</em>.`;
    } else {
      document.getElementById('node-f-impar').classList.add('highlighted');
      explBox.innerHTML = `ℹ️ <strong>Traza del Flujo:</strong> num = ${num} ➔ par = ${num} MOD 2 = ${par} ➔ ¿par = 0? es <strong>NO (Falso)</strong> ➔ Salida: <em>"El número es impar"</em>.`;
    }

    setTimeout(() => {
      document.getElementById('node-f-fin').classList.add('highlighted');
    }, 400);
  }, 1500);
}

function toggleModeloOriginalDiagrama() {
  const box = document.getElementById('boxModeloOriginal');
  if (!box) return;
  box.style.display = (box.style.display === 'none' || !box.style.display) ? 'block' : 'none';
}

// 3. TABLA DE DECISIÓN BINARIA INTERACTIVA (S05)
function generarComponenteTablaDecision() {
  return `
    <div class="session-section-box">
      <div class="section-box-title">📋 Tabla de Decisión Binaria: Diagnóstico de Red Local</div>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem;">
        Selecciona el estado de las condiciones técnicas (Sí / No) para observar cómo el sistema aplica la regla exacta de las 4 posibles ($2^2 = 4$).
      </p>

      <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 1rem; background: var(--bg-main); padding: 1rem; border-radius: 8px;">
        <div>
          <label style="font-weight: 700; display: block; margin-bottom: 0.3rem;">C1: ¿Cable de red conectado?</label>
          <select id="dtCond1" class="input-field" onchange="evaluarTablaDecision()">
            <option value="S">SÍ (Conectado físicamente)</option>
            <option value="N">NO (Cable desconectado)</option>
          </select>
        </div>

        <div>
          <label style="font-weight: 700; display: block; margin-bottom: 0.3rem;">C2: ¿IP asignada por DHCP?</label>
          <select id="dtCond2" class="input-field" onchange="evaluarTablaDecision()">
            <option value="S">SÍ (IP válida obtenida)</option>
            <option value="N">NO (Sin concesión DHCP)</option>
          </select>
        </div>
      </div>

      <div class="decision-table-wrapper">
        <table class="decision-table" id="decisionTableMatrix">
          <thead>
            <tr>
              <th style="width: 40%; text-align: left;">Elemento Evaluado</th>
              <th id="col-r1">Regla 1 (R1)</th>
              <th id="col-r2">Regla 2 (R2)</th>
              <th id="col-r3">Regla 3 (R3)</th>
              <th id="col-r4">Regla 4 (R4)</th>
            </tr>
          </thead>
          <tbody>
            <tr class="condition-row">
              <td><strong>C1: Cable de red conectado</strong></td>
              <td class="cell-r1">S</td>
              <td class="cell-r2">S</td>
              <td class="cell-r3">N</td>
              <td class="cell-r4">N</td>
            </tr>
            <tr class="condition-row">
              <td><strong>C2: IP válida de subred</strong></td>
              <td class="cell-r1">S</td>
              <td class="cell-r2">N</td>
              <td class="cell-r3">S</td>
              <td class="cell-r4">N</td>
            </tr>
            <tr class="action-row">
              <td>A1: Conectar cable al switch de aula</td>
              <td class="cell-r1">-</td>
              <td class="cell-r2">-</td>
              <td class="cell-r3">X</td>
              <td class="cell-r4">X</td>
            </tr>
            <tr class="action-row">
              <td>A2: Renovar concesión (ipconfig /renew)</td>
              <td class="cell-r1">-</td>
              <td class="cell-r2">X</td>
              <td class="cell-r3">-</td>
              <td class="cell-r4">-</td>
            </tr>
            <tr class="action-row">
              <td>A3: Diagnóstico: Conexión Óptima</td>
              <td class="cell-r1">X</td>
              <td class="cell-r2">-</td>
              <td class="cell-r3">-</td>
              <td class="cell-r4">-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="decisionResultBox" style="margin-top: 1rem; padding: 0.85rem; border-radius: 6px; background: #eff6ff; color: #1e40af; font-weight: 600;">
        💡 Estado actual: Regla activa identificada en la tabla.
      </div>
    </div>
  `;
}

function evaluarTablaDecision() {
  const c1 = document.getElementById('dtCond1').value;
  const c2 = document.getElementById('dtCond2').value;
  const resBox = document.getElementById('decisionResultBox');

  // Limpiar clases previas
  for (let i = 1; i <= 4; i++) {
    const colHeader = document.getElementById(`col-r${i}`);
    if (colHeader) colHeader.classList.remove('rule-active');
    document.querySelectorAll(`.cell-r${i}`).forEach(cell => cell.classList.remove('rule-active'));
  }

  let activeRule = 1;
  let accion = "";

  if (c1 === 'S' && c2 === 'S') {
    activeRule = 1;
    accion = "Regla 1 (R1): Conexión correcta y operativa en la red del Carlos III.";
  } else if (c1 === 'S' && c2 === 'N') {
    activeRule = 2;
    accion = "Regla 2 (R2): Cable detectado pero sin IP. Acción requerida: Renovar concesión DHCP.";
  } else if (c1 === 'N' && c2 === 'S') {
    activeRule = 3;
    accion = "Regla 3 (R3): IP en caché pero interfaz desconectada físicamente. Acción: Conectar cable.";
  } else {
    activeRule = 4;
    accion = "Regla 4 (R4): Desconexión total de capa física y lógica. Acción: Conectar cable y verificar interfaz.";
  }

  const header = document.getElementById(`col-r${activeRule}`);
  if (header) header.classList.add('rule-active');
  document.querySelectorAll(`.cell-r${activeRule}`).forEach(cell => cell.classList.add('rule-active'));

  if (resBox) {
    resBox.innerHTML = `<strong>${accion}</strong>`;
  }
}

// 4. MINI-JUEGO SCRATCH INTERACTIVO (S07)
function generarComponenteScratch() {
  return `
    <div class="scratch-game-card">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <h3 style="font-size: 1.2rem; font-weight: 800; color: #92400e;">
          😺 Mini-Juego Scratch Interactivo: Personaje que Salta y Evita Obstáculos
        </h3>
        <span class="unit-badge" style="background: #fde68a; color: #854d0e;">Ejercicio Práctico UT1</span>
      </div>
      <p style="font-size: 0.9rem; color: #78350f; margin-bottom: 1rem;">
        Comprueba la física exacta programada en Scratch: Pulsa la <strong>BARRA ESPACIADORA</strong> o el botón <strong>¡SALTAR!</strong> para esquivar el obstáculo móvil de lado a lado.
      </p>

      <div class="scratch-canvas-container">
        <canvas id="scratchCanvas" width="560" height="220"></canvas>

        <div class="scratch-controls-bar">
          <button class="btn-scratch-jump" id="btnScratchJump" onclick="scratchSaltar()">
            ⬆ ¡SALTAR! (Espacio)
          </button>
          <button class="btn-header" style="background: #0f172a; color: #fff;" onclick="iniciarScratchGame()">
            🔄 Reiniciar Partida
          </button>
          <div style="font-weight: 700; font-size: 1.1rem; color: #0f172a;">
            Puntuación: <span id="scratchScoreText">0</span> | Récord: <span id="scratchHighScoreText">0</span>
          </div>
        </div>
      </div>

      <!-- Explicación de los bloques de Scratch asociados -->
      <div style="margin-top: 1.25rem; background: rgba(255,255,255,0.7); padding: 1rem; border-radius: 8px;">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: #78350f; margin-bottom: 0.5rem;">
          🧩 Equivalencia en Bloques Oficiales de Scratch:
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; font-size: 0.82rem; font-family: monospace;">
          <div style="background: #e0f2fe; padding: 0.5rem; border-radius: 4px; border-left: 3px solid #0284c7;">
            <strong>Objeto 1 (Gato):</strong><br>
            • al presionar tecla [espacio]<br>
            • si &lt;(posición en y) = [-100]&gt; entonces<br>
            • &nbsp;&nbsp;fijar [velocidadY] a [12]<br>
            • por siempre:<br>
            • &nbsp;&nbsp;cambiar y por (velocidadY)<br>
            • &nbsp;&nbsp;cambiar [velocidadY] por [-1] (Gravedad)
          </div>

          <div style="background: #fee2e2; padding: 0.5rem; border-radius: 4px; border-left: 3px solid #dc2626;">
            <strong>Objeto 2 (Obstáculo):</strong><br>
            • al presionar bandera verde<br>
            • por siempre:<br>
            • &nbsp;&nbsp;cambiar x por (-7)<br>
            • &nbsp;&nbsp;si &lt;(posición en x) &lt; [-240]&gt; entonces<br>
            • &nbsp;&nbsp;&nbsp;&nbsp;ir a x: (240) y: (-100)<br>
            • &nbsp;&nbsp;&nbsp;&nbsp;sumar a [Puntos] (1)<br>
            • &nbsp;&nbsp;si &lt;¿tocando [Gato]?&gt; entonces [detener todos]
          </div>
        </div>
      </div>
    </div>
  `;
}

function inicializarScratchMiniGame() {
  const canvas = document.getElementById('scratchCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const game = AppState.scratchGame;

  // Event listener para barra espaciadora
  window.onkeydown = (e) => {
    if (e.code === 'Space' && AppState.currentView === 'sesion' && AppState.currentSessionId === 's07') {
      e.preventDefault();
      scratchSaltar();
    }
  };

  iniciarScratchGame();
}

function iniciarScratchGame() {
  const canvas = document.getElementById('scratchCanvas');
  if (!canvas) return;

  const game = AppState.scratchGame;
  game.score = 0;
  game.catY = 160;
  game.catVelocityY = 0;
  game.isJumping = false;
  game.obstacleX = 540;
  game.obstacleSpeed = 5.5;
  game.isRunning = true;

  document.getElementById('scratchScoreText').textContent = '0';

  if (game.animationId) {
    cancelAnimationFrame(game.animationId);
  }

  scratchGameLoop();
}

function scratchSaltar() {
  const game = AppState.scratchGame;
  if (!game.isRunning) {
    iniciarScratchGame();
    return;
  }
  if (!game.isJumping) {
    game.isJumping = true;
    game.catVelocityY = -12;
  }
}

function scratchGameLoop() {
  const canvas = document.getElementById('scratchCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const game = AppState.scratchGame;

  // 1. Limpiar pantalla
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 2. Dibujar Escenario Scratch (Cielo, suelo y cuadrícula)
  ctx.fillStyle = '#bae6fd';
  ctx.fillRect(0, 0, canvas.width, 180);

  ctx.fillStyle = '#22c55e'; // Césped
  ctx.fillRect(0, 180, canvas.width, 40);

  ctx.strokeStyle = '#15803d';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 180);
  ctx.lineTo(canvas.width, 180);
  ctx.stroke();

  // 3. Física del Gato
  if (game.isJumping) {
    game.catY += game.catVelocityY;
    game.catVelocityY += 0.7; // Gravedad simulada

    if (game.catY >= 145) {
      game.catY = 145;
      game.isJumping = false;
      game.catVelocityY = 0;
    }
  }

  // Dibujar Personaje (Gato estilizado en canvas)
  const catX = 80;
  ctx.fillStyle = '#f97316'; // Naranja Scratch
  ctx.fillRect(catX, game.catY, 34, 34);

  // Orejas del gato
  ctx.beginPath();
  ctx.moveTo(catX, game.catY);
  ctx.lineTo(catX + 8, game.catY - 10);
  ctx.lineTo(catX + 16, game.catY);
  ctx.fillStyle = '#ea580c';
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(catX + 18, game.catY);
  ctx.lineTo(catX + 26, game.catY - 10);
  ctx.lineTo(catX + 34, game.catY);
  ctx.fill();

  // Ojos
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(catX + 20, game.catY + 8, 8, 8);
  ctx.fillStyle = '#000000';
  ctx.fillRect(catX + 24, game.catY + 10, 4, 4);

  // 4. Física del Obstáculo Móvil
  game.obstacleX -= game.obstacleSpeed;
  if (game.obstacleX < -30) {
    game.obstacleX = canvas.width + Math.random() * 80;
    game.score++;
    document.getElementById('scratchScoreText').textContent = game.score;
    if (game.score > game.highScore) {
      game.highScore = game.score;
      document.getElementById('scratchHighScoreText').textContent = game.highScore;
    }
    // Incremento gradual de velocidad
    if (game.score % 3 === 0 && game.obstacleSpeed < 10) {
      game.obstacleSpeed += 0.5;
    }
  }

  // Dibujar Obstáculo (Servidor / Caja con led rojo)
  const obsWidth = 26;
  const obsHeight = 36;
  const obsY = 180 - obsHeight;

  ctx.fillStyle = '#334155';
  ctx.fillRect(game.obstacleX, obsY, obsWidth, obsHeight);
  ctx.fillStyle = '#ef4444'; // Led de alarma
  ctx.fillRect(game.obstacleX + 8, obsY + 6, 10, 6);

  // 5. Detección de Colisiones AABB
  if (
    catX < game.obstacleX + obsWidth &&
    catX + 34 > game.obstacleX &&
    game.catY < obsY + obsHeight &&
    game.catY + 34 > obsY
  ) {
    // ¡Colisión detectada! Game Over
    game.isRunning = false;
    ctx.fillStyle = 'rgba(15, 23, 42, 0.75)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 22px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('¡COLISIÓN! DETENER TODOS', canvas.width / 2, canvas.height / 2 - 10);

    ctx.fillStyle = '#ffffff';
    ctx.font = '14px system-ui';
    ctx.fillText(`Puntos conseguidos: ${game.score} | Clic en 'Reiniciar' o Pulsa Espacio`, canvas.width / 2, canvas.height / 2 + 20);
    return;
  }

  if (game.isRunning) {
    game.animationId = requestAnimationFrame(scratchGameLoop);
  }
}

// 5. CUESTIONARIO OFICIAL INTERACTIVO UT1 (S10)
function generarComponenteCuestionarioUT1() {
  const preguntas = AppState.customData.cuestionario_ut1;
  return `
    <div class="quiz-box">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--border); padding-bottom: 0.75rem;">
        <div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--primary);">
            📝 Cuestionario Oficial de Autoevaluación: Unidad 1
          </h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);">
            Batería de 10 preguntas tipo test sobre RA1 y CE1*. Pondera un 10% en la nota del RA.
          </p>
        </div>
        <div id="quizScoreBadge" style="font-size: 1.1rem; font-weight: 800; padding: 0.4rem 1rem; border-radius: 9999px; background: #e2e8f0;">
          Pendiente de entrega
        </div>
      </div>

      <form id="quizFormUT1">
        ${preguntas.map((q, qIndex) => `
          <div class="quiz-question-item" id="qBox-${q.id}">
            <div class="quiz-question-text">
              ${qIndex + 1}. ${q.pregunta}
            </div>
            <div class="quiz-options-list">
              ${q.opciones.map((opt, optIndex) => `
                <label class="quiz-option-label" id="label-${q.id}-${optIndex}">
                  <input type="radio" name="${q.id}" value="${optIndex}" onchange="limpiarEstiloPregunta('${q.id}')">
                  <span>${opt}</span>
                </label>
              `).join('')}
            </div>
            <div class="quiz-explanation-box" id="exp-${q.id}">
              <strong>Explicación técnica:</strong> ${q.explicacion}
            </div>
          </div>
        `).join('')}

        <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1.5rem;">
          <button type="button" class="btn-action-primary" onclick="corregirCuestionarioUT1()">
            ✔ Enviar y Corregir Cuestionario
          </button>
        </div>
      </form>
    </div>
  `;
}

function limpiarEstiloPregunta(qid) {
  // Limpia estilos previos de feedback
  const box = document.getElementById(`qBox-${qid}`);
  if (box) {
    box.querySelectorAll('.quiz-option-label').forEach(lbl => {
      lbl.classList.remove('correct', 'incorrect');
    });
    const exp = document.getElementById(`exp-${qid}`);
    if (exp) exp.style.display = 'none';
  }
}

function corregirCuestionarioUT1() {
  const preguntas = AppState.customData.cuestionario_ut1;
  let correctas = 0;
  let respondidas = 0;

  preguntas.forEach(q => {
    const selected = document.querySelector(`input[name="${q.id}"]:checked`);
    const expBox = document.getElementById(`exp-${q.id}`);
    
    // Marcar la opción correcta siempre en verde
    const correctLabel = document.getElementById(`label-${q.id}-${q.correcta}`);
    if (correctLabel) correctLabel.classList.add('correct');

    if (selected) {
      respondidas++;
      const userVal = parseInt(selected.value);
      if (userVal === q.correcta) {
        correctas++;
      } else {
        const wrongLabel = document.getElementById(`label-${q.id}-${userVal}`);
        if (wrongLabel) wrongLabel.classList.add('incorrect');
      }
    }

    if (expBox) expBox.style.display = 'block';
  });

  const nota = ((correctas / preguntas.length) * 10).toFixed(1);
  const badge = document.getElementById('quizScoreBadge');
  
  if (badge) {
    if (nota >= 5) {
      badge.style.background = '#dcfce7';
      badge.style.color = '#15803d';
      badge.textContent = `Nota: ${nota} / 10 (¡Aprobado!)`;
    } else {
      badge.style.background = '#fee2e2';
      badge.style.color = '#b91c1c';
      badge.textContent = `Nota: ${nota} / 10 (Requiere Repaso)`;
    }
  }

  alert(`Cuestionario corregido:\nHas acertado ${correctas} de ${preguntas.length} preguntas.\nCalificación obtenida: ${nota} sobre 10.`);
}

// 6. CONSOLA DE CÓDIGO JS INTEGRADA
function generarComponenteConsolaJS() {
  return `
    <div class="code-playground-box">
      <div class="code-playground-header">
        <span>⚡ Consola JavaScript Interactiva (Pruébalo en vivo)</span>
        <button class="btn-action-primary" style="padding: 0.35rem 0.8rem; font-size: 0.8rem;" onclick="ejecutarCodigoPlayground()">
          ▶ Ejecutar Código
        </button>
      </div>
      <textarea class="code-editor-area" id="playgroundCodeInput">// Escribe o modifica código JavaScript aquí:
const servidores = ["srv-dc1", "srv-backup", "srv-dhcp"];
servidores.push("srv-web");

console.log("Servidores en CIFP Carlos III:");
servidores.forEach((srv, i) => {
    console.log((i + 1) + ". " + srv);
});
      </textarea>
      <div class="code-output-terminal" id="playgroundOutputBox">> Salida del script aparecerá aquí...</div>
    </div>
  `;
}

function ejecutarCodigoPlayground() {
  const code = document.getElementById('playgroundCodeInput').value;
  const outBox = document.getElementById('playgroundOutputBox');

  let logs = [];
  const customConsole = {
    log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ')),
    warn: (...args) => logs.push("[ADVERTENCIA] " + args.join(' ')),
    error: (...args) => logs.push("[ERROR] " + args.join(' ')),
    table: (data) => logs.push("[TABLA]\n" + JSON.stringify(data, null, 2))
  };

  try {
    const run = new Function('console', code);
    run(customConsole);
    outBox.textContent = logs.length > 0 ? logs.join('\n') : '> Código ejecutado correctamente (sin llamadas a console.log).';
  } catch (err) {
    outBox.textContent = `[EXCEPCIÓN EN TIEMPO DE EJECUCIÓN]: ${err.name} - ${err.message}`;
  }
}

// ==========================================================================
// VISTA: CALCULADORA OFICIAL DE CALIFICACIONES (FP SMR)
// ==========================================================================
function renderizarVistaCalculadora() {
  const content = document.getElementById('mainContentArea');
  content.innerHTML = `
    <div class="card">
      <div class="card-header-flex">
        <div class="card-title-lg">🧮 Calculadora Oficial de Calificaciones del Módulo</div>
        <span class="unit-badge">Conforme a RD 659/2023 y RD 499/2024</span>
      </div>

      <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 1.5rem;">
        Esta herramienta implementa al milímetro todas las reglas de la programación didáctica:
        pesos específicos por RA (RA1 20%, RA2 30%, <strong>RA3 35% CRÍTICO</strong>, RA4 10%, RA5 5%),
        desglose por instrumentos (60% exámenes, 30% tareas, 10% cuestionarios), regla del 5.0 mínimo en pruebas objetivas,
        tope de 4 si no se supera un RA crítico o más de 1 no crítico, y el ajuste final 90/10 con la fase en empresa (FEM 2).
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
        <!-- RA1 -->
        <div style="background: var(--bg-main); border: 1px solid var(--border); border-radius: 8px; padding: 1rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <strong style="color: var(--primary);">RA1: Estructura y Lenguaje (UT1)</strong>
            <span class="unit-badge">Peso: 20%</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem;">
            <label>Examen (60%): <input type="number" min="0" max="10" step="0.1" value="7.0" id="calc_ra1_exam" class="input-field"></label>
            <label>Tareas (30%): <input type="number" min="0" max="10" step="0.1" value="8.5" id="calc_ra1_task" class="input-field"></label>
            <label>Cuestionario (10%): <input type="number" min="0" max="10" step="0.1" value="9.0" id="calc_ra1_quiz" class="input-field"></label>
          </div>
        </div>

        <!-- RA2 -->
        <div style="background: var(--bg-main); border: 1px solid var(--border); border-radius: 8px; padding: 1rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <strong style="color: var(--primary);">RA2: Programas y Funciones (UT3)</strong>
            <span class="unit-badge">Peso: 30%</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem;">
            <label>Examen (60%): <input type="number" min="0" max="10" step="0.1" value="6.5" id="calc_ra2_exam" class="input-field"></label>
            <label>Tareas (30%): <input type="number" min="0" max="10" step="0.1" value="7.5" id="calc_ra2_task" class="input-field"></label>
            <label>Cuestionario (10%): <input type="number" min="0" max="10" step="0.1" value="8.0" id="calc_ra2_quiz" class="input-field"></label>
          </div>
        </div>

        <!-- RA3 (CRÍTICO) -->
        <div style="background: #fff1f2; border: 2px solid #f43f5e; border-radius: 8px; padding: 1rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <strong style="color: #be123c;">RA3: Estructuras de Control (UT2)</strong>
            <span style="background: #be123c; color: #fff; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">35% CRÍTICO</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem;">
            <label>Examen (60%): <input type="number" min="0" max="10" step="0.1" value="6.0" id="calc_ra3_exam" class="input-field"></label>
            <label>Tareas (30%): <input type="number" min="0" max="10" step="0.1" value="7.0" id="calc_ra3_task" class="input-field"></label>
            <label>Cuestionario (10%): <input type="number" min="0" max="10" step="0.1" value="8.5" id="calc_ra3_quiz" class="input-field"></label>
          </div>
        </div>

        <!-- RA4 -->
        <div style="background: var(--bg-main); border: 1px solid var(--border); border-radius: 8px; padding: 1rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <strong style="color: var(--primary);">RA4: Ficheros y E/S (UT4)</strong>
            <span class="unit-badge">Peso: 10%</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem;">
            <label>Examen (60%): <input type="number" min="0" max="10" step="0.1" value="7.5" id="calc_ra4_exam" class="input-field"></label>
            <label>Tareas (30%): <input type="number" min="0" max="10" step="0.1" value="8.0" id="calc_ra4_task" class="input-field"></label>
            <label>Cuestionario (10%): <input type="number" min="0" max="10" step="0.1" value="8.5" id="calc_ra4_quiz" class="input-field"></label>
          </div>
        </div>

        <!-- RA5 -->
        <div style="background: var(--bg-main); border: 1px solid var(--border); border-radius: 8px; padding: 1rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <strong style="color: var(--primary);">RA5: Bases de Datos (UT4)</strong>
            <span class="unit-badge">Peso: 5%</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem;">
            <label>Examen (60%): <input type="number" min="0" max="10" step="0.1" value="8.0" id="calc_ra5_exam" class="input-field"></label>
            <label>Tareas (30%): <input type="number" min="0" max="10" step="0.1" value="8.5" id="calc_ra5_task" class="input-field"></label>
            <label>Cuestionario (10%): <input type="number" min="0" max="10" step="0.1" value="9.0" id="calc_ra5_quiz" class="input-field"></label>
          </div>
        </div>

        <!-- Fase de Empresa (FEM 2) -->
        <div style="background: #ecfdf5; border: 1px solid #10b981; border-radius: 8px; padding: 1rem;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
            <strong style="color: #065f46;">Fase Empresa (FEM 2)</strong>
            <span style="background: #10b981; color: #fff; padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 700;">Pondera 10%</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem;">
            <label>Nota FEM 2 (Empresa): <input type="number" min="0" max="10" step="0.1" value="8.5" id="calc_fem2_grade" class="input-field"></label>
            <label>Faltas en 1ª Ev (máx 8): <input type="number" min="0" max="26" value="2" id="calc_faltas_ev1" class="input-field"></label>
            <label>Faltas en 2ª Ev (máx 3): <input type="number" min="0" max="10" value="0" id="calc_faltas_ev2" class="input-field"></label>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: center; margin-bottom: 2rem;">
        <button class="btn-action-primary" style="padding: 0.85rem 2rem; font-size: 1.05rem;" onclick="calcularCalificacionOficial()">
          ⚡ Calcular Calificación Oficial
        </button>
      </div>

      <!-- Cuadro de Resultados -->
      <div id="calcResultadoContainer" style="display: none; background: #f8fafc; border: 2px solid var(--primary-light); border-radius: 12px; padding: 1.5rem;">
        <!-- Se rellena dinámicamente -->
      </div>
    </div>
  `;
}

function calcularCalificacionOficial() {
  const getNotaRA = (prefix) => {
    const exam = parseFloat(document.getElementById(`${prefix}_exam`).value) || 0;
    const task = parseFloat(document.getElementById(`${prefix}_task`).value) || 0;
    const quiz = parseFloat(document.getElementById(`${prefix}_quiz`).value) || 0;

    // Regla: si el examen es inferior a 5.0, no pondera tareas ni cuestionarios
    if (exam < 5.0) {
      return { nota: exam, superado: false, penalizadoExamen: true };
    }
    const notaPonderada = (exam * 0.6) + (task * 0.3) + (quiz * 0.1);
    return { nota: notaPonderada, superado: notaPonderada >= 5.0, penalizadoExamen: false };
  };

  const ra1 = getNotaRA('calc_ra1');
  const ra2 = getNotaRA('calc_ra2');
  const ra3 = getNotaRA('calc_ra3');
  const ra4 = getNotaRA('calc_ra4');
  const ra5 = getNotaRA('calc_ra5');

  const fem2 = parseFloat(document.getElementById('calc_fem2_grade').value) || 0;
  const faltas1 = parseInt(document.getElementById('calc_faltas_ev1').value) || 0;
  const faltas2 = parseInt(document.getElementById('calc_faltas_ev2').value) || 0;

  // Comprobar faltas
  const perdidaEvContinua = (faltas1 > 8 || faltas2 > 3);

  // Comprobar RAs no superados
  const ras = [
    { id: 'RA1', ...ra1, peso: 0.20, critico: false },
    { id: 'RA2', ...ra2, peso: 0.30, critico: false },
    { id: 'RA3', ...ra3, peso: 0.35, critico: true },
    { id: 'RA4', ...ra4, peso: 0.10, critico: false },
    { id: 'RA5', ...ra5, peso: 0.05, critico: false }
  ];

  let notaCentroBruta = ras.reduce((acc, r) => acc + (r.nota * r.peso), 0);
  let notaCentroFinal = notaCentroBruta;

  const ra3Suspendido = !ra3.superado;
  const noCriticosSuspensos = ras.filter(r => !r.critico && !r.superado).length;

  let motivoTope = null;
  if (ra3Suspendido) {
    motivoTope = "El RA3 (Estructuras de Control) es CRÍTICO y no ha sido superado (nota < 5.0).";
    if (notaCentroFinal > 4.0) notaCentroFinal = 4.0;
  } else if (noCriticosSuspensos >= 2) {
    motivoTope = `Se han suspendido ${noCriticosSuspensos} Resultados de Aprendizaje no críticos (el máximo permitido para promediar es 1).`;
    if (notaCentroFinal > 4.0) notaCentroFinal = 4.0;
  }

  // Ajuste con Empresa (90% Centro + 10% Empresa)
  let notaDefinitivaMódulo = null;
  let estadoActa = "";

  if (notaCentroFinal >= 5.0) {
    if (fem2 >= 5.0) {
      const calculoAjuste = (notaCentroFinal * 0.9) + (fem2 * 0.1);
      // Redondeo al alza desde 0.5
      notaDefinitivaMódulo = Math.round(calculoAjuste);
      estadoActa = `APROBADO DEFINITIVO (${notaDefinitivaMódulo})`;
    } else {
      notaDefinitivaMódulo = Math.round(notaCentroFinal);
      estadoActa = `PROVISIONAL EN ACTA (${notaDefinitivaMódulo} N.E. - Pendiente FEM 2)`;
    }
  } else {
    notaDefinitivaMódulo = Math.round(notaCentroFinal);
    estadoActa = `SUSPENSO EN CENTRO (${notaDefinitivaMódulo}) - Plan de Recuperación`;
  }

  const container = document.getElementById('calcResultadoContainer');
  container.style.display = 'block';

  container.innerHTML = `
    <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--primary); margin-bottom: 1rem;">
      📋 Dictamen de Calificación y Evaluación
    </h3>

    ${perdidaEvContinua ? `
      <div style="background: #fee2e2; border-left: 4px solid #ef4444; padding: 0.75rem 1rem; border-radius: 4px; color: #991b1b; margin-bottom: 1rem;">
        ⚠️ <strong>Pérdida de Evaluación Continua:</strong> Faltas registradas (${faltas1} en Ev1, ${faltas2} en Ev2). El alumno debe presentarse a examen final único global (100% prueba objetiva).
      </div>
    ` : ''}

    ${motivoTope ? `
      <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 0.75rem 1rem; border-radius: 4px; color: #b91c1c; margin-bottom: 1rem;">
        🛑 <strong>Limitación de Calificación a 4.0:</strong> ${motivoTope}
      </div>
    ` : ''}

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
      <div style="background: #ffffff; padding: 1rem; border-radius: 8px; border: 1px solid var(--border);">
        <div style="font-size: 0.8rem; color: #64748b;">Fase de Centro (Media Ponderada)</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: ${notaCentroFinal >= 5 ? '#16a34a' : '#dc2626'};">
          ${notaCentroFinal.toFixed(2)} / 10
        </div>
      </div>

      <div style="background: #ffffff; padding: 1rem; border-radius: 8px; border: 1px solid var(--border);">
        <div style="font-size: 0.8rem; color: #64748b;">Ajuste con FEM 2 (90% / 10%)</div>
        <div style="font-size: 1.6rem; font-weight: 800; color: #2563eb;">
          ${notaDefinitivaMódulo}
        </div>
      </div>

      <div style="background: #ffffff; padding: 1rem; border-radius: 8px; border: 1px solid var(--border);">
        <div style="font-size: 0.8rem; color: #64748b;">Estado Oficial en Acta</div>
        <div style="font-size: 0.95rem; font-weight: 700; color: ${notaCentroFinal >= 5 ? '#15803d' : '#991b1b'};">
          ${estadoActa}
        </div>
      </div>
    </div>

    <div style="overflow-x: auto;">
      <table class="decision-table" style="background: #fff;">
        <thead>
          <tr>
            <th>Resultado de Aprendizaje</th>
            <th>Ponderación</th>
            <th>Nota Calculada</th>
            <th>Estado</th>
            <th>Observación</th>
          </tr>
        </thead>
        <tbody>
          ${ras.map(r => `
            <tr>
              <td style="text-align: left;"><strong>${r.id}</strong> ${r.critico ? '<span style="color:red;">(CRÍTICO)</span>' : ''}</td>
              <td>${(r.peso * 100)}%</td>
              <td><strong>${r.nota.toFixed(2)}</strong></td>
              <td>
                <span class="chip" style="background: ${r.superado ? '#dcfce7' : '#fee2e2'}; color: ${r.superado ? '#15803d' : '#b91c1c'};">
                  ${r.superado ? 'Superado' : 'No superado'}
                </span>
              </td>
              <td style="font-size: 0.8rem; text-align: left;">
                ${r.penalizadoExamen ? 'Examen < 5.0 (No promedia tareas ni cuestionario)' : 'Evaluación regular completa'}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// ==========================================================================
// MODO DOCENTE (PROFESORA VIRGINIA ZORNOZA): LOGIN Y EDICIÓN EN VIVO
// ==========================================================================
function toggleModalDocente() {
  if (AppState.isTeacher) {
    if (confirm("¿Deseas cerrar la sesión docente activa de Virginia Zornoza Martínez?")) {
      AppState.isTeacher = false;
      sessionStorage.removeItem('carlos3_profesor_activo');
      actualizarBotonDocente();
      if (AppState.currentView === 'sesion') {
        renderizarVistaSesion(AppState.currentSessionId);
      }
    }
  } else {
    document.getElementById('modalLoginDocente').classList.add('open');
  }
}

function cerrarModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('open');
}

function autenticarDocente() {
  const pass = document.getElementById('inputDocentePass').value;
  const defaultPass = AppState.customData.info.password_docente_default;

  if (pass === defaultPass || pass === 'carlos3' || pass === 'virginia2026') {
    AppState.isTeacher = true;
    sessionStorage.setItem('carlos3_profesor_activo', 'true');
    actualizarBotonDocente();
    cerrarModal('modalLoginDocente');
    alert("¡Bienvenida, profesora Virginia Zornoza Martínez!\nAhora puede retocar cualquier contenido del módulo, añadir notas y exportar copias de seguridad.");
    if (AppState.currentView === 'sesion') {
      renderizarVistaSesion(AppState.currentSessionId);
    }
  } else {
    alert("Contraseña docente incorrecta. Por defecto es: carlos3fp");
  }
}

// Modal de edición de contenidos para el docente
function abrirModalEditorSesion(sessionId) {
  const sesion = AppState.customData.sesiones.find(s => s.id === sessionId);
  if (!sesion) return;

  document.getElementById('editSessionId').value = sesion.id;
  document.getElementById('editSessionTitle').value = sesion.titulo;
  document.getElementById('editSessionTeoria').value = sesion.teoria;
  document.getElementById('editSessionPractica').value = sesion.practica;
  document.getElementById('editSessionSolucion').value = sesion.solucion || '';

  document.getElementById('modalEditorSesion').classList.add('open');
}

function guardarCambiosSesionDocente() {
  const id = document.getElementById('editSessionId').value;
  const sesion = AppState.customData.sesiones.find(s => s.id === id);
  if (!sesion) return;

  sesion.titulo = document.getElementById('editSessionTitle').value;
  sesion.teoria = document.getElementById('editSessionTeoria').value;
  sesion.practica = document.getElementById('editSessionPractica').value;
  sesion.solucion = document.getElementById('editSessionSolucion').value;

  guardarDatosEnLocal();
  cerrarModal('modalEditorSesion');
  alert("Contenido actualizado con éxito y guardado en memoria local.");
  renderizarVistaSesion(id);
  renderizarSidebar();
}

function exportarDatosDocente() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(AppState.customData, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", `programacion_smr2_carlos3_${new Date().toISOString().slice(0,10)}.json`);
  dlAnchorElem.click();
}

function importarDatosDocente(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed.sesiones && parsed.unidades) {
        AppState.customData = parsed;
        guardarDatosEnLocal();
        alert("¡Datos del curso importados correctamente!");
        location.reload();
      } else {
        alert("El archivo JSON no tiene la estructura válida del módulo.");
      }
    } catch (err) {
      alert("Error al leer el archivo JSON: " + err.message);
    }
  };
  reader.readAsText(file);
}

function restaurarDatosFabrica() {
  if (confirm("¿Estás seguro de que deseas restablecer todos los contenidos a los valores originales de fábrica? Se perderán las modificaciones locales.")) {
    localStorage.removeItem('carlos3_fp_data');
    AppState.customData = JSON.parse(JSON.stringify(CURRICULO_DATA));
    alert("Contenidos restablecidos a su estado original.");
    location.reload();
  }
}

// Búsqueda en el sidebar
function filtrarSesionesSidebar() {
  const term = document.getElementById('sidebarSearchInput').value.toLowerCase();
  const items = document.querySelectorAll('.session-nav-item');

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(term)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  // Si busca algo, abrir todos los acordeones
  if (term.length > 0) {
    document.querySelectorAll('.unit-accordion').forEach(acc => acc.classList.add('open'));
  }
}

// Alternar Modo Oscuro
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  const isDark = document.body.classList.contains('dark-theme');
  localStorage.setItem('carlos3_dark_theme', isDark ? 'true' : 'false');
  const themeBtn = document.getElementById('btnToggleTheme');
  if (themeBtn) themeBtn.innerHTML = isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro';
}

function inicializarEventosGlobales() {
  // Atajo de teclado para cerrar modales con ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    }
  });
}

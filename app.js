const express = require("express");
const mysql = require("mysql2");
const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_darwin"
});

db.connect(err => {
  if (err) {
    console.error("❌ Error conectando a MySQL:", err);
    return;
  }
  console.log("✅ Conectado a MySQL - db_darwin");
});

// ========================
// CSS - DISEÑO PROFESIONAL MODERNO
// ========================
const getStyles = () => `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: #0f0f1e;
    min-height: 100vh;
  }
  
  /* Dashboard Layout */
  .dashboard {
    display: flex;
    min-height: 100vh;
  }
  
  /* Sidebar Moderno */
  .sidebar {
    width: 280px;
    background: linear-gradient(180deg, #0f0f1e 0%, #1a1a2e 100%);
    backdrop-filter: blur(10px);
    padding: 30px 20px;
    position: fixed;
    height: 100vh;
    overflow-y: auto;
    border-right: 1px solid rgba(255,255,255,0.1);
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .logo {
    text-align: center;
    padding: 20px 0 30px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 30px;
  }
  
  .logo h2 {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .logo p {
    color: rgba(255,255,255,0.5);
    font-size: 12px;
    margin-top: 5px;
  }
  
  .nav-menu {
    list-style: none;
  }
  
  .nav-item {
    margin-bottom: 8px;
  }
  
  .nav-item a {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    border-radius: 12px;
    transition: all 0.3s ease;
    font-weight: 500;
    gap: 12px;
  }
  
  .nav-item a:hover {
    background: rgba(102, 126, 234, 0.2);
    color: #fff;
    transform: translateX(5px);
  }
  
  .nav-item.active a {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
  }
  
  .nav-icon {
    font-size: 20px;
    width: 24px;
    text-align: center;
  }
  
  /* Main Content */
  .main-content {
    margin-left: 280px;
    flex: 1;
    padding: 30px;
    background: #f5f7fb;
    min-height: 100vh;
  }
  
  /* Top Bar */
  .top-bar {
    background: white;
    border-radius: 20px;
    padding: 20px 30px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  }
  
  .page-title h1 {
    font-size: 28px;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .page-title p {
    color: #6c757d;
    font-size: 14px;
    margin-top: 5px;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .avatar {
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    font-size: 18px;
  }
  
  /* Cards */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-bottom: 30px;
  }
  
  .stat-card {
    background: white;
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  
  .stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  }
  
  .stat-title {
    color: #6c757d;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  
  .stat-value {
    font-size: 32px;
    font-weight: 800;
    color: #1a1a2e;
    margin-bottom: 10px;
  }
  
  .stat-icon {
    position: absolute;
    right: 20px;
    bottom: 20px;
    font-size: 48px;
    opacity: 0.1;
  }
  
  /* Cards de contenido */
  .content-card {
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
    margin-bottom: 30px;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
  }
  
  .card-header h2 {
    font-size: 20px;
    font-weight: 700;
    color: #1a1a2e;
  }
  
  /* Tablas Modernas */
  .table-container {
    overflow-x: auto;
    border-radius: 12px;
  }
  
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
  }
  
  thead th {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px;
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  thead th:first-child {
    border-radius: 12px 0 0 12px;
  }
  
  thead th:last-child {
    border-radius: 0 12px 12px 0;
  }
  
  tbody tr {
    transition: all 0.3s ease;
  }
  
  tbody tr:hover {
    background: #f8f9ff;
    transform: scale(1.01);
  }
  
  tbody td {
    padding: 15px;
    border-bottom: 1px solid #f0f0f0;
    color: #4a5568;
  }
  
  /* Botones Modernos */
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255,255,255,0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  .btn:hover::before {
    width: 300px;
    height: 300px;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }
  
  .btn-success {
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    color: white;
  }
  
  .btn-warning {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
  }
  
  .btn-danger {
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
    color: white;
  }
  
  .btn-secondary {
    background: linear-gradient(135deg, #868f96 0%, #596164 100%);
    color: white;
  }
  
  /* Formularios Modernos */
  .form-group {
    margin-bottom: 25px;
  }
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #1a1a2e;
    font-size: 14px;
  }
  
  input, select, textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    transition: all 0.3s ease;
  }
  
  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  /* Grid Layouts */
  .grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  
  .grid-3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
  }
  
  /* Alertas */
  .alert {
    padding: 15px 20px;
    border-radius: 12px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .alert-success {
    background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
    color: #1e3a2f;
    border: none;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .sidebar {
      transform: translateX(-100%);
    }
    
    .main-content {
      margin-left: 0;
    }
    
    .grid-2 {
      grid-template-columns: 1fr;
    }
    
    .stats-grid {
      grid-template-columns: 1fr;
    }
  }
  
  /* Animaciones */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .content-card {
    animation: fadeInUp 0.5s ease-out;
  }
  
  /* Badges */
  .badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
  }
  
  .badge-info {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    color: #2d3748;
  }
  
  /* Scrollbar Personalizado */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
  }
</style>
`;

// ========================
// FUNCIÓN PARA GENERAR HTML
// ========================
const renderPage = (title, content, activePage = '') => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | System</title>
    ${getStyles()}
</head>
<body>
    <div class="dashboard">
        <!-- Sidebar -->
        <div class="sidebar">
            <div class="logo">
                <h2>⚡ System</h2>
                <p>Gestión Inteligente v2.0</p>
            </div>
            <ul class="nav-menu">
                <li class="nav-item ${activePage === 'inicio' ? 'active' : ''}">
                    <a href="/"><span class="nav-icon">🏠</span><span>Dashboard</span></a>
                </li>
                <li class="nav-item ${activePage === 'acciones' ? 'active' : ''}">
                    <a href="/acciones"><span class="nav-icon">📌</span><span>Acciones</span></a>
                </li>
                <li class="nav-item ${activePage === 'accion_especifica' ? 'active' : ''}">
                    <a href="/accion_especifica"><span class="nav-icon">🎯</span><span>Acciones Específicas</span></a>
                </li>
                <li class="nav-item ${activePage === 'subaccion' ? 'active' : ''}">
                    <a href="/subaccion"><span class="nav-icon">🔽</span><span>Subacciones</span></a>
                </li>
                <li class="nav-item ${activePage === 'actividad' ? 'active' : ''}">
                    <a href="/actividad"><span class="nav-icon">⚡</span><span>Actividades</span></a>
                </li>
                <li class="nav-item ${activePage === 'tipo_agente' ? 'active' : ''}">
                    <a href="/tipo_agente"><span class="nav-icon">👤</span><span>Tipos de Agente</span></a>
                </li>
                <li class="nav-item ${activePage === 'tipo_transporte' ? 'active' : ''}">
                    <a href="/tipo_transporte"><span class="nav-icon">🚛</span><span>Transporte</span></a>
                </li>
                <li class="nav-item ${activePage === 'zona_provincia' ? 'active' : ''}">
                    <a href="/zona_provincia"><span class="nav-icon">🗺️</span><span>Provincias</span></a>
                </li>
                <li class="nav-item ${activePage === 'zona_distrito' ? 'active' : ''}">
                    <a href="/zona_distrito"><span class="nav-icon">🏘️</span><span>Distritos</span></a>
                </li>
                <li class="nav-item ${activePage === 'registro' ? 'active' : ''}">
                    <a href="/registro"><span class="nav-icon">📋</span><span>Registros</span></a>
                </li>
            </ul>
        </div>
        
        <!-- Main Content -->
        <div class="main-content">
            <div class="top-bar">
                <div class="page-title">
                    <h1>${title}</h1>
                    <p>Gestión completa de operaciones</p>
                </div>
                <div class="user-info">
                    <div class="avatar">AD</div>
                    <div>
                        <div style="font-weight: 600;">Admin Meza</div>
                        <div style="font-size: 12px; color: #6c757d;">Administrador</div>
                    </div>
                </div>
            </div>
            
            ${content}
        </div>
    </div>
</body>
</html>
`;

// ========================
// PÁGINA PRINCIPAL CON ESTADÍSTICAS
// ========================
app.get("/", async (req, res) => {
  try {
    const [totalAcciones, totalRegistros, totalActividades, totalProvincias] = await Promise.all([
      new Promise(resolve => db.query("SELECT COUNT(*) as total FROM accion", (err, rows) => resolve(rows[0].total))),
      new Promise(resolve => db.query("SELECT COUNT(*) as total FROM detalle_registro", (err, rows) => resolve(rows[0].total))),
      new Promise(resolve => db.query("SELECT COUNT(*) as total FROM actividad", (err, rows) => resolve(rows[0].total))),
      new Promise(resolve => db.query("SELECT COUNT(*) as total FROM zona_provincia", (err, rows) => resolve(rows[0].total)))
    ]);
    
    const content = `
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-title">Total Acciones</div>
          <div class="stat-value">${totalAcciones}</div>
          <div class="stat-icon">📌</div>
        </div>
        <div class="stat-card">
          <div class="stat-title">Registros Totales</div>
          <div class="stat-value">${totalRegistros}</div>
          <div class="stat-icon">📋</div>
        </div>
        <div class="stat-card">
          <div class="stat-title">Actividades</div>
          <div class="stat-value">${totalActividades}</div>
          <div class="stat-icon">⚡</div>
        </div>
        <div class="stat-card">
          <div class="stat-title">Provincias</div>
          <div class="stat-value">${totalProvincias}</div>
          <div class="stat-icon">🗺️</div>
        </div>
      </div>
      
      <div class="grid-3">
        <div class="content-card">
          <h3 style="margin-bottom: 15px;">🚀 Acciones Rápidas</h3>
          <a href="/registro/nuevo" class="btn btn-primary" style="width: 100%; margin-bottom: 10px;">➕ Nuevo Registro</a>
          <a href="/acciones/nueva" class="btn btn-success" style="width: 100%; margin-bottom: 10px;">📌 Nueva Acción</a>
          <a href="/actividad/nueva" class="btn btn-warning" style="width: 100%;">⚡ Nueva Actividad</a>
        </div>
        
        <div class="content-card">
          <h3 style="margin-bottom: 15px;">📊 Últimos Registros</h3>
          <p style="color: #6c757d;">Sistema de gestión integral para el control de operaciones, acciones y actividades.</p>
          <div class="badge badge-info" style="margin-top: 15px;">Versión 2.0 - Modern UI</div>
        </div>
        
        <div class="content-card">
          <h3 style="margin-bottom: 15px;">🎯 Sistema </h3>
          <p style="color: #6c757d;">Utilice el menú lateral para navegar entre las diferentes secciones del sistema.</p>
          <div style="margin-top: 20px;">
            <span class="badge badge-info">✓ CRUD Completo</span>
            <span class="badge badge-info" style="margin-left: 10px;">✓ UI Moderna</span>
            <span class="badge badge-info" style="margin-left: 10px;">✓ Responsive</span>
          </div>
        </div>
      </div>
    `;
    res.send(renderPage("Dashboard", content, "inicio"));
  } catch (err) {
    res.status(500).send("Error cargando dashboard");
  }
});

// ========================
// CRUD ACCIONES (Rediseñado)
// ========================
app.get("/acciones", (req, res) => {
  db.query("SELECT * FROM accion", (err, rows) => {
    if (err) throw err;
    let tabla = `
      <div class="content-card">
        <div class="card-header">
          <h2>📋 Listado de Acciones</h2>
          <a href="/acciones/nueva" class="btn btn-success">➕ Nueva Acción</a>
        </div>
        <div class="table-container">
          <table>
            <thead>
              <tr><th>ID</th><th>Nombre Abreviado</th><th>Nombre Acción</th><th>Código</th><th>Acciones</th></tr>
            </thead>
            <tbody>
    `;
    rows.forEach(r => {
      tabla += `
        <tr>
          <td><strong>${r.ID_ACCION}</strong></td>
          <td>${r.NOMBRE_ABREVIADO || '-'}</td>
          <td>${r.NOMBRE_ACCION || '-'}</td>
          <td><span class="badge badge-info">${r.CODIGO_A_E || '-'}</span></td>
          <td>
            <a href="/acciones/editar/${r.ID_ACCION}" class="btn btn-warning" style="padding: 6px 12px; font-size: 12px;">✏️ Editar</a>
            <a href="/acciones/eliminar/${r.ID_ACCION}" class="btn btn-danger" style="padding: 6px 12px; font-size: 12px;" onclick="return confirm('¿Eliminar esta acción?')">🗑️ Eliminar</a>
          </td>
        </tr>
      `;
    });
    tabla += `</tbody></table></div></div>`;
    res.send(renderPage("Acciones", tabla, "acciones"));
  });
});

app.get("/acciones/nueva", (req, res) => {
  const content = `
    <div class="content-card">
      <div class="card-header">
        <h2>➕ Nueva Acción</h2>
      </div>
      <form method="POST" action="/acciones">
        <div class="form-group">
          <label>Nombre Abreviado:</label>
          <input type="text" name="NOMBRE_ABREVIADO" placeholder="Ej: ACT-001" />
        </div>
        <div class="form-group">
          <label>Nombre Acción:</label>
          <input type="text" name="NOMBRE_ACCION" placeholder="Nombre completo" required />
        </div>
        <div class="form-group">
          <label>Código:</label>
          <input type="text" name="CODIGO_A_E" placeholder="Código de identificación" />
        </div>
        <div style="display: flex; gap: 10px;">
          <button type="submit" class="btn btn-primary">💾 Guardar Acción</button>
          <a href="/acciones" class="btn btn-secondary">Cancelar</a>
        </div>
      </form>
    </div>
  `;
  res.send(renderPage("Nueva Acción", content, "acciones"));
});

app.post("/acciones", (req, res) => {
  const { NOMBRE_ABREVIADO, NOMBRE_ACCION, CODIGO_A_E } = req.body;
  db.query("INSERT INTO accion (NOMBRE_ABREVIADO, NOMBRE_ACCION, CODIGO_A_E) VALUES (?, ?, ?)", [NOMBRE_ABREVIADO, NOMBRE_ACCION, CODIGO_A_E], () => res.redirect("/acciones"));
});

app.get("/acciones/editar/:id", (req, res) => {
  db.query("SELECT * FROM accion WHERE ID_ACCION = ?", [req.params.id], (err, rows) => {
    const a = rows[0];
    const content = `
      <div class="content-card">
        <div class="card-header">
          <h2>✏️ Editar Acción</h2>
        </div>
        <form method="POST" action="/acciones/editar/${a.ID_ACCION}">
          <div class="form-group">
            <label>Nombre Abreviado:</label>
            <input name="NOMBRE_ABREVIADO" value="${a.NOMBRE_ABREVIADO || ''}" />
          </div>
          <div class="form-group">
            <label>Nombre Acción:</label>
            <input name="NOMBRE_ACCION" value="${a.NOMBRE_ACCION || ''}" required />
          </div>
          <div class="form-group">
            <label>Código:</label>
            <input name="CODIGO_A_E" value="${a.CODIGO_A_E || ''}" />
          </div>
          <div style="display: flex; gap: 10px;">
            <button type="submit" class="btn btn-primary">💾 Actualizar</button>
            <a href="/acciones" class="btn btn-secondary">Cancelar</a>
          </div>
        </form>
      </div>
    `;
    res.send(renderPage("Editar Acción", content, "acciones"));
  });
});

app.post("/acciones/editar/:id", (req, res) => {
  const { NOMBRE_ABREVIADO, NOMBRE_ACCION, CODIGO_A_E } = req.body;
  db.query("UPDATE accion SET NOMBRE_ABREVIADO=?, NOMBRE_ACCION=?, CODIGO_A_E=? WHERE ID_ACCION=?", [NOMBRE_ABREVIADO, NOMBRE_ACCION, CODIGO_A_E, req.params.id], () => res.redirect("/acciones"));
});

app.get("/acciones/eliminar/:id", (req, res) => {
  db.query("DELETE FROM accion WHERE ID_ACCION = ?", [req.params.id], () => res.redirect("/acciones"));
});

// ========================
// CRUD ACCION ESPECIFICA (Rediseñado)
// ========================
app.get("/accion_especifica", (req, res) => {
  db.query("SELECT * FROM accion_especifica", (err, rows) => {
    if (err) throw err;
    let tabla = `
      <div class="content-card">
        <div class="card-header">
          <h2>🎯 Acciones Específicas</h2>
          <a href="/accion_especifica/nueva" class="btn btn-success">➕ Nueva</a>
        </div>
        <div class="table-container">
          <table>
            <thead><tr><th>ID</th><th>Abrev.</th><th>Acción Específica</th><th>Código</th><th>Acciones</th></tr></thead>
            <tbody>
    `;
    rows.forEach(r => {
      tabla += `
        <tr>
          <td><strong>${r.ID_AE}</strong></td>
          <td>${r.NOMBRE_ABREVIADO || '-'}</td>
          <td>${r.ACCION_ESPECIFICA || '-'}</td>
          <td><span class="badge badge-info">${r.CODIGO_A_E || '-'}</span></td>
          <td>
            <a href="/accion_especifica/editar/${r.ID_AE}" class="btn btn-warning" style="padding: 6px 12px;">✏️</a>
            <a href="/accion_especifica/eliminar/${r.ID_AE}" class="btn btn-danger" style="padding: 6px 12px;" onclick="return confirm('¿Eliminar?')">🗑️</a>
          </td>
        </tr>
      `;
    });
    tabla += `</tbody></table></div></div>`;
    res.send(renderPage("Acciones Específicas", tabla, "accion_especifica"));
  });
});

app.get("/accion_especifica/nueva", (req, res) => {
  const content = `
    <div class="content-card">
      <div class="card-header"><h2>➕ Nueva Acción Específica</h2></div>
      <form method="POST" action="/accion_especifica">
        <div class="form-group"><label>Nombre Abreviado:</label><input name="NOMBRE_ABREVIADO" required /></div>
        <div class="form-group"><label>Acción Específica:</label><input name="ACCION_ESPECIFICA" required /></div>
        <div class="form-group"><label>Código:</label><input name="CODIGO_A_E" /></div>
        <div style="display: flex; gap: 10px;">
          <button type="submit" class="btn btn-primary">💾 Guardar</button>
          <a href="/accion_especifica" class="btn btn-secondary">Cancelar</a>
        </div>
      </form>
    </div>`;
  res.send(renderPage("Nueva Acción Específica", content, "accion_especifica"));
});

app.post("/accion_especifica", (req, res) => {
  const { NOMBRE_ABREVIADO, ACCION_ESPECIFICA, CODIGO_A_E } = req.body;
  db.query("INSERT INTO accion_especifica (NOMBRE_ABREVIADO, ACCION_ESPECIFICA, CODIGO_A_E) VALUES (?,?,?)", [NOMBRE_ABREVIADO, ACCION_ESPECIFICA, CODIGO_A_E], () => res.redirect("/accion_especifica"));
});

app.get("/accion_especifica/editar/:id", (req, res) => {
  db.query("SELECT * FROM accion_especifica WHERE ID_AE = ?", [req.params.id], (err, rows) => {
    const r = rows[0];
    const content = `
      <div class="content-card">
        <div class="card-header"><h2>✏️ Editar Acción Específica</h2></div>
        <form method="POST" action="/accion_especifica/editar/${r.ID_AE}">
          <div class="form-group"><label>Nombre Abreviado:</label><input name="NOMBRE_ABREVIADO" value="${r.NOMBRE_ABREVIADO}" required /></div>
          <div class="form-group"><label>Acción Específica:</label><input name="ACCION_ESPECIFICA" value="${r.ACCION_ESPECIFICA}" required /></div>
          <div class="form-group"><label>Código:</label><input name="CODIGO_A_E" value="${r.CODIGO_A_E}" /></div>
          <div style="display: flex; gap: 10px;">
            <button type="submit" class="btn btn-primary">💾 Actualizar</button>
            <a href="/accion_especifica" class="btn btn-secondary">Cancelar</a>
          </div>
        </form>
      </div>`;
    res.send(renderPage("Editar", content, "accion_especifica"));
  });
});

app.post("/accion_especifica/editar/:id", (req, res) => {
  const { NOMBRE_ABREVIADO, ACCION_ESPECIFICA, CODIGO_A_E } = req.body;
  db.query("UPDATE accion_especifica SET NOMBRE_ABREVIADO=?, ACCION_ESPECIFICA=?, CODIGO_A_E=? WHERE ID_AE=?", [NOMBRE_ABREVIADO, ACCION_ESPECIFICA, CODIGO_A_E, req.params.id], () => res.redirect("/accion_especifica"));
});

app.get("/accion_especifica/eliminar/:id", (req, res) => {
  db.query("DELETE FROM accion_especifica WHERE ID_AE = ?", [req.params.id], () => res.redirect("/accion_especifica"));
});

// ========================
// CRUD SUBACCION (Rediseñado)
// ========================
app.get("/subaccion", (req, res) => {
  db.query(`SELECT s.*, ae.ACCION_ESPECIFICA FROM subaccion s LEFT JOIN accion_especifica ae ON s.ID_AE = ae.ID_AE`, (err, rows) => {
    let tabla = `
      <div class="content-card">
        <div class="card-header">
          <h2>🔽 Subacciones</h2>
          <a href="/subaccion/nueva" class="btn btn-success">➕ Nueva</a>
        </div>
        <div class="table-container">
          <table>
            <thead><tr><th>ID</th><th>Abrev.</th><th>Subacción</th><th>Concatenado</th><th>Código</th><th>Acción Esp.</th><th>Acciones</th></tr></thead>
            <tbody>`;
    rows.forEach(r => {
      tabla += `<tr>
        <td><strong>${r.ID_SA}</strong></td>
        <td>${r.NOMBRE_ABREVIADO || '-'}</td>
        <td>${r.SUB_ACCION_ESP || '-'}</td>
        <td>${r.CONCAT || '-'}</td>
        <td><span class="badge badge-info">${r.CODIGO_S_A_E || '-'}</span></td>
        <td>${r.ACCION_ESPECIFICA || '-'}</td>
        <td>
          <a href="/subaccion/editar/${r.ID_SA}" class="btn btn-warning" style="padding: 6px 12px;">✏️</a>
          <a href="/subaccion/eliminar/${r.ID_SA}" class="btn btn-danger" style="padding: 6px 12px;" onclick="return confirm('¿Eliminar?')">🗑️</a>
        </td>
      </tr>`;
    });
    tabla += `</tbody></table></div></div>`;
    res.send(renderPage("Subacciones", tabla, "subaccion"));
  });
});

app.get("/subaccion/nueva", (req, res) => {
  db.query("SELECT ID_AE, ACCION_ESPECIFICA FROM accion_especifica", (err, aes) => {
    let options = '<option value="">-- Seleccionar --</option>';
    aes.forEach(a => options += `<option value="${a.ID_AE}">${a.ACCION_ESPECIFICA}</option>`);
    const content = `
      <div class="content-card">
        <div class="card-header"><h2>➕ Nueva Subacción</h2></div>
        <form method="POST" action="/subaccion">
          <div class="form-group"><label>Nombre Abreviado:</label><input name="NOMBRE_ABREVIADO" required /></div>
          <div class="form-group"><label>Subacción:</label><input name="SUB_ACCION_ESP" required /></div>
          <div class="form-group"><label>Concatenado:</label><input name="CONCAT" /></div>
          <div class="form-group"><label>Código:</label><input name="CODIGO_S_A_E" /></div>
          <div class="form-group"><label>Acción Específica:</label><select name="ID_AE">${options}</select></div>
          <div style="display: flex; gap: 10px;">
            <button type="submit" class="btn btn-primary">💾 Guardar</button>
            <a href="/subaccion" class="btn btn-secondary">Cancelar</a>
          </div>
        </form>
      </div>`;
    res.send(renderPage("Nueva Subacción", content, "subaccion"));
  });
});

app.post("/subaccion", (req, res) => {
  const { NOMBRE_ABREVIADO, SUB_ACCION_ESP, CONCAT, CODIGO_S_A_E, ID_AE } = req.body;
  db.query("INSERT INTO subaccion (NOMBRE_ABREVIADO, SUB_ACCION_ESP, CONCAT, CODIGO_S_A_E, ID_AE) VALUES (?,?,?,?,?)", [NOMBRE_ABREVIADO, SUB_ACCION_ESP, CONCAT, CODIGO_S_A_E, ID_AE], () => res.redirect("/subaccion"));
});

app.get("/subaccion/editar/:id", (req, res) => {
  db.query("SELECT * FROM subaccion WHERE ID_SA = ?", [req.params.id], (err, rows) => {
    const r = rows[0];
    db.query("SELECT ID_AE, ACCION_ESPECIFICA FROM accion_especifica", (err, aes) => {
      let options = '';
      aes.forEach(a => options += `<option value="${a.ID_AE}" ${a.ID_AE == r.ID_AE ? 'selected' : ''}>${a.ACCION_ESPECIFICA}</option>`);
      const content = `
        <div class="content-card">
          <div class="card-header"><h2>✏️ Editar Subacción</h2></div>
          <form method="POST" action="/subaccion/editar/${r.ID_SA}">
            <div class="form-group"><label>Nombre Abreviado:</label><input name="NOMBRE_ABREVIADO" value="${r.NOMBRE_ABREVIADO}" required /></div>
            <div class="form-group"><label>Subacción:</label><input name="SUB_ACCION_ESP" value="${r.SUB_ACCION_ESP}" required /></div>
            <div class="form-group"><label>Concatenado:</label><input name="CONCAT" value="${r.CONCAT}" /></div>
            <div class="form-group"><label>Código:</label><input name="CODIGO_S_A_E" value="${r.CODIGO_S_A_E}" /></div>
            <div class="form-group"><label>Acción Específica:</label><select name="ID_AE">${options}</select></div>
            <div style="display: flex; gap: 10px;">
              <button type="submit" class="btn btn-primary">💾 Actualizar</button>
              <a href="/subaccion" class="btn btn-secondary">Cancelar</a>
            </div>
          </form>
        </div>`;
      res.send(renderPage("Editar Subacción", content, "subaccion"));
    });
  });
});

app.post("/subaccion/editar/:id", (req, res) => {
  const { NOMBRE_ABREVIADO, SUB_ACCION_ESP, CONCAT, CODIGO_S_A_E, ID_AE } = req.body;
  db.query("UPDATE subaccion SET NOMBRE_ABREVIADO=?, SUB_ACCION_ESP=?, CONCAT=?, CODIGO_S_A_E=?, ID_AE=? WHERE ID_SA=?", [NOMBRE_ABREVIADO, SUB_ACCION_ESP, CONCAT, CODIGO_S_A_E, ID_AE, req.params.id], () => res.redirect("/subaccion"));
});

app.get("/subaccion/eliminar/:id", (req, res) => {
  db.query("DELETE FROM subaccion WHERE ID_SA = ?", [req.params.id], () => res.redirect("/subaccion"));
});

// ========================
// CRUD ACTIVIDAD (Rediseñado)
// ========================
app.get("/actividad", (req, res) => {
  db.query(`SELECT a.*, ta.NOMBRE_TA FROM actividad a LEFT JOIN tipo_agente ta ON a.ID_TA = ta.ID_TA`, (err, rows) => {
    let tabla = `
      <div class="content-card">
        <div class="card-header">
          <h2>⚡ Actividades</h2>
          <a href="/actividad/nueva" class="btn btn-success">➕ Nueva</a>
        </div>
        <div class="table-container">
          <table>
            <thead><tr><th>ID</th><th>Nombre</th><th>Código</th><th>Tipo Agente</th><th>Acciones</th></tr></thead>
            <tbody>`;
    rows.forEach(r => {
      tabla += `<tr>
        <td><strong>${r.ID_ACTIVIDAD}</strong></td>
        <td>${r.NOMBRE_ACTIVIDAD}</td>
        <td><span class="badge badge-info">${r.CODIGO_ACTIVIDAD || '-'}</span></td>
        <td>${r.NOMBRE_TA || '-'}</td>
        <td>
          <a href="/actividad/editar/${r.ID_ACTIVIDAD}" class="btn btn-warning" style="padding: 6px 12px;">✏️</a>
          <a href="/actividad/eliminar/${r.ID_ACTIVIDAD}" class="btn btn-danger" style="padding: 6px 12px;" onclick="return confirm('¿Eliminar?')">🗑️</a>
        </td>
      </tr>`;
    });
    tabla += `</tbody></table></div></div>`;
    res.send(renderPage("Actividades", tabla, "actividad"));
  });
});

app.get("/actividad/nueva", (req, res) => {
  db.query("SELECT ID_TA, NOMBRE_TA FROM tipo_agente", (err, tas) => {
    let options = '<option value="">-- Ninguno --</option>';
    tas.forEach(t => options += `<option value="${t.ID_TA}">${t.NOMBRE_TA}</option>`);
    const content = `
      <div class="content-card">
        <div class="card-header"><h2>➕ Nueva Actividad</h2></div>
        <form method="POST" action="/actividad">
          <div class="form-group"><label>Nombre Actividad:</label><input name="NOMBRE_ACTIVIDAD" required /></div>
          <div class="form-group"><label>Código:</label><input name="CODIGO_ACTIVIDAD" /></div>
          <div class="form-group"><label>Tipo Agente:</label><select name="ID_TA">${options}</select></div>
          <div style="display: flex; gap: 10px;">
            <button type="submit" class="btn btn-primary">💾 Guardar</button>
            <a href="/actividad" class="btn btn-secondary">Cancelar</a>
          </div>
        </form>
      </div>`;
    res.send(renderPage("Nueva Actividad", content, "actividad"));
  });
});

app.post("/actividad", (req, res) => {
  const { NOMBRE_ACTIVIDAD, CODIGO_ACTIVIDAD, ID_TA } = req.body;
  db.query("INSERT INTO actividad (NOMBRE_ACTIVIDAD, CODIGO_ACTIVIDAD, ID_TA) VALUES (?,?,?)", [NOMBRE_ACTIVIDAD, CODIGO_ACTIVIDAD, ID_TA || null], () => res.redirect("/actividad"));
});

app.get("/actividad/editar/:id", (req, res) => {
  db.query("SELECT * FROM actividad WHERE ID_ACTIVIDAD = ?", [req.params.id], (err, rows) => {
    const r = rows[0];
    db.query("SELECT ID_TA, NOMBRE_TA FROM tipo_agente", (err, tas) => {
      let options = '<option value="">-- Ninguno --</option>';
      tas.forEach(t => options += `<option value="${t.ID_TA}" ${t.ID_TA == r.ID_TA ? 'selected' : ''}>${t.NOMBRE_TA}</option>`);
      const content = `
        <div class="content-card">
          <div class="card-header"><h2>✏️ Editar Actividad</h2></div>
          <form method="POST" action="/actividad/editar/${r.ID_ACTIVIDAD}">
            <div class="form-group"><label>Nombre Actividad:</label><input name="NOMBRE_ACTIVIDAD" value="${r.NOMBRE_ACTIVIDAD}" required /></div>
            <div class="form-group"><label>Código:</label><input name="CODIGO_ACTIVIDAD" value="${r.CODIGO_ACTIVIDAD}" /></div>
            <div class="form-group"><label>Tipo Agente:</label><select name="ID_TA">${options}</select></div>
            <div style="display: flex; gap: 10px;">
              <button type="submit" class="btn btn-primary">💾 Actualizar</button>
              <a href="/actividad" class="btn btn-secondary">Cancelar</a>
            </div>
          </form>
        </div>`;
      res.send(renderPage("Editar Actividad", content, "actividad"));
    });
  });
});

app.post("/actividad/editar/:id", (req, res) => {
  const { NOMBRE_ACTIVIDAD, CODIGO_ACTIVIDAD, ID_TA } = req.body;
  db.query("UPDATE actividad SET NOMBRE_ACTIVIDAD=?, CODIGO_ACTIVIDAD=?, ID_TA=? WHERE ID_ACTIVIDAD=?", [NOMBRE_ACTIVIDAD, CODIGO_ACTIVIDAD, ID_TA || null, req.params.id], () => res.redirect("/actividad"));
});

app.get("/actividad/eliminar/:id", (req, res) => {
  db.query("DELETE FROM actividad WHERE ID_ACTIVIDAD = ?", [req.params.id], () => res.redirect("/actividad"));
});

// ========================
// CRUD TIPO AGENTE (Rediseñado)
// ========================
app.get("/tipo_agente", (req, res) => {
  db.query("SELECT * FROM tipo_agente", (err, rows) => {
    let tabla = `
      <div class="content-card">
        <div class="card-header">
          <h2>👤 Tipos de Agente</h2>
          <a href="/tipo_agente/nuevo" class="btn btn-success">➕ Nuevo</a>
        </div>
        <div class="table-container">
          <table>
            <thead><tr><th>ID</th><th>Nombre</th><th>Acciones</th></tr></thead>
            <tbody>`;
    rows.forEach(r => {
      tabla += `<tr>
        <td><strong>${r.ID_TA}</strong></td>
        <td>${r.NOMBRE_TA}</td>
        <td>
          <a href="/tipo_agente/editar/${r.ID_TA}" class="btn btn-warning" style="padding: 6px 12px;">✏️</a>
          <a href="/tipo_agente/eliminar/${r.ID_TA}" class="btn btn-danger" style="padding: 6px 12px;" onclick="return confirm('¿Eliminar?')">🗑️</a>
        </td>
      </tr>`;
    });
    tabla += `</tbody></table></div></div>`;
    res.send(renderPage("Tipos de Agente", tabla, "tipo_agente"));
  });
});

app.get("/tipo_agente/nuevo", (req, res) => {
  const content = `
    <div class="content-card">
      <div class="card-header"><h2>➕ Nuevo Tipo Agente</h2></div>
      <form method="POST" action="/tipo_agente">
        <div class="form-group"><label>Nombre:</label><input name="NOMBRE_TA" required /></div>
        <div style="display: flex; gap: 10px;">
          <button type="submit" class="btn btn-primary">💾 Guardar</button>
          <a href="/tipo_agente" class="btn btn-secondary">Cancelar</a>
        </div>
      </form>
    </div>`;
  res.send(renderPage("Nuevo Tipo Agente", content, "tipo_agente"));
});

app.post("/tipo_agente", (req, res) => {
  db.query("INSERT INTO tipo_agente (NOMBRE_TA) VALUES (?)", [req.body.NOMBRE_TA], () => res.redirect("/tipo_agente"));
});

app.get("/tipo_agente/editar/:id", (req, res) => {
  db.query("SELECT * FROM tipo_agente WHERE ID_TA = ?", [req.params.id], (err, rows) => {
    const r = rows[0];
    const content = `
      <div class="content-card">
        <div class="card-header"><h2>✏️ Editar Tipo Agente</h2></div>
        <form method="POST" action="/tipo_agente/editar/${r.ID_TA}">
          <div class="form-group"><label>Nombre:</label><input name="NOMBRE_TA" value="${r.NOMBRE_TA}" required /></div>
          <div style="display: flex; gap: 10px;">
            <button type="submit" class="btn btn-primary">💾 Actualizar</button>
            <a href="/tipo_agente" class="btn btn-secondary">Cancelar</a>
          </div>
        </form>
      </div>`;
    res.send(renderPage("Editar Tipo Agente", content, "tipo_agente"));
  });
});

app.post("/tipo_agente/editar/:id", (req, res) => {
  db.query("UPDATE tipo_agente SET NOMBRE_TA=? WHERE ID_TA=?", [req.body.NOMBRE_TA, req.params.id], () => res.redirect("/tipo_agente"));
});

app.get("/tipo_agente/eliminar/:id", (req, res) => {
  db.query("DELETE FROM tipo_agente WHERE ID_TA = ?", [req.params.id], () => res.redirect("/tipo_agente"));
});

// ========================
// CRUD TIPO TRANSPORTE (Rediseñado)
// ========================
app.get("/tipo_transporte", (req, res) => {
  db.query("SELECT * FROM tipo_transporte", (err, rows) => {
    let tabla = `
      <div class="content-card">
        <div class="card-header">
          <h2>🚛 Tipos de Transporte</h2>
          <a href="/tipo_transporte/nuevo" class="btn btn-success">➕ Nuevo</a>
        </div>
        <div class="table-container">
          <table>
            <thead><tr><th>ID</th><th>Nombre</th><th>Acciones</th></tr></thead>
            <tbody>`;
    rows.forEach(r => {
      tabla += `<tr>
        <td><strong>${r.id_tt}</strong></td>
        <td>${r.NOMBRE_TRANSPORTE}</td>
        <td>
          <a href="/tipo_transporte/editar/${r.id_tt}" class="btn btn-warning" style="padding: 6px 12px;">✏️</a>
          <a href="/tipo_transporte/eliminar/${r.id_tt}" class="btn btn-danger" style="padding: 6px 12px;" onclick="return confirm('¿Eliminar?')">🗑️</a>
        </td>
      </tr>`;
    });
    tabla += `</tbody></table></div></div>`;
    res.send(renderPage("Tipos de Transporte", tabla, "tipo_transporte"));
  });
});

app.get("/tipo_transporte/nuevo", (req, res) => {
  const content = `
    <div class="content-card">
      <div class="card-header"><h2>➕ Nuevo Tipo Transporte</h2></div>
      <form method="POST" action="/tipo_transporte">
        <div class="form-group"><label>Nombre:</label><input name="NOMBRE_TRANSPORTE" required /></div>
        <div style="display: flex; gap: 10px;">
          <button type="submit" class="btn btn-primary">💾 Guardar</button>
          <a href="/tipo_transporte" class="btn btn-secondary">Cancelar</a>
        </div>
      </form>
    </div>`;
  res.send(renderPage("Nuevo Tipo Transporte", content, "tipo_transporte"));
});

app.post("/tipo_transporte", (req, res) => {
  db.query("INSERT INTO tipo_transporte (NOMBRE_TRANSPORTE) VALUES (?)", [req.body.NOMBRE_TRANSPORTE], () => res.redirect("/tipo_transporte"));
});

app.get("/tipo_transporte/editar/:id", (req, res) => {
  db.query("SELECT * FROM tipo_transporte WHERE id_tt = ?", [req.params.id], (err, rows) => {
    const r = rows[0];
    const content = `
      <div class="content-card">
        <div class="card-header"><h2>✏️ Editar Tipo Transporte</h2></div>
        <form method="POST" action="/tipo_transporte/editar/${r.id_tt}">
          <div class="form-group"><label>Nombre:</label><input name="NOMBRE_TRANSPORTE" value="${r.NOMBRE_TRANSPORTE}" required /></div>
          <div style="display: flex; gap: 10px;">
            <button type="submit" class="btn btn-primary">💾 Actualizar</button>
            <a href="/tipo_transporte" class="btn btn-secondary">Cancelar</a>
          </div>
        </form>
      </div>`;
    res.send(renderPage("Editar Tipo Transporte", content, "tipo_transporte"));
  });
});

app.post("/tipo_transporte/editar/:id", (req, res) => {
  db.query("UPDATE tipo_transporte SET NOMBRE_TRANSPORTE=? WHERE id_tt=?", [req.body.NOMBRE_TRANSPORTE, req.params.id], () => res.redirect("/tipo_transporte"));
});

app.get("/tipo_transporte/eliminar/:id", (req, res) => {
  db.query("DELETE FROM tipo_transporte WHERE id_tt = ?", [req.params.id], () => res.redirect("/tipo_transporte"));
});

// ========================
// CRUD ZONA PROVINCIA (Rediseñado)
// ========================
app.get("/zona_provincia", (req, res) => {
  db.query("SELECT * FROM zona_provincia", (err, rows) => {
    let tabla = `
      <div class="content-card">
        <div class="card-header">
          <h2>🗺️ Provincias</h2>
          <a href="/zona_provincia/nueva" class="btn btn-success">➕ Nueva</a>
        </div>
        <div class="table-container">
          <table>
            <thead><tr><th>ID</th><th>Nombre</th><th>Acciones</th></tr></thead>
            <tbody>`;
    rows.forEach(r => {
      tabla += `<tr>
        <td><strong>${r.id_zp}</strong></td>
        <td>${r.NOMBRE_PROVINCIA}</td>
        <td>
          <a href="/zona_provincia/editar/${r.id_zp}" class="btn btn-warning" style="padding: 6px 12px;">✏️</a>
          <a href="/zona_provincia/eliminar/${r.id_zp}" class="btn btn-danger" style="padding: 6px 12px;" onclick="return confirm('¿Eliminar?')">🗑️</a>
        </td>
      </tr>`;
    });
    tabla += `</tbody></table></div></div>`;
    res.send(renderPage("Provincias", tabla, "zona_provincia"));
  });
});

app.get("/zona_provincia/nueva", (req, res) => {
  const content = `
    <div class="content-card">
      <div class="card-header"><h2>➕ Nueva Provincia</h2></div>
      <form method="POST" action="/zona_provincia">
        <div class="form-group"><label>Nombre Provincia:</label><input name="NOMBRE_PROVINCIA" required /></div>
        <div style="display: flex; gap: 10px;">
          <button type="submit" class="btn btn-primary">💾 Guardar</button>
          <a href="/zona_provincia" class="btn btn-secondary">Cancelar</a>
        </div>
      </form>
    </div>`;
  res.send(renderPage("Nueva Provincia", content, "zona_provincia"));
});

app.post("/zona_provincia", (req, res) => {
  db.query("INSERT INTO zona_provincia (NOMBRE_PROVINCIA) VALUES (?)", [req.body.NOMBRE_PROVINCIA], () => res.redirect("/zona_provincia"));
});

app.get("/zona_provincia/editar/:id", (req, res) => {
  db.query("SELECT * FROM zona_provincia WHERE id_zp = ?", [req.params.id], (err, rows) => {
    const r = rows[0];
    const content = `
      <div class="content-card">
        <div class="card-header"><h2>✏️ Editar Provincia</h2></div>
        <form method="POST" action="/zona_provincia/editar/${r.id_zp}">
          <div class="form-group"><label>Nombre Provincia:</label><input name="NOMBRE_PROVINCIA" value="${r.NOMBRE_PROVINCIA}" required /></div>
          <div style="display: flex; gap: 10px;">
            <button type="submit" class="btn btn-primary">💾 Actualizar</button>
            <a href="/zona_provincia" class="btn btn-secondary">Cancelar</a>
          </div>
        </form>
      </div>`;
    res.send(renderPage("Editar Provincia", content, "zona_provincia"));
  });
});

app.post("/zona_provincia/editar/:id", (req, res) => {
  db.query("UPDATE zona_provincia SET NOMBRE_PROVINCIA=? WHERE id_zp=?", [req.body.NOMBRE_PROVINCIA, req.params.id], () => res.redirect("/zona_provincia"));
});

app.get("/zona_provincia/eliminar/:id", (req, res) => {
  db.query("DELETE FROM zona_provincia WHERE id_zp = ?", [req.params.id], () => res.redirect("/zona_provincia"));
});

// ========================
// CRUD ZONA DISTRITO (Rediseñado)
// ========================
app.get("/zona_distrito", (req, res) => {
  db.query(`SELECT zd.*, zp.NOMBRE_PROVINCIA FROM zona_distrito zd LEFT JOIN zona_provincia zp ON zd.id_zp = zp.id_zp`, (err, rows) => {
    let tabla = `
      <div class="content-card">
        <div class="card-header">
          <h2>🏘️ Distritos</h2>
          <a href="/zona_distrito/nuevo" class="btn btn-success">➕ Nuevo</a>
        </div>
        <div class="table-container">
          <table>
            <thead><tr><th>ID</th><th>Nombre</th><th>Provincia</th><th>Acciones</th></tr></thead>
            <tbody>`;
    rows.forEach(r => {
      tabla += `<tr>
        <td><strong>${r.id_zd}</strong></td>
        <td>${r.NOMBRE_DISTRITO}</td>
        <td>${r.NOMBRE_PROVINCIA || '-'}</td>
        <td>
          <a href="/zona_distrito/editar/${r.id_zd}" class="btn btn-warning" style="padding: 6px 12px;">✏️</a>
          <a href="/zona_distrito/eliminar/${r.id_zd}" class="btn btn-danger" style="padding: 6px 12px;" onclick="return confirm('¿Eliminar?')">🗑️</a>
        </td>
      </tr>`;
    });
    tabla += `</tbody></table></div></div>`;
    res.send(renderPage("Distritos", tabla, "zona_distrito"));
  });
});

app.get("/zona_distrito/nuevo", (req, res) => {
  db.query("SELECT id_zp, NOMBRE_PROVINCIA FROM zona_provincia", (err, provincias) => {
    let options = '<option value="">-- Seleccionar --</option>';
    provincias.forEach(p => options += `<option value="${p.id_zp}">${p.NOMBRE_PROVINCIA}</option>`);
    const content = `
      <div class="content-card">
        <div class="card-header"><h2>➕ Nuevo Distrito</h2></div>
        <form method="POST" action="/zona_distrito">
          <div class="form-group"><label>Nombre Distrito:</label><input name="NOMBRE_DISTRITO" required /></div>
          <div class="form-group"><label>Provincia:</label><select name="id_zp">${options}</select></div>
          <div style="display: flex; gap: 10px;">
            <button type="submit" class="btn btn-primary">💾 Guardar</button>
            <a href="/zona_distrito" class="btn btn-secondary">Cancelar</a>
          </div>
        </form>
      </div>`;
    res.send(renderPage("Nuevo Distrito", content, "zona_distrito"));
  });
});

app.post("/zona_distrito", (req, res) => {
  const { NOMBRE_DISTRITO, id_zp } = req.body;
  db.query("INSERT INTO zona_distrito (NOMBRE_DISTRITO, id_zp) VALUES (?,?)", [NOMBRE_DISTRITO, id_zp || null], () => res.redirect("/zona_distrito"));
});

app.get("/zona_distrito/editar/:id", (req, res) => {
  db.query("SELECT * FROM zona_distrito WHERE id_zd = ?", [req.params.id], (err, rows) => {
    const r = rows[0];
    db.query("SELECT id_zp, NOMBRE_PROVINCIA FROM zona_provincia", (err, provincias) => {
      let options = '<option value="">-- Seleccionar --</option>';
      provincias.forEach(p => options += `<option value="${p.id_zp}" ${p.id_zp == r.id_zp ? 'selected' : ''}>${p.NOMBRE_PROVINCIA}</option>`);
      const content = `
        <div class="content-card">
          <div class="card-header"><h2>✏️ Editar Distrito</h2></div>
          <form method="POST" action="/zona_distrito/editar/${r.id_zd}">
            <div class="form-group"><label>Nombre Distrito:</label><input name="NOMBRE_DISTRITO" value="${r.NOMBRE_DISTRITO}" required /></div>
            <div class="form-group"><label>Provincia:</label><select name="id_zp">${options}</select></div>
            <div style="display: flex; gap: 10px;">
              <button type="submit" class="btn btn-primary">💾 Actualizar</button>
              <a href="/zona_distrito" class="btn btn-secondary">Cancelar</a>
            </div>
          </form>
        </div>`;
      res.send(renderPage("Editar Distrito", content, "zona_distrito"));
    });
  });
});

app.post("/zona_distrito/editar/:id", (req, res) => {
  const { NOMBRE_DISTRITO, id_zp } = req.body;
  db.query("UPDATE zona_distrito SET NOMBRE_DISTRITO=?, id_zp=? WHERE id_zd=?", [NOMBRE_DISTRITO, id_zp || null, req.params.id], () => res.redirect("/zona_distrito"));
});

app.get("/zona_distrito/eliminar/:id", (req, res) => {
  db.query("DELETE FROM zona_distrito WHERE id_zd = ?", [req.params.id], () => res.redirect("/zona_distrito"));
});

// ========================
// CRUD REGISTRO PRINCIPAL (Rediseñado)
// ========================
app.get("/registro", (req, res) => {
  db.query(`SELECT dr.*, 
            a.NOMBRE_ACCION, ae.ACCION_ESPECIFICA, sa.SUB_ACCION_ESP,
            act.NOMBRE_ACTIVIDAD, tt.NOMBRE_TRANSPORTE,
            zd.NOMBRE_DISTRITO, zp.NOMBRE_PROVINCIA
            FROM detalle_registro dr
            LEFT JOIN accion a ON dr.ID_ACCION = a.ID_ACCION
            LEFT JOIN accion_especifica ae ON dr.ID_AE = ae.ID_AE
            LEFT JOIN subaccion sa ON dr.ID_SA = sa.ID_SA
            LEFT JOIN actividad act ON dr.ID_ACTIVIDAD = act.ID_ACTIVIDAD
            LEFT JOIN tipo_transporte tt ON dr.id_tt = tt.id_tt
            LEFT JOIN zona_distrito zd ON dr.id_zd = zd.id_zd
            LEFT JOIN zona_provincia zp ON dr.id_zp = zp.id_zp
            ORDER BY dr.ID_REGISTRO DESC`, 
  (err, rows) => {
    if (err) throw err;
    let tabla = `
      <div class="content-card">
        <div class="card-header">
          <h2>📋 Registros Principales</h2>
          <a href="/registro/nuevo" class="btn btn-success">➕ Nuevo Registro</a>
        </div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th><th>Acción</th><th>Acción Esp.</th><th>Subacción</th>
                <th>Actividad</th><th>Supervisores</th><th>Empresa</th><th>Acciones</th>
              </tr>
            </thead>
            <tbody>`;
    rows.forEach(r => {
      tabla += `</tr>
        <td><strong>${r.ID_REGISTRO}</strong></td>
        <td>${r.NOMBRE_ACCION || '-'}</td>
        <td>${r.ACCION_ESPECIFICA || '-'}</td>
        <td>${r.SUB_ACCION_ESP || '-'}</td>
        <td>${r.NOMBRE_ACTIVIDAD || '-'}</td>
        <td><span class="badge badge-info">${r.NUM_SUPERVISORES || '-'}</span></td>
        <td>${r.EMPRESA_SUPERVISORA || '-'}</td>
        <td>
          <a href="/registro/editar/${r.ID_REGISTRO}" class="btn btn-warning" style="padding: 6px 12px;">✏️</a>
          <a href="/registro/eliminar/${r.ID_REGISTRO}" class="btn btn-danger" style="padding: 6px 12px;" onclick="return confirm('¿Eliminar?')">🗑️</a>
        </td>
      </tr>`;
    });
    tabla += `</tbody></table></div></div>`;
    res.send(renderPage("Registros", tabla, "registro"));
  });
});

app.get("/registro/nuevo", (req, res) => {
  Promise.all([
    new Promise(resolve => db.query("SELECT ID_ACCION, NOMBRE_ACCION FROM accion", (err, rows) => resolve(rows))),
    new Promise(resolve => db.query("SELECT ID_AE, ACCION_ESPECIFICA FROM accion_especifica", (err, rows) => resolve(rows))),
    new Promise(resolve => db.query("SELECT ID_SA, SUB_ACCION_ESP FROM subaccion", (err, rows) => resolve(rows))),
    new Promise(resolve => db.query("SELECT ID_ACTIVIDAD, NOMBRE_ACTIVIDAD FROM actividad", (err, rows) => resolve(rows))),
    new Promise(resolve => db.query("SELECT id_tt, NOMBRE_TRANSPORTE FROM tipo_transporte", (err, rows) => resolve(rows))),
    new Promise(resolve => db.query("SELECT id_zd, NOMBRE_DISTRITO FROM zona_distrito", (err, rows) => resolve(rows))),
    new Promise(resolve => db.query("SELECT id_zp, NOMBRE_PROVINCIA FROM zona_provincia", (err, rows) => resolve(rows)))
  ]).then(([acciones, acc_esp, subacciones, actividades, transportes, distritos, provincias]) => {
    const makeOptions = (data, idField, nameField) => {
      let opts = '<option value="">-- Seleccionar --</option>';
      data.forEach(item => opts += `<option value="${item[idField]}">${item[nameField]}</option>`);
      return opts;
    };
    
    const content = `
      <div class="content-card">
        <div class="card-header"><h2>➕ Nuevo Registro</h2></div>
        <form method="POST" action="/registro">
          <div class="grid-2">
            <div class="form-group"><label>Acción:</label><select name="ID_ACCION">${makeOptions(acciones, 'ID_ACCION', 'NOMBRE_ACCION')}</select></div>
            <div class="form-group"><label>Acción Específica:</label><select name="ID_AE">${makeOptions(acc_esp, 'ID_AE', 'ACCION_ESPECIFICA')}</select></div>
            <div class="form-group"><label>Subacción:</label><select name="ID_SA">${makeOptions(subacciones, 'ID_SA', 'SUB_ACCION_ESP')}</select></div>
            <div class="form-group"><label>Actividad:</label><select name="ID_ACTIVIDAD">${makeOptions(actividades, 'ID_ACTIVIDAD', 'NOMBRE_ACTIVIDAD')}</select></div>
            <div class="form-group"><label>Tipo Transporte:</label><select name="id_tt">${makeOptions(transportes, 'id_tt', 'NOMBRE_TRANSPORTE')}</select></div>
            <div class="form-group"><label>Distrito:</label><select name="id_zd">${makeOptions(distritos, 'id_zd', 'NOMBRE_DISTRITO')}</select></div>
            <div class="form-group"><label>Provincia:</label><select name="id_zp">${makeOptions(provincias, 'id_zp', 'NOMBRE_PROVINCIA')}</select></div>
            <div class="form-group"><label>N° Supervisores:</label><input type="number" name="NUM_SUPERVISORES" placeholder="Cantidad de supervisores" /></div>
            <div class="form-group"><label>Empresa Supervisora:</label><input name="EMPRESA_SUPERVISORA" placeholder="Nombre de la empresa" /></div>
            <div class="form-group"><label>Calidad Entregable:</label><input name="CALIDAD_ENTREGABLE" placeholder="Calidad del entregable" /></div>
            <div class="form-group"><label>N° Expediente:</label><input name="NRO_EXPEDIENTE" placeholder="Número de expediente" /></div>
            <div class="form-group"><label>Carta Línea:</label><input name="CARTA_LINEA" placeholder="Carta línea" /></div>
            <div class="form-group"><label>Contrato:</label><input name="CONTRATO" placeholder="Contrato" /></div>
            <div class="form-group"><label>Observaciones:</label><textarea name="OBSERVACIONES" rows="3" placeholder="Observaciones adicionales"></textarea></div>
          </div>
          <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button type="submit" class="btn btn-primary">💾 Guardar Registro</button>
            <a href="/registro" class="btn btn-secondary">Cancelar</a>
          </div>
        </form>
      </div>
    `;
    res.send(renderPage("Nuevo Registro", content, "registro"));
  });
});

app.post("/registro", (req, res) => {
  const {
    ID_ACCION, ID_AE, ID_SA, ID_ACTIVIDAD, id_tt, id_zd, id_zp,
    NUM_SUPERVISORES, EMPRESA_SUPERVISORA, CALIDAD_ENTREGABLE,
    NRO_EXPEDIENTE, CARTA_LINEA, OBSERVACIONES, CONTRATO
  } = req.body;
  db.query(`INSERT INTO detalle_registro 
    (ID_ACCION, ID_AE, ID_SA, ID_ACTIVIDAD, id_tt, id_zd, id_zp,
     NUM_SUPERVISORES, EMPRESA_SUPERVISORA, CALIDAD_ENTREGABLE,
     NRO_EXPEDIENTE, CARTA_LINEA, OBSERVACIONES, CONTRATO)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [ID_ACCION || null, ID_AE || null, ID_SA || null, ID_ACTIVIDAD || null,
     id_tt || null, id_zd || null, id_zp || null, NUM_SUPERVISORES || null,
     EMPRESA_SUPERVISORA || null, CALIDAD_ENTREGABLE || null, NRO_EXPEDIENTE || null,
     CARTA_LINEA || null, OBSERVACIONES || null, CONTRATO || null],
    () => res.redirect("/registro")
  );
});

app.get("/registro/editar/:id", (req, res) => {
  Promise.all([
    new Promise(resolve => db.query("SELECT * FROM detalle_registro WHERE ID_REGISTRO = ?", [req.params.id], (err, rows) => resolve(rows[0]))),
    new Promise(resolve => db.query("SELECT ID_ACCION, NOMBRE_ACCION FROM accion", (err, rows) => resolve(rows))),
    new Promise(resolve => db.query("SELECT ID_AE, ACCION_ESPECIFICA FROM accion_especifica", (err, rows) => resolve(rows))),
    new Promise(resolve => db.query("SELECT ID_SA, SUB_ACCION_ESP FROM subaccion", (err, rows) => resolve(rows))),
    new Promise(resolve => db.query("SELECT ID_ACTIVIDAD, NOMBRE_ACTIVIDAD FROM actividad", (err, rows) => resolve(rows))),
    new Promise(resolve => db.query("SELECT id_tt, NOMBRE_TRANSPORTE FROM tipo_transporte", (err, rows) => resolve(rows))),
    new Promise(resolve => db.query("SELECT id_zd, NOMBRE_DISTRITO FROM zona_distrito", (err, rows) => resolve(rows))),
    new Promise(resolve => db.query("SELECT id_zp, NOMBRE_PROVINCIA FROM zona_provincia", (err, rows) => resolve(rows)))
  ]).then(([registro, acciones, acc_esp, subacciones, actividades, transportes, distritos, provincias]) => {
    const makeOptionsSelected = (data, idField, nameField, selectedValue) => {
      let opts = '<option value="">-- Seleccionar --</option>';
      data.forEach(item => {
        const selected = item[idField] == selectedValue ? 'selected' : '';
        opts += `<option value="${item[idField]}" ${selected}>${item[nameField]}</option>`;
      });
      return opts;
    };
    
    const content = `
      <div class="content-card">
        <div class="card-header"><h2>✏️ Editar Registro #${registro.ID_REGISTRO}</h2></div>
        <form method="POST" action="/registro/editar/${registro.ID_REGISTRO}">
          <div class="grid-2">
            <div class="form-group"><label>Acción:</label><select name="ID_ACCION">${makeOptionsSelected(acciones, 'ID_ACCION', 'NOMBRE_ACCION', registro.ID_ACCION)}</select></div>
            <div class="form-group"><label>Acción Específica:</label><select name="ID_AE">${makeOptionsSelected(acc_esp, 'ID_AE', 'ACCION_ESPECIFICA', registro.ID_AE)}</select></div>
            <div class="form-group"><label>Subacción:</label><select name="ID_SA">${makeOptionsSelected(subacciones, 'ID_SA', 'SUB_ACCION_ESP', registro.ID_SA)}</select></div>
            <div class="form-group"><label>Actividad:</label><select name="ID_ACTIVIDAD">${makeOptionsSelected(actividades, 'ID_ACTIVIDAD', 'NOMBRE_ACTIVIDAD', registro.ID_ACTIVIDAD)}</select></div>
            <div class="form-group"><label>Tipo Transporte:</label><select name="id_tt">${makeOptionsSelected(transportes, 'id_tt', 'NOMBRE_TRANSPORTE', registro.id_tt)}</select></div>
            <div class="form-group"><label>Distrito:</label><select name="id_zd">${makeOptionsSelected(distritos, 'id_zd', 'NOMBRE_DISTRITO', registro.id_zd)}</select></div>
            <div class="form-group"><label>Provincia:</label><select name="id_zp">${makeOptionsSelected(provincias, 'id_zp', 'NOMBRE_PROVINCIA', registro.id_zp)}</select></div>
            <div class="form-group"><label>N° Supervisores:</label><input name="NUM_SUPERVISORES" value="${registro.NUM_SUPERVISORES || ''}" /></div>
            <div class="form-group"><label>Empresa Supervisora:</label><input name="EMPRESA_SUPERVISORA" value="${registro.EMPRESA_SUPERVISORA || ''}" /></div>
            <div class="form-group"><label>Calidad Entregable:</label><input name="CALIDAD_ENTREGABLE" value="${registro.CALIDAD_ENTREGABLE || ''}" /></div>
            <div class="form-group"><label>N° Expediente:</label><input name="NRO_EXPEDIENTE" value="${registro.NRO_EXPEDIENTE || ''}" /></div>
            <div class="form-group"><label>Carta Línea:</label><input name="CARTA_LINEA" value="${registro.CARTA_LINEA || ''}" /></div>
            <div class="form-group"><label>Contrato:</label><input name="CONTRATO" value="${registro.CONTRATO || ''}" /></div>
            <div class="form-group"><label>Observaciones:</label><textarea name="OBSERVACIONES" rows="3">${registro.OBSERVACIONES || ''}</textarea></div>
          </div>
          <div style="display: flex; gap: 10px; margin-top: 20px;">
            <button type="submit" class="btn btn-primary">💾 Actualizar</button>
            <a href="/registro" class="btn btn-secondary">Cancelar</a>
          </div>
        </form>
      </div>
    `;
    res.send(renderPage("Editar Registro", content, "registro"));
  });
});

app.post("/registro/editar/:id", (req, res) => {
  const {
    ID_ACCION, ID_AE, ID_SA, ID_ACTIVIDAD, id_tt, id_zd, id_zp,
    NUM_SUPERVISORES, EMPRESA_SUPERVISORA, CALIDAD_ENTREGABLE,
    NRO_EXPEDIENTE, CARTA_LINEA, OBSERVACIONES, CONTRATO
  } = req.body;
  db.query(`UPDATE detalle_registro SET
    ID_ACCION=?, ID_AE=?, ID_SA=?, ID_ACTIVIDAD=?, id_tt=?, id_zd=?, id_zp=?,
    NUM_SUPERVISORES=?, EMPRESA_SUPERVISORA=?, CALIDAD_ENTREGABLE=?,
    NRO_EXPEDIENTE=?, CARTA_LINEA=?, OBSERVACIONES=?, CONTRATO=?
    WHERE ID_REGISTRO=?`,
    [ID_ACCION || null, ID_AE || null, ID_SA || null, ID_ACTIVIDAD || null,
     id_tt || null, id_zd || null, id_zp || null, NUM_SUPERVISORES || null,
     EMPRESA_SUPERVISORA || null, CALIDAD_ENTREGABLE || null, NRO_EXPEDIENTE || null,
     CARTA_LINEA || null, OBSERVACIONES || null, CONTRATO || null, req.params.id],
    () => res.redirect("/registro")
  );
});

app.get("/registro/eliminar/:id", (req, res) => {
  db.query("DELETE FROM detalle_registro WHERE ID_REGISTRO = ?", [req.params.id], () => res.redirect("/registro"));
});

// ========================
// INICIAR SERVIDOR
// ========================
app.listen(3000, () => {
  console.log("\n🚀 =======================================");
  console.log("   SISTEMA  v2.0 - PROFESIONAL");
  console.log("   =======================================");
  console.log(`   🌐 Servidor: http://localhost:3000`);
  console.log(`   💾 Base de datos: db_darwin`);
  console.log(`   🎨 Interfaz moderna con diseño profesional`);
  console.log("   =======================================\n");
});
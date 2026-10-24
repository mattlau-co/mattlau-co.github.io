// ================================================================
//  Conexión con Firebase (la misma base de datos de tu app)
//  Estos datos son públicos por diseño: la seguridad la dan las reglas.
// ================================================================
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyBdkri4Qbnl09hsyBXbh-vwC9CFi0QUvBw",
  authDomain: "control-mate-y-lau-84d9c.firebaseapp.com",
  databaseURL: "https://control-mate-y-lau-84d9c-default-rtdb.firebaseio.com",
  projectId: "control-mate-y-lau-84d9c",
  storageBucket: "control-mate-y-lau-84d9c.firebasestorage.app",
  messagingSenderId: "989361862930",
  appId: "1:989361862930:web:bf676428f8397274455bcb"
};

// Carpeta del catálogo dentro de la base de datos (separada de los datos de la app)
window.RAIZ_CATALOGO = 'catalogo';

window.ML = {
  dinero: n => '$' + Math.round(Number(n) || 0).toLocaleString('es-CO'),
  esc: t => String(t ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c])),
  // Precio con descuento, redondeado a la centena
  conDescuento: (precio, d) => {
    precio = Number(precio) || 0; d = Number(d) || 0;
    return d > 0 ? Math.round(precio * (1 - d / 100) / 100) * 100 : precio;
  }
};

// Productos con los que arranca el catálogo.
// Después de cargarlos una vez desde el panel, los cambios se hacen en el panel (admin.html), no aquí.
window.PRODUCTOS_INICIALES = {
 "cortina": {
  "nombre": "Cortina de luces 3 x 3 m",
  "precio": 35000,
  "categoria": "Luces",
  "descripcion": "300 luces LED blanco frío que caen como lluvia sobre tu ventana o pared. Con control remoto y varios modos de luz.",
  "stock": 1,
  "foto": "cortina",
  "emoji": "✨",
  "orden": 10
 },
 "guirnalda": {
  "nombre": "Guirnalda de luz cálida 10 m",
  "precio": 12000,
  "categoria": "Luces",
  "descripcion": "100 luces en un alambre fino que se dobla a tu gusto. Para el árbol, una repisa o un frasco de vidrio. Se conecta por USB.",
  "stock": 2,
  "foto": "guirnalda",
  "emoji": "✨",
  "orden": 20,
  "fotos": [
   "guirnalda_2"
  ]
 },
 "hadas_blanco": {
  "nombre": "Luces de hadas 10 m con control",
  "precio": 22000,
  "categoria": "Luces",
  "descripcion": "100 luces LED blancas con control remoto y varios modos.",
  "stock": 1,
  "foto": "hadas_blanco",
  "emoji": "✨",
  "orden": 30
 },
 "hadas_figuras": {
  "nombre": "Guirnalda de copos y esferas",
  "precio": 25000,
  "categoria": "Luces",
  "descripcion": "3 metros de luz cálida con copos de nieve, arbolitos y esferas. Para ventanas, cabeceros y repisas.",
  "stock": 2,
  "foto": "hadas_figuras_p",
  "emoji": "✨",
  "orden": 40
 },
 "lampara_rama": {
  "nombre": "Ramas de abedul con luz",
  "precio": 20000,
  "categoria": "Luces",
  "descripcion": "Ramas iluminadas de luz cálida, sin cables: funcionan con pilas. Ponlas en tu florero y llenan de brillo cualquier rincón. No incluye el florero.",
  "stock": 1,
  "foto": "lampara_rama_p",
  "emoji": "🌿",
  "orden": 50
 },
 "lampara_vid": {
  "nombre": "Enredadera de luz para pared",
  "precio": 55000,
  "categoria": "Luces",
  "descripcion": "1,85 m de ramas flexibles con 96 luces cálidas y 8 modos. La moldeas a tu gusto en la pared: en la sala, junto al televisor o en la cabecera. Funciona por USB.",
  "stock": 4,
  "foto": "lampara_vid",
  "emoji": "🌿",
  "orden": 60,
  "video": "enredadera-luz.mp4",
  "nuevo": true
 },
 "noel_rojo": {
  "nombre": "Papá Noel del farol",
  "precio": 50000,
  "categoria": "Papá Noel",
  "descripcion": "40 cm. Con su saco de regalos y su farol, listo para iluminar tu repisa.",
  "stock": 1,
  "foto": "noel_rojo_p",
  "emoji": "🎅",
  "orden": 70,
  "video": "papa-noel-rojo.mp4"
 },
 "noel_verde": {
  "nombre": "Papá Noel de la lista",
  "precio": 48000,
  "categoria": "Papá Noel",
  "descripcion": "40 cm. De gorro verde a cuadros y chaleco de tweed, con su saco de pino y la lista de los que se portaron bien.",
  "stock": 1,
  "foto": "noel_verde",
  "emoji": "🎅",
  "orden": 80
 },
 "noel_rustico": {
  "nombre": "Papá Noel del bosque",
  "precio": 70000,
  "categoria": "Papá Noel",
  "descripcion": "33 cm sentado. Abrigo a cuadros rojos con peluche café, saco de yute y su atado de ramas. Se sienta en el borde de la repisa con las piernas colgando.",
  "stock": 1,
  "foto": "noel_rustico_p",
  "emoji": "🎅",
  "orden": 90
 },
 "noel_blanco": {
  "nombre": "Papá Noel de nieve",
  "precio": 75000,
  "categoria": "Papá Noel",
  "descripcion": "33 cm sentado. Todo en blanco con bordados plateados, con su saco y un regalo. Se sienta en el borde de tu repisa con las piernas colgando.",
  "stock": 1,
  "foto": "noel_blanco_p",
  "emoji": "🎅",
  "orden": 100
 },
 "noel_retractil": {
  "nombre": "Papá Noel dorado de patas largas",
  "precio": 70000,
  "categoria": "Papá Noel",
  "descripcion": "Hasta 56 cm de alto y 20 cm de ancho. Sus patas se estiran o se encogen para que quede perfecto en la mesa o en el piso. En tonos dorado y crema.",
  "stock": 1,
  "foto": "noel_retractil_p",
  "emoji": "🎅",
  "orden": 110
 },
 "nieve_retractil": {
  "nombre": "Muñeco de nieve de patas largas",
  "precio": 70000,
  "categoria": "Papá Noel",
  "descripcion": "Hasta 50 cm de alto y 20 cm de ancho. Sus patas se estiran o se encogen a tu gusto. Con sombrero, bufanda y overol en dorado y crema.",
  "stock": 1,
  "foto": "nieve_retractil_p",
  "emoji": "⛄",
  "orden": 120
 },
 "columpio_luna": {
  "nombre": "Papá Noel en la luna",
  "precio": 20000,
  "categoria": "Decoración",
  "descripcion": "Pieza plana de madera con el diseño impreso: Papá Noel en un columpio de luna, con piñas, regalos y \"Merry\". Con base para la mesa, la repisa o la biblioteca.",
  "stock": 2,
  "foto": "columpio_luna_p",
  "emoji": "🌙",
  "orden": 130
 },
 "trineo": {
  "nombre": "Trineo de Papá Noel en acrílico",
  "precio": 15000,
  "categoria": "Decoración",
  "descripcion": "Lámina de acrílico plana con la imagen impresa, en tonos blanco, azul y dorado. Viene con su base para ponerla en el escritorio o la repisa.",
  "stock": 3,
  "foto": "trineo_p",
  "emoji": "🦌",
  "orden": 140
 },
 "arte_pared": {
  "nombre": "Trío de cuadros de Navidad",
  "precio": 28000,
  "categoria": "Decoración",
  "descripcion": "3 lienzos de 20 x 30 cm cada uno, del tamaño de una hoja carta. Árboles y renos en vino y crema, sin marco. Lindos sobre una consola o la cabecera.",
  "stock": 1,
  "foto": "arte_pared",
  "emoji": "🖼️",
  "orden": 150
 },
 "adornos_20": {
  "nombre": "Adornos de madera para el árbol x20",
  "precio": 25000,
  "categoria": "Decoración",
  "descripcion": "20 adornos de madera pintada: Papá Noel, reno, muñeco de nieve, casita, estrella, bastón, botas y más. Listos para colgar y darle a tu árbol un toque rústico.",
  "stock": 1,
  "foto": "adornos_20_p",
  "emoji": "🎄",
  "orden": 160
 },
 "gancho_llaves": {
  "nombre": "Porta llaves de Navidad",
  "precio": 20000,
  "categoria": "Decoración",
  "descripcion": "Llave de madera roja con el trineo de Papá Noel y 4 ganchos metálicos. Para la entrada: llaves, collares o gorros siempre a la mano. Fácil de colgar.",
  "stock": 2,
  "foto": "gancho_llaves_p",
  "emoji": "🔑",
  "orden": 170
 },
 "acrilico_leon": {
  "nombre": "Placa \"Sé fuerte y valiente\"",
  "precio": 28000,
  "categoria": "Decoración",
  "descripcion": "Acrílico transparente con el León de Judá y Josué 1:9, sobre base de madera natural. Un regalo con mensaje para el escritorio o la mesa de noche.",
  "stock": 1,
  "foto": "acrilico_leon",
  "emoji": "🦁",
  "orden": 180
 },
 "acrilico_cristo": {
  "nombre": "Placa \"Cristo me\"",
  "precio": 18000,
  "categoria": "Decoración",
  "descripcion": "Acrílico transparente con base de madera: Cristo me sanó, me perdonó, me amó… Un recordatorio de fe para el escritorio, la mesa de noche o para regalar.",
  "stock": 1,
  "foto": "acrilico_cristo",
  "emoji": "✝️",
  "orden": 190
 },
 "cojin_baston": {
  "nombre": "Funda de cojín bastón de caramelo",
  "precio": 35000,
  "categoria": "Cojines",
  "descripcion": "Funda roja de felpa suave de 45 x 45 cm con bastón de caramelo y moño en relieve. Con cremallera y lavable. Precio por funda; no incluye el relleno.",
  "stock": 2,
  "foto": "cojin_baston_p",
  "emoji": "🛋️",
  "orden": 200
 },
 "fundas_ciervo": {
  "nombre": "Par de fundas de reno",
  "precio": 50000,
  "categoria": "Cojines",
  "descripcion": "Juego de 2 fundas de felpa suave de 45 x 45 cm, con la cara de reno en relieve tipo jacquard y nariz roja. Con cremallera. No incluyen el relleno.",
  "stock": 1,
  "foto": "fundas_ciervo_p",
  "emoji": "🛋️",
  "orden": 210
 },
 "gorro": {
  "nombre": "Gorro de Papá Noel para usar",
  "precio": 15000,
  "categoria": "Detalles",
  "descripcion": "Para ponértelo: talla única, suave por dentro, con borde y pompón esponjosos. Para la novena, la cena y las fotos en familia.",
  "stock": 3,
  "foto": "gorro_p",
  "emoji": "🎅",
  "orden": 220
 },
 "boligrafos": {
  "nombre": "Bolígrafo navideño",
  "precio": 4000,
  "categoria": "Detalles",
  "descripcion": "Bolígrafo de tinta negra con un personaje navideño en la punta: Papá Noel, reno, muñeco de nieve y más. El personaje es sorpresa. Ideal para la bolsita de regalos.",
  "stock": 10,
  "foto": "boligrafos_p",
  "emoji": "🖊️",
  "orden": 230
 },
 "llaveros": {
  "nombre": "Dije navideño con broche",
  "precio": 3000,
  "categoria": "Detalles",
  "descripcion": "Dije esmaltado con broche dorado para llaves, bolso o morral. El diseño es sorpresa. Perfecto para regalar en la novena o el amigo secreto.",
  "stock": 24,
  "foto": "llaveros_p",
  "emoji": "🔑",
  "orden": 240
 },
 "velas_intencion": {
  "nombre": "Vela de intención",
  "precio": 3500,
  "categoria": "Velas",
  "descripcion": "Hecha a mano, con la palabra en relieve. Elige la tuya: Gratitud, Fe, Unión, Esperanza o Salud (dinos cuál en el pedido). Se vende por unidad.",
  "stock": 15,
  "foto": "velas_intencion_p",
  "emoji": "🕯️",
  "orden": 250,
  "aroma": 2000,
  "nuevo": true
 },
 "velas_largas_de_colores_x5": {
  "nombre": "Velas largas de colores x5",
  "precio": 6500,
  "categoria": "Velas",
  "descripcion": "Hechas a mano. 5 velas de 20 cm, más gruesas que las comunes, en colores surtidos. Para la noche de velitas o la novena.",
  "stock": 10,
  "foto": "velas_largas_p",
  "emoji": "🕯️",
  "orden": 270,
  "nuevo": true
 },
 "velas_largas_de_colores_x10": {
  "nombre": "Velas largas de colores x10",
  "precio": 12000,
  "categoria": "Velas",
  "descripcion": "Hechas a mano. Paquete de 10 velas de 20 cm, más gruesas y duraderas que las comunes, una de cada color: rojo, naranja, amarillo, verde claro, verde oscuro, azul claro, azul, morado, fucsia y negro. Para la noche de velitas o la novena.",
  "stock": 5,
  "foto": "velas_largas_p",
  "emoji": "🕯️",
  "orden": 280,
  "nuevo": true
 },
 "velas_pino": {
  "nombre": "Vela pino de Navidad",
  "precio": 10000,
  "categoria": "Velas",
  "descripcion": "Hecha a mano en forma de pino, en verde bosque o crema. Linda encendida en la mesa de Navidad o como detalle de regalo.",
  "stock": 6,
  "foto": "velas_pino_p",
  "emoji": "🎄",
  "orden": 290,
  "aroma": 3500,
  "nuevo": true
 },
 "set_intenciones": {
  "nombre": "Set de 5 intenciones",
  "precio": 17000,
  "categoria": "Velas",
  "descripcion": "Hechas a mano: Gratitud, Fe, Unión, Esperanza y Salud, en su cajita de regalo con cinta. Un detalle con mensaje para la novena o el amigo secreto.",
  "stock": 3,
  "foto": "velas_intencion_p",
  "emoji": "🎁",
  "orden": 260,
  "aroma": 8000,
  "nuevo": true
 }
};

window.AJUSTES_INICIALES = {
 "whatsapp": "573015264838",
 "entrega": "entregas en Medellín",
 "anuncio": {
  "texto": "Pedidos de Navidad hasta el 20 de diciembre",
  "activo": false
 }
};

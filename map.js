var osm = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png");
var map = L.map("map", {
  center: [40.463667, -3.74922],
  zoom: 5.5,
  layers: osm,
});
// Insertar título en el mapa
var title = L.control();
title.onAdd = function (map) {
  var div = L.DomUtil.create("div", "info");
  div.innerHTML +=
    "<h2>Sedes de ACCU España</h2>Visor web con la red de sedes de la Asociación de la Enfermedad de Crohn y Colitis Ulcerosa en España";
  return div;
};
title.addTo(map);

//ICONO SEDE ACCU
var LeafIcon = L.Icon.extend({
  options: {
    iconSize: [18, 18],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  },
});

//Crear contenido de sede Andalucía - Nº1
var Andalucía = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp1 =
  "Málaga<ul><li>Calle Camino de los Castillejos</li><li>Teléfono: 617 013 215</li><li>Persona de contacto: Paqui Cano</li></ul>";
var customPopUp2 =
  "Jaén<ul><li>Paseo Virgen de Linarejos</li><li>Teléfono: 610 318 351</li><li>Persona de contacto: Pedro Ibañez</li</ul>";
var customPopUp3 =
  "Granada<ul><li>Calle Escultos Navas Parejo, Edificio Carolina, Local 2</li><li>Teléfono: 630 757 957</li><li>Persona de contacto: Antonio Hermoso Quintana</li</ul>";
var customPopUp4 =
  "Córdoba<ul><li>Calle María Montesori</li><li>Teléfono: 957 271 719 - 649 503 705</li><li>Persona de contacto: Aurora Navarro</li</ul>";
var customPopUp5 =
  "Campo de Gibraltar<ul><li>Plaza de Rafael Montoya Joya, Local 10 B</li><li>Teléfono: 639 122 098</li><li>Persona de contacto: Paqui Bautista Pavón</li</ul>";
var customPopUp6 =
  "Cádiz<ul><li>Avenida de la Ilustración</li><li>Centro de Promoción ciudadana El Puntal</li><li>Teléfono: 653 962 231</li></ul>";
var customPopUp7 =
  "Huelva<ul><li>Contacto: accuhuelva@gmail.com</li><li>Persona de contacto: Juan Antonio Contreras</li></ul>";
var customPopUp8 =
  "Almería<ul><li>Contacto: asoc.accualmeria@gmail.com</li><li>Teléfono: 622 206 768<li>Persona de contacto: Javier González Rodrigo</li></ul>";

//Grupos - Sedes Andalucía
//var sedes_Andalucía = new L.LayerGroup();
var sedes_andalucía = new L.LayerGroup();
L.marker([36.72016, -4.42034], { icon: Andalucía })
  .addTo(sedes_andalucía)
  .bindPopup(customPopUp1);
L.marker([37.76922, 37.76922], { icon: Andalucía })
  .addTo(sedes_andalucía)
  .bindPopup(customPopUp2);
L.marker([37.18817, -3.60667], { icon: Andalucía })
  .addTo(sedes_andalucía)
  .bindPopup(customPopUp3);
L.marker([37.89155, -4.77275], { icon: Andalucía })
  .addTo(sedes_andalucía)
  .bindPopup(customPopUp4);
L.marker([36.137741, -5.345374], { icon: Andalucía })
  .addTo(sedes_andalucía)
  .bindPopup(customPopUp5);
L.marker([36.5299, -6.29241], { icon: Andalucía })
  .addTo(sedes_andalucía)
  .bindPopup(customPopUp6);
L.marker([37.26638, -6.94004], { icon: Andalucía })
  .addTo(sedes_andalucía)
  .bindPopup(customPopUp7);
L.marker([36.83814, -2.45974], { icon: Andalucía })
  .addTo(sedes_andalucía)
  .bindPopup(customPopUp8);

//Crear contenido de sedes Galicia - Nº2
var Galicia = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp9 =
  "Coruña<ul><li>Calle Camino de los Castillejos</li><li>Teléfono: 617 013 215</li><li>Persona de contacto: Paqui Cano</li></ul>";
var customPopUp10 =
  "Vigo<ul><li>Paseo Virgen de Linarejos</li><li>Teléfono: 610 318 351</li><li>Persona de contacto: Pedro Ibañez</li</ul>";
var customPopUp11 =
  "Ourense<ul><li>Calle Escultos Navas Parejo, Edificio Carolina, Local 2</li><li>Teléfono: 630 757 957</li><li>Persona de contacto: Antonio Hermoso Quintana</li</ul>";

//Grupos - Sedes Galicia
var sedes_Galicia = new L.LayerGroup();
L.marker([43.37135, -8.396], { icon: Galicia })
  .addTo(sedes_Galicia)
  .bindPopup(customPopUp9);
L.marker([42.23282, -8.72264], { icon: Galicia })
  .addTo(sedes_Galicia)
  .bindPopup(customPopUp10);
L.marker([42.33669, -7.86407], { icon: Galicia })
  .addTo(sedes_Galicia)
  .bindPopup(customPopUp11);

//Crear contenido de sede Asturias - Nº3
var Asturias = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp12 =
  "Gijón<ul><li>Avenida Moreda nº11</li><li>Teléfono: 985 091 237</li><li>Persona de contacto: Concepción López Areces</li></lu>";
var customPopUp13 =
  "Avilés<ul><li>Calle Santa Apolonia nº126</li><li>Persona de contacto: Concepción López Areces</li></lu>";
var customPopUp14 =
  "Oviedo<ul><li>Avenida Roma nº4</li><li>Persona de contacto: Concepción López Areces</li></lu>";

//Grupos - Sedes Asturias
var sedes_asturias = new L.LayerGroup();
L.marker([43.53573, -5.66152], { icon: asturias })
  .addTo(sedes_asturias)
  .bindPopup(customPopUp12);
L.marker([43.5558, -5.92762], { icon: asturias })
  .addTo(sedes_asturias)
  .bindPopup(customPopUp13);
L.marker([43.36029, -5.84476], { icon: asturias })
  .addTo(sedes_asturias)
  .bindPopup(customPopUp14);

//Crear contenido de sede Cantabria - Nº4
var Cantabria = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp15 =
  "Santander<ul><li>Avda Cardenal Herrera Oria, nº63 Interior</li><li>Teléfono: 655 182 953</li><li>Persona de contacto: José Ramón Diego Paredes</li></lu>";

//Grupos - Sede Cantabria
var sede_cantabria = new L.LayerGroup();
L.marker([43.46472, -3.80444], { icon: Cantabria })
  .addTo(sede_cantabria)
  .bindPopup(customPopUp15);

//Crear contenido de sede Euskadi- Nº5
var Euskadi = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp16 =
  "Guipúzcoa<ul><li>Pº Zarategi nº100, Txara 1</li><li>Teléfono: 943 245 624</li><li>Persona de contacto: Jone Argoitia Alkorta</li></lu>";
var customPopUp17 =
  "Bilbao<ul><li>Calle Uribitarte nº22 - 1º Departamento A</li><li>Teléfono: 944 762 674/648 251 090</li><li>Persona de contacto: JAlfredo Gómez Rodríguez</li></lu>";
var customPopUp18 =
  "Álava<ul><li>Calle Pintor Vicente Abreu nº7 bajo</li><li>Teléfono: 945 229 140</li><li>Persona de contacto: Lui J. Blanco Merino</li></ul>";

//Grupos - Sede Euskadi
var sede_euskadi = new L.LayerGroup();
L.marker([43.29181, -1.98851], { icon: Euskadi })
  .addTo(sede_euskadi)
  .bindPopup(customPopUp16);
L.marker([43.257, -2.92344], { icon: Euskadi })
  .addTo(sede_euskadi)
  .bindPopup(customPopUp17);
L.marker([42.846718, -2.671635], { icon: Euskadi })
  .addTo(sede_euskadi)
  .bindPopup(customPopUp18);

//Crear contenido de sede Navarra - Nº6
var Navarra = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp19 =
  "Pamplona<ul><li>Calle Mendigorria, nº12 Bajo</li><li>Teléfono: 607 163 514</li><li>Persona de contacto: José Ángel Martínez Fonseca</li></lu>";

//Grupos - Sede Navarra
var sede_navarra = new L.LayerGroup();
L.marker([42.8233, -1.65138], { icon: Navarra })
  .addTo(sede_navarra)
  .bindPopup(customPopUp19);

//Crear contenido de sede La Rioja- Nº7
var LaRioja = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp20 =
  "Logroño<ul><li>Casa de las Asociaciones, Parque de San Antonio</li><li>Teléfono: 644 968 434</li><li>Persona de contacto: Ana García Parellada</li></lu>";

//Grupos - Sede La Rioja
var sede_larioja = new L.LayerGroup();
L.marker([36.97706, -2.44373], { icon: LaRioja })
  .addTo(sede_larioja)
  .bindPopup(customPopUp20);

//Crear contenido de sede Aragón- Nº8
var Aragon = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp21 =
  "Zaragoza<ul><li>Plaza Nuestra Señora del Pilar nº16, Centro Oficina 6</li><li>Teléfono: 976 274 214/li><li>Persona de contacto: César Domingo Falcón</li></lu>";

//Grupos - Sede Aragón
var sede_aragon = new L.LayerGroup();
L.marker([41.0, -1.0], { icon: Aragon })
  .addTo(sede_aragon)
  .bindPopup(customPopUp21);

//Crear contenido de sede Cataluña- Nº9
var Cataluña = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp22 =
  "Barcelona<ul><li>Calle Pere Vergés, nº1, planta 9, despacho 3</li><li>Teléfono: 93 314 20 62</li><li>Persona de contacto: Alejandro Amo Macías</li></lu>";

//Grupos - Sede Cataluña
var sede_cataluña = new L.LayerGroup();
L.marker([41.38879, 2.15899], { icon: Cataluña })
  .addTo(sede_cataluña)
  .bindPopup(customPopUp22);

//Crear contenido de sede Com.Valencia- Nº10
var Valencia = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp23 =
  "Valencia<ul><li>Calle Conde de Altea nº 31, 1º Puerta 2ª</li><li>Teléfono: 963 520 598</li><li>Persona de contacto: José Ramón García Fernández</li></lu>";

//Grupos - Sede Valencia
var sede_valencia = new L.LayerGroup();
L.marker([39.4702, -0.3768], { icon: Valencia })
  .addTo(sede_valencia)
  .bindPopup(customPopUp23);

//Crear contenido de sede Murcia- Nº11
var Murcia = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp24 =
  "Cartagena<ul><li>accucartagena@gmail.com</li><li>Teléfono: 608 548 505</li><li>Persona de contacto: Diego Miñarro Quiñonero</li></lu>";
var customPopUp25 =
  "Murcia<ul><li>Calle Alberto  Sevilla, 7 Bl.1 Esc. 7</li><li>Teléfono: 601 300 512</li><li>Persona de contacto:Esperanza Navarro Pastor</li></ul>";
//Grupos - Sede Murcia
var sede_murcia = new L.LayerGroup();
L.marker([37.6142, -0.995], { icon: Murcia })
  .addTo(sede_murcia)
  .bindPopup(customPopUp24);
L.marker([37.98704, -1.13004], { icon: Murcia })
  .addTo(sede_murcia)
  .bindPopup(customPopUp25);

//Crear contenido de sede Extremadura- Nº12
var extremadura = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp26 =
  "Badajoz<ul><li>Calle Gerardo Ramírez Sánchez</li><li>Teléfono: 924 097 824</li></lu>";
var customPopUp27 =
  "Mérida<ul><li>Calle Atarazanas, nº25</li><li>Teléfono: 924 097 824</li></ul>";
var customPopUp28 =
  "Cáceres<ul><li>Edificio Valhondo, Planta 2ª, Despacho 5, Av. de la Universidad</li><li>Teléfono: 927 762 545</li><li>Persona de contacto: Mª Luisa Rodríguez Pozo</li></ul>";
//Grupos - Sede extremadura
var sede_extremadura = new L.LayerGroup();
L.marker([38.8786, -6.97028], { icon: extremadura })
  .addTo(sede_extremadura)
  .bindPopup(customPopUp26);
L.marker([38.91611, -6.34366], { icon: Murcia })
  .addTo(sede_extremadura)
  .bindPopup(customPopUp27);
L.marker([39.47649, -6.37224], { icon: Murcia })
  .addTo(sede_extremadura)
  .bindPopup(customPopUp28);

//Crear contenido de sede Castilla La Mancha- Nº13
var lamancha = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp29 =
  "Toledo<ul><li>accutoledo@hotmail.com</li><li>Teléfono: 924 097 824</li></ul>";
var customPopUp30 =
  "Albacete<ul><li>Calle Dr. Fleming, nº12  - 1ª Planta</li><li>Teléfono: 967 55 89 04</li><li>Persona de contacto: Rafael Cebrián</li></ul>";
var customPopUp31 =
  "Cuenca<ul><li>accucuenca@gmail.com</li><li>Teléfono: 699 704 707</li><li>Persona de contacto: Juana Madrigal Baena</li></ul>";
//Grupos - Sede Castilla La Mancha
var sede_lamancha = new L.LayerGroup();
L.marker([39.8568, -4.02448], { icon: lamancha })
  .addTo(sede_lamancha)
  .bindPopup(customPopUp29);
L.marker([38.99424, -1.85643], { icon: lamancha })
  .addTo(sede_lamancha)
  .bindPopup(customPopUp30);
L.marker([40.0718, -2.13401], { icon: lamancha })
  .addTo(sede_lamancha)
  .bindPopup(customPopUp31);

//Crear contenido de sede Castilla y León Nº14
var castillaLeon = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp32 =
  "León<ul><li>Calle Frontón, nº7</li><li>Teléfono: 619 436 502</li><li>José A. Pérez Vázquez</li></ul>";
var customPopUp33 =
  "Zamora<ul><li>Calle Santa Teresa, nº37</li><li>Teléfono: 693 941 397</li><li>Persona de contacto: Mª Mercedes Pérez Rodríguez</li></ul>";
var customPopUp34 =
  "Valladolid<ul><li>C.C. Delicias - Pº Juan Carlos I, nº20</li><li>Teléfono: 686 717 063</li><li>Persona de contacto: José Ángel León</li></ul>";
var customPopUp35 =
  "Salamanca<ul><li>Calle Gran Capitán, nº53-57</li><li>Teléfono: 923 134 811</li><li>Persona de contacto: Felipe A. Martín de Manueles</li></ul>";
var customPopUp36 =
  "Burgos<ul><li>Calle Jerez, nº13</li><li>Teléfono: 629 284 052</li><li>Persona de contacto: Bernardo López Ureta</li></ul>";
//Grupos - Sede Castilla y León
var sede_castillaLeon = new L.LayerGroup();
L.marker([42.60003, -5.57032], { icon: castillaLeon })
  .addTo(sede_castillaLeon)
  .bindPopup(customPopUp32);
L.marker([41.5033, -5.74628], { icon: castillaLeon })
  .addTo(sede_castillaLeon)
  .bindPopup(customPopUp33);
L.marker([41.6529, -4.72839], { icon: castillaLeon })
  .addTo(sede_castillaLeon)
  .bindPopup(customPopUp34);
L.marker([40.96882, -5.66388], { icon: castillaLeon })
  .addTo(sede_castillaLeon)
  .bindPopup(customPopUp35);
L.marker([42.34106, -3.70184], { icon: castillaLeon })
  .addTo(sede_castillaLeon)
  .bindPopup(customPopUp36);

//Crear contenido de sede Baleares Nº15
var baleares = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp37 =
  "Mallorca<ul><li>Calle De la Rosa, nº3-3º</li><li>Teléfono: 971 726 407</li><li>Persona de contacto: Juan Porto Morado</li></ul>";
var customPopUp38 =
  "Menorca<ul><li>Cami de Ses Vinyes, nº84-1º</li><li>Teléfono: 667 529 671/971 354 515</li><li>Persona de contacto: Jaume Morla Pons</li></ul>";

//Grupos - Sede baleares
var sede_baleares = new L.LayerGroup();
L.marker([39.56939, 2.65024], { icon: baleares })
  .addTo(sede_baleares)
  .bindPopup(customPopUp37);
L.marker([40.0004, 3.99997], { icon: baleares })
  .addTo(sede_baleares)
  .bindPopup(customPopUp38);

//Crear contenido de sede Canarias Nº16
var canarias = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp39 =
  "Gran Canaria<ul><li>Calle Exterior - Local 7 Parque Urb. de San Juan</li><li>Teléfono: 669 305 237</li><li>Persona de contacto: Fuensanta León Amador</li></ul>";

//Grupos - Sede canarias
var sede_canarias = new L.LayerGroup();
L.marker([28.09973, -15.41343], { icon: canarias })
  .addTo(sede_canarias)
  .bindPopup(customPopUp39);

//Crear contenido de sede Madrid Nº17
var madrid = new LeafIcon({ iconUrl: "MarcadorSede.png" });
var customPopUp40 =
  "Madrid<ul><li>Calle Carretas, nº14, 4ºE</li><li>Teléfono: 915 479 678</li><li>Persona de contacto: Antonio Vaquero</li></ul>";

//Grupos - Sede madrid
var sede_madrid = new L.LayerGroup();
L.marker([28.09973, -15.41343], { icon: madrid })
  .addTo(sede_madrid)
  .bindPopup(customPopUp40);

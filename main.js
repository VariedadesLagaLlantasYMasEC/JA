// COORDENADAS: Aquí pones la ubicación de tu local
// He puesto las de la zona sur de Quito como referencia
var lat = -0.2764; 
var lng = -78.5352; 

// Crear el mapa centrado en tu local
var map = L.map('map', {
    zoomControl: false // Ocultamos controles para que se vea más limpio
}).setView([lat, lng], 18);

// Cargar la capa de satélite (GRATIS)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Esri Satellite'
}).addTo(map);

// Icono personalizado para el marcador
var marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup("<b>¡Bienvenidos!</b><br>Tu llantera de confianza.").openPopup();

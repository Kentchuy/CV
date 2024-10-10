document.addEventListener("DOMContentLoaded", function() {
// Executé après la sécurité de chargement

// Partie burger
/* Sélection des éléments HTML */
let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')

/* gestionnaire d'événement sur le a#link pour venir changer
l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function(e) {
e.preventDefault()
burger.classList.toggle('open')
ul.classList.toggle('open')
})
// Fin partie burger

// Partie API Maps
/*
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
let map;

async function initMap() {
  // The location of cordonnerie
  const position = { lat: 47.11057, lng: -2.06892 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  // The map, centered at cordonnerie
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "MAP_CORDO",
  });

  // The marker, positioned at cordonnerie ===== ne fonctionne pas
  const marker = new google.maps.Marker({
    map: map,
    position: position,
    title: "Cordonnerie",
  });
}
initMap();
// Fin partie API Maps

});
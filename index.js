const urlNhood = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD";
const barrios = "http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson";


var map; //variable que guarda la etiqueta del DOM donde va el mapa en html
var nYork = {lat:40.730610, lng: -73.935242}; //ubicacion centro de nuevayork
var university = {lat:40.729059, lng: -73.996527}; //ubicacion de la Universidad 
var unMarker; //marcador de la universidad


//--------------------------------------------------------------------------
function obtenerDatosBarrios(){
    var data = $.get(urlNhood)
        .done(function(){
            //loquesea cuando reciba la informacion
            console.log(data.responseJSON.data);//imprima en consola talcosa
        })
        .fail(function(error){ //metodo para ejecutar una funcion cuando algo sale mal, en este caso imprime el error
            console.error(error);
        })
}

//--------------------Google Maps-------------------------------------------

function loadGoogleMap() {
  map = new google.maps.Map(document.getElementById('gMapContainer'), {
    zoom: 10,
    center: nYork
  });
    
  
  unMarker = new google.maps.Marker({
    position: university,
    title:"NYU Stern School of Business",
    map: map
  });

}

//---------------------------------------------------------------


//---------------------------------------------------------------------------


$(document).ready(function(){
    $("#MostrarJson").on("click",obtenerDatosBarrios);
})
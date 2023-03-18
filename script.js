let link = document.querySelector('.link');
let m = document.querySelector('.cardMAP');
navigator.geolocation.getCurrentPosition(function(position){
     position.coords.latitude
     position.coords.longitude
    let coordinates = position.coords;
    let latitude = coordinates.latitude;
    let longitude = coordinates.longitude;
    let path = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    // link.innerHTML = `<a href = '${path}' target = '_blank'>посмотреть мое местоположение</a>`
    let map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source:new ol.source.OSM()
            }),
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([longitude, latitude]),
            zoom: 18,
        }),
        
    });
});
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

let menu = document.querySelector(".menu_small_icon"); 
let none_menu = document.querySelector('.menu-small')
let pos = 0; 
menu.addEventListener("click", function () { 
  if (pos === 0) { 
    open(); 
  } else { 
    close(); 
    // if (translateX === '100%'){
      // none_menu.style.display = 'none';
  } 
}); 
 
let start = 0; 
let end = 0; 
let screenWidth = window.screen.width
 
$("body").on("touchstart", function (e) { 
  start = e.originalEvent.touches[0].pageX; 
}); 
$("body").on("touchend", function (e) { 
  end = e.originalEvent.changedTouches[0].pageX; 
  
  if (start - end >= 100 && pos === 0){ 
    open(); 
  } else if (end - start >= 100 && pos === 1) { 
    close(); 
  } 
}); 
function open() { 
    anime({ 
        targets: ".menu-small", 
        translateX: ["100%", "0"], 
        easing: "easeInOutQuint", 
        direction: "alternate", 
        duration: 1000, 
        loop: false, 
    }); 
    pos = 1; 
    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    anime({
        targets: '.stickMENU',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    none_menu.style.display = 'flex';
} 
function close() { 
    anime({ 
        targets: ".menu-small", 
        translateX: ["0", "100%"], 
        easing: "easeInOutQuint", 
        direction: "alternate", 
        duration: 1000, 
        loop: false, 
    }); 
    pos = 0; 
    anime({
        targets: '.menu_small_icon',
        rotate: -180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
    anime({
        targets: '.stickMENU',
        rotate: -180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    })
}
 

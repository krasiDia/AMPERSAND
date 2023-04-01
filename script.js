// карта
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

// меню
let menu = document.querySelector(".menu_small_icon"); 
let none_menu = document.querySelector('.menu-small');
let pos = 0; 
let N = 0;
menu.addEventListener("click", function () { 
  if (pos === 0) { 
    open(); 
  } else { 
    close(); 
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

// картинки
let pic = document.querySelectorAll('.picture');
console.log(pic)
for (let i =0; i < 8; i++){
  pic[i].addEventListener('mouseover', function() {
    pic[i].style.transform = 'scale(1.1)';
    pic[i].style.transition = '0.5s';
  })
  pic[i].addEventListener('mouseout', function() {
    pic[i].style.transform = 'none';
    pic[i].style.transition = '1s';
  })
}

// фильтр
let p = document.querySelectorAll('.imgP');
let hor = document.querySelectorAll('horizon');
for (let i =0; i < 13; i++){
  p[i].addEventListener('mouseover', function() {
    p[i].style.transform = 'scale(1.1)';
    p[i].style.transition = '0.5s';
    p[i].style.filter = 'none';
  })
  p[i].addEventListener('mouseout', function() {
    p[i].style.transform = 'scale(1.1)';
    p[i].style.transition = '0.5s';
    p[i].style.filter = 'brightness(0.6)';
  })
}
for (let i =0; i < 3; i++){
  hor[i].addEventListener('mouseover', function() {
    hor[i].style.transform = 'scale(1.1)';
    hor[i].style.transition = '0.5s';
    hor[i].style.filter = 'none';
  })
  hor[i].addEventListener('mouseout', function() {
    hor[i].style.transform = 'scale(1.1)';
    hor[i].style.transition = '0.5s';
    hor[i].style.filter = 'brightness(0.6)';
  })
}


// переход по ссылкам
let menu_a = document.querySelectorAll('.m_a');
console.log(menu_a)

let targetID; 
menu_a.forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();
    targetID = element.getAttribute('href');
    document.querySelector(targetID).scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
          })
        })
      })
      
for ( let i = 0; i < 9; i++){ 
  menu_a[i].addEventListener("click", function () {
    close();
  });
};





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
    none_menu.style.display = 'none';
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
 

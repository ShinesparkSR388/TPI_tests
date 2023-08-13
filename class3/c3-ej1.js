
//elementos DOM

const el_salvador = function (lat_, lon_){
    const lat = lat_;
    const lon = lon_;
    const get_weather = function(){
        fetch('https://api.openweathermap.org/data/2.5/forecast?lang=sp&lat=' + lat + '&lon=' + lon + '&cnt=1&appid=b597265f04aa541681d0d0ae8ed64ddf')
        .then(response => response.json())
        .then(data => {
            //var name_ = data['city']['name']; !CORRECTO
            //todo lo que haras con la info se hace aqui
            chargeDOM(data,lat_,lon_);
        })
        .catch(function(ex){
            console.log(ex);
        });
    }
    return {get_weather};
}

const san_miguel = function(){
    const prototype = new el_salvador(13.45680679745962,-88.1732828390539);
    return Object.assign({}, prototype);
}
const usulutan = function(){
    const prototype = new el_salvador(13.343758659731435,-88.43834761214791);
    return Object.assign({}, prototype);
}
const la_union = function(){
    const prototype = new el_salvador(13.333735169956498,-87.84846475796677);
    return Object.assign({}, prototype);
}
const santa_ana = function(){
    const prototype = new el_salvador(13.994779847043048,-89.55660412129377);
    return Object.assign({}, prototype);
}
const san_salvador = function(){
    const prototype = new el_salvador(13.698990538851405,-89.19142342189049);
    return Object.assign({}, prototype);
}
const ciudades = [new san_miguel(),new usulutan(),new la_union(),santa_ana(),san_salvador()];
ciudades[0].get_weather();
let count_ = 0;
const btn_l = document.querySelector('[btn-l]');
const btn_r = document.querySelector('[btn-r]');

btn_l.addEventListener('click', function(){
    if(count_ > 0){
        count_ = count_-1;
        ciudades[count_].get_weather();
    }
});
btn_r.addEventListener('click', function(){
    if(count_ < ciudades.length-1){
        count_ = count_+1;
        ciudades[count_].get_weather();
    }
});

function drfplanet(lon_, lat_) {
    var globe = planetaryjs.planet();
    // Load our custom `autorotate` plugin; see below.
    var rot = 3;
    globe.loadPlugin(autorotate(rot));
    // The `earth` plugin draws the oceans and the land; it's actually
    // a combination of several separate built-in plugins.
    //
    // Note that we're loading a special TopoJSON file
    // (world-110m-withlakes.json) so we can render lakes.
    globe.loadPlugin(planetaryjs.plugins.earth({
      topojson: { file:   './world-110m-withlakes.json' },
      oceans:   { fill:   '#000080' },
      land:     { fill:   '#339966' },
      borders:  { stroke: '#008000' }
    }));
    // Load our custom `lakes` plugin to draw lakes; see below.
    globe.loadPlugin(lakes({
      fill: '#000080'
    }));
    // The `pings` plugin draws animated pings on the globe.
    globe.loadPlugin(planetaryjs.plugins.pings());
    // The `zoom` and `drag` plugins enable
    // manipulating the globe with the mouse.
    globe.loadPlugin(planetaryjs.plugins.zoom({
      scaleExtent: [10000, 5000]
    }));
    globe.loadPlugin(planetaryjs.plugins.drag({
      // Dragging the globe should pause the
      // automatic rotation until we release the mouse.
      onDragStart: function() {
        this.plugins.autorotate.pause();
        def_rotation();
      },
      onDragEnd: function() {
      }
    }));
    function def_rotation(){
        globe.projection.scale(225).translate([225, 225]).rotate([-lat_, -lon_, 7]);
    }
    // Set up the globe's initial scale, offset, and rotation.
    globe.projection.scale(225).translate([225, 225]).rotate([-lat_, -lon_, 7]);
  
    // Every few hundred milliseconds, we'll draw another random ping.
    var colors = ['white'];//'red', 'yellow', 'white', 'orange', 'green', 'cyan', 'pink'
    setInterval(function() {
      var lat = lat_;
      var lng = lon_;
      var color = colors[Math.floor(Math.random() * colors.length)];
      globe.plugins.pings.add(lat_, lon_, { color: color, ttl: 7000, angle: 15 });
    },2000);
  
    var canvas = document.getElementById('rotatingGlobe');
    // Special code to handle high-density displays (e.g. retina, some phones)
    // In the future, Planetary.js will handle this by itself (or via a plugin).
    if (window.devicePixelRatio == 2) {
      canvas.width = 800;
      canvas.height = 800;
      context = canvas.getContext('2d');
      context.scale(2, 2);
    }
    // Draw that globe!
    globe.draw(canvas);
  
    // This plugin will automatically rotate the globe around its vertical
    // axis a configured number of degrees every second.
    function autorotate(degPerSec) {
      // Planetary.js plugins are functions that take a `planet` instance
      // as an argument...
      return function(planet) {
        var lastTick = null;
        var paused = false;
        planet.plugins.autorotate = {
          pause:  function() { paused = true;  },
          resume: function() { paused = false; }
        };
        // ...and configure hooks into certain pieces of its lifecycle.
        planet.onDraw(function() {
          if (paused || !lastTick) {
            lastTick = new Date();
          } else {
            var now = new Date();
            var delta = now - lastTick;
            // This plugin uses the built-in projection (provided by D3)
            // to rotate the globe each time we draw it.
            var rotation = planet.projection.rotate();
            rotation[0] += degPerSec * delta / 1000;
            if (rotation[0] >= 180) rotation[0] -= 360;
            planet.projection.rotate(rotation);
            lastTick = now;
          }
        });
      };
    };
  
    // This plugin takes lake data from the special
    // TopoJSON we're loading and draws them on the map.
    function lakes(options) {
      options = options || {};
      var lakes = null;
  
      return function(planet) {
        planet.onInit(function() {
          // We can access the data loaded from the TopoJSON plugin
          // on its namespace on `planet.plugins`. We're loading a custom
          // TopoJSON file with an object called "ne_110m_lakes".
          var world = planet.plugins.topojson.world;
          lakes = topojson.feature(world, world.objects.ne_110m_lakes);
        });
  
        planet.onDraw(function() {
          planet.withSavedContext(function(context) {
            context.beginPath();
            planet.path.context(context)(lakes);
            context.fillStyle = options.fill || 'black';
            context.fill();
          });
        });
      };
    };
  };

function chargeDOM(data, lat, lon){
    drfplanet(lat,lon);
    const country_city = document.querySelector('[place]');
    const time_set_ = document.querySelector('[time_set]');
    const temp_cent = document.querySelector('[temp_cent]');
    const temp_max = document.querySelector('[temp_max]');
    const temp_min = document.querySelector('[temp_min]');
    const sky = document.querySelector('[sky]');
    const wind = document.querySelector('[wind]');
    const wind2 = document.querySelector('[wind2]');
    const weather = document.querySelector('[weather]');
    const hour = document.querySelector('[hour]');
    const ic_weather_div = document.querySelector('[icon_weather]');
    const ic_time_ = document.querySelector('[icon_hour]');
    const rain_prov = document.querySelector('[rain_prov]');
    ic_weather_div.innerHTML = "";
    ic_time_.innerHTML = "";

    //value asign
    
    country_city.textContent = data['city']['name'] + ',' + data['city']['country'];
    time_set_.textContent = data['list'][0]['dt_txt'];
    temp_cent.textContent = (data['list'][0]['main']['temp']-273.15).toFixed(1) + "ºC";
    temp_max.textContent = (data['list'][0]['main']['temp_max']-273.15).toFixed(1) + "ºC";
    temp_min.textContent = (data['list'][0]['main']['temp_min']-273.15).toFixed(1) + "ºC";
  


    if(data['list'][0]['clouds']['all'] > 85){
      sky.textContent = 'Densamente nublado';
    }else if(data['list'][0]['clouds']['all'] > 70){
      sky.textContent = 'Nublado';
    }else if(data['list'][0]['clouds']['all'] > 50){
      sky.textContent = 'Parcialmente nublado';
    }else if(data['list'][0]['clouds']['all'] > 30){
      sky.textContent = 'Parcialmente nublado';
    }else{
      sky.textContent = 'Soleado';
    }
    wind.textContent = 'vientos de ' + (data['list'][0]['wind']['gust'] * 1.61).toFixed(1) + 'km/h';

    if(data['list'][0]['main']['humidity'] > 60){
      wind2.textContent = 'mucha húmedad';
    }else if(data['list'][0]['main']['humidity'] > 30){
      wind2.textContent = 'humedad normal';
    }else{
      wind2.textContent = 'muy secos';
    }
    
    weather.textContent = data['list'][0]['weather'][0]["description"];
    let date = new Date();
    hour.textContent = date.toLocaleTimeString();

    const weatherIcons = [
      { className: 'Despejado', innerHTML: '<div class="sun"></div>' },
      {
          className: 'Lluvia',
          innerHTML: `
              <div class="rain-cloud">
                  <div class="raindrop"></div>
                  <div class="raindrop"></div>
                  <div class="raindrop"></div>
              </div>
          `,
      },
      {
          className: 'Nubes',
          innerHTML: `
              <div class="sun-and-cloud">
                  <div class="sun-inner"></div>
                  <div class="cloud-sun-inner"></div>
              </div>
          `,
      },
      { className: 'Nublado', innerHTML: '<div class="cloud"></div>' },
      {
          className: 'Tormenta',
          innerHTML: `
              <div class="cloud-storm">
                  <div class="raindrop-storm"></div>
                  <div class="raindrop-storm"></div>
                  <div class="raindrop-storm"></div>
                  <div class="bolt"></div>
              </div>
          `,
      },{ className: 'Luna', innerHTML: '<div class="moon"></div>' },
    ];
    const clouds_ = data['list'][0]['clouds']['all'];
    const humy_ = data['list'][0]['main']['humidity'];
      let icon = weatherIcons[0];
      const ic_weather = document.createElement('div');

      if(clouds_ > 95 && humy_ > 95){
        icon = weatherIcons[4];
        ic_weather.className = 'weather-icon ${icon.Tormenta}';

      }else if(clouds_ > 85 || humy_ > 85){
        icon = weatherIcons[1];
        ic_weather.className = 'weather-icon ${icon.Lluvia}';

      }else if(clouds_ > 60 ){
        icon = weatherIcons[3];
        ic_weather.className = 'weather-icon ${icon.Nublado}';

      }else if(clouds_ > 30){
        icon = weatherIcons[2];
        ic_weather.className = 'weather-icon ${icon.Nubes}';

      }else{
        let icon = weatherIcons[0];
        ic_weather.className = 'weather-icon ${icon.Despejado}';
      }

      ic_weather.innerHTML = icon.innerHTML;
      ic_weather_div.appendChild(ic_weather);

      const hora_ = date.toLocaleTimeString();
      const div_ic_hora = document.createElement('div');
      const message = document.createElement('h4');
      let icon2 = weatherIcons[5];
      if(hora_.indexOf('P') != -1){
        div_ic_hora.className = 'weather-icon ${icon2.Luna}';
        message.textContent = '!Feliz noche!'
      }else{
        icon2 = weatherIcons[0];
        div_ic_hora.className = 'weather-icon ${icon2.Despejado}';
        message.textContent = '!Buen día!'
      }
      div_ic_hora.innerHTML = icon2.innerHTML;
      ic_time_.appendChild(div_ic_hora);
      ic_time_.appendChild(message);

      rain_prov.textContent = data['list'][0]['pop'] * 100;

}
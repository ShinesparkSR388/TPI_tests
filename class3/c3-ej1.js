//modules
import { chargeDOM} from "./drfplanetDOM.js";

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


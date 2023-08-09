'use strict';
const prompt = require("prompt-sync")();

//Not literaria
/*const perroforma_lit = {
    nombre: prompt("Ingresa el nombre de tu perro"),
    raza: prompt("su raza... "),
    color: prompt("Su color... "),
    juguete: prompt("Su jugete favorito... "), 
    manso: prompt("el perro es manso?... S/N"),
    info: prompt("Cuentanos acerca de tu perro... "),
    entrenamiento: 3,

    Datos: function(){
        console.log(this.nombre);
        console.log(this.raza);
        console.log(this.color);
        console.log(this.juguete);
        console.log(this.manso);
        console.log(this.info);
    },
    jugar: function(){
        console.log("Ayudas a " + this.nombre + " a jugar con su juguete favorito " + this.juguete);
    },
    entrenar: function()  {
        if(this.entrenamiento > 0 && this.manso.toUpperCase() == "S"){
            console.log("Entrenas a "+ this.nombre + " para que se vuelva manso... restan + " + this.entrenamiento - 1 + " entrenamientos");
            this.entrenamiento = this.entrenamiento - 1;
        }else{this.manso == true;}
        if(this.manso == true){
            console.log("Al parecer el perro es manso y no necesita ser entrenado");

        }
    }
}*/
//objeto
function perroforma(){
    this.nombre = prompt("Ingresa el nombre de tu perro");
    this.raza = prompt("su raza... ");
    this.color = prompt("Su color... ");
    this.juguete = prompt("Su jugete favorito... "); 
    this.manso = prompt("el perro es manso?... S/N");
    if((this.manso).toUpperCase() == "S"){
        this.manso = true;
    }else{
        this.manso = false;
    }
    this.info = prompt("Cuentanos acerca de tu perro... ");
    this.entrenamiento = 3;

    this.Datos = function(){
        console.log(this.nombre);
        console.log(this.raza);
        console.log(this.color);
        console.log(this.juguete);
        console.log(this.manso);
        console.log(this.info);
    }
    this.jugar = function(){
        console.log("Ayudas a " + this.nombre + " a jugar con su juguete favorito " + this.juguete);
    }
    this.entrenar = function()  {
        if(this.entrenamiento > 0 && this.manso == false){
            console.log("Entrenas a "+ this.nombre + " para que se vuelva manso... restan + " + this.entrenamiento + " entrenamientos");
            this.entrenamiento = this.entrenamiento - 1;
        }else{this.manso == true;}
        if(this.manso == true || this.entrenamiento <= 0){
            this.manso = true;
            console.log("Al parecer el perro ya es manso y no necesita ser entrenado");

        }
    }
}
const crear = prompt("Desea crear un perro? S/N");
if((crear).toUpperCase() == "S"){
    let perro_obj = new perroforma();
    //let perro_lit = perroforma_lit;

    while(perro_obj != null){
        console.log("Indique que desea hacer");
        console.log("1-Ver informacion del perro");
        console.log("2-Jugar con el perro");
        console.log("3-Entrenar a el perro");
        console.log("Enter-Terminar...");
        let st = prompt("Ingrese una opcion...");
        if(st == "1"){
            perro_obj.Datos();
        }else if (st == "2"){
            perro_obj.jugar();
        }else if(st == "3"){
            perro_obj.entrenar();
        }else{
            perro_obj = null;
        }
    }
}else{
    console.log("salu2");
}


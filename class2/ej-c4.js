const person = function (nombre_, apeido_, edad_, peso_){
    const nombre = nombre_;
    const apeido = apeido_;
    const edad = edad_;
    const peso = peso_;
    const saludar = function(){
        return ("Hola!, mi nombre es " + nombre + " y tengo " + edad + " años");
    };
    return Object.assign({}, {nombre, apeido, edad, peso, saludar});
}

export const programer = function(nombre_, apeido_, edad_, peso_, lenguajes_){
    const prototype = person(nombre_, apeido_, edad_, peso_);
    const lenguajes = lenguajes_;
    const programar = function(){
        return "Programando... algo? no lo se.";
    }
    return Object.assign({}, prototype, {programar});
}
export const designer = function(nombre_, apeido_, edad_, peso_, pref_design_fr_){
    const prototype = person(nombre_, apeido_, edad_, peso_);
    const pref_design_fr = pref_design_fr_;
    const diseñar = function(){
        return "Diseñando... algo? no lo se.";
    }
    return Object.assign({}, prototype, {diseñar});
}
export const sysadmin = function(nombre_, apeido_, edad_, peso_, cosasdesysadmin_){
    const prototype = person(nombre_, apeido_, edad_, peso_);
    const cosasdesysadmin = cosasdesysadmin_;
    const programar = function(){
        return "Programando... algo? no lo se.";
    }
    const haceralgo = function (){
        return "Haciendo lo que normalmente hacen los SysAdmin";
    }
    return Object.assign({}, prototype, {programar});
}

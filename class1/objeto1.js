const cosa = {
    alama:33,
    era: "sdsd",
    aluma: 2.2,
    bala:{
        sdda: "sad",
        sddds: "sddff",
    },
    aloma: function(){
        return this.aluma;
    }
}
function cosa2(cosa1, cosa2) {
    this.cosa1 = cosa1;
    this.cosa2 = cosa2;

    this.saludo = function(){return "aaaaaaa"};

}
const asdasda = new cosa2("sdsa","ssssas");
console.log(cosa.aloma());
console.log(asdasda.saludo());
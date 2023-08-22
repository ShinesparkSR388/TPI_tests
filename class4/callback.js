/*var fs = require('fs');
var n = undefined;

function sum_(callback){
    fs.readFile('num_.txt', function leer(err, content){
        n = parseInt(content);
        n++;
        callback();
    })
}
sum_();
console.log(n);*/

let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(true)
            resolve("yessss");
        reject("nooou");
        
    }, "3000");
});
console.log(promise);
promise.then(function(data){
    console.log(data);
}, function(err){
    console.log(err);
})
console.log("aaaa")

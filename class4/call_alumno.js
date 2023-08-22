let query = new Promise(function(resolve, reject){
    setTimeout(function(){
        fetch("http://localhost:3000/alumnos")
        .then(function(Response){
            Response = Response.json();
            resolve(Response);
        })
        .catch(function (err){
            reject(err);
        });
    },1000);
});
query.then(function(data){
    console.log(data);
});
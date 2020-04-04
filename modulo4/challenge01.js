
var checaIdade = function (idade) {
    return new Promise(function(maior, menor){
        
        if(idade > 18){
            //maior()
            setTimeout( () => maior(), 2000);
        }
        else {
            setTimeout(function(){
                menor();
            }, 2000);
        }  
    })
}

checaIdade(20)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
});


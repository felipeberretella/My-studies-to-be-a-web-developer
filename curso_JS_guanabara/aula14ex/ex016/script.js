function contador() {
var inicio =document.querySelector('input#inicio')
var fim = document.querySelector('input#fim')
var passo = document.querySelector('input#passo')
var res = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO]faltam dados !!')
    }else{
        res.innerHTML = `Contando... `
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
   
        for (var c = i ; c<=f ; c+=p){
            res.innerHTML += ` ${c} `
        }

    }
    
    
    
}
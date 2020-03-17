function pares(x, y) {
    let menor = (x<y)? x : y ; let maior = (x>y)? x  : y 
    for (menor; menor<maior; menor++){
        (menor%2 ===0)? console.log(menor): console.log('Impar')  
    }  
}
   pares(321, 31);
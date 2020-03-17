 function experiencia(anos) {
    return (anos >= 0 && anos<=1)? 'Iniciante' : ( anos>1 && anos<=3)?'Intermediário' : (anos>3 && anos<=6)?'Avançado' : (anos>6)?'Jedi Master':''

    

}
var anosEstudo = 8;
console.log(experiencia(anosEstudo))

   
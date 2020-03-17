
let valores = []

function Somador() {

let Qtxt = document.querySelector('input#qtxt')
let Qnum = Number(Qtxt.value)
let data = new Date()
let hora = data.getHours()
let hist = document.querySelector('select#historico')
let PR1 = 18
let PR2 = 22



    if ((hora>4 && hora<18) || Qnum === 0) {       
        window.alert("[ERRO]digite um valor ou verifique o horário de funcionamento !")
    } else if (hora>=1 && hora<4){
            var total = PR1*Qnum
            let item = document.createElement('option')
            item.text = `R$${PR1} x ${Qnum} = R$${total}`
            hist.appendChild(item)
            valores.push(total)           
            
    }else{
        var total = PR2*Qnum
        let item = document.createElement('option')
        item.text = `R$${PR2},00 x ${Qnum} = R$${total},00`
        hist.appendChild(item)
        valores.push(total)
        

    }
    let soma = 0 
    for (let pos in valores){
        soma += valores[pos]
    }
    Qtxt.value = ''
    Qtxt.focus()
    let vendas = document.querySelector('div#vendido') 
    vendas.innerHTML=`Hoje vendemos R$ ${soma},00`
            
}
    

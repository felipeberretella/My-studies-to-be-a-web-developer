/*           receive body      */
var body = document.querySelector('body#DOC') 

/*            create header         */
let header = document.createElement('header')
header.setAttribute('id', 'function')
body.appendChild(header)
header.style.textAlign='justfy'
header.style.backgroundColor= '#dddddd'


/*         create button       */
let textButton = document.createTextNode('Add Red Block')
let buttonElement = document.createElement('button')
let textHeader = document.createTextNode('Click Here !   ')

header.appendChild(buttonElement)
buttonElement.appendChild(textButton)
header.appendChild(textHeader)

buttonElement.style.boxShadow= '2px 2px 5px rgba(0, 0, 0, 0..3)'
buttonElement.setAttribute('onclick','ARB()') // call function



/* Function Add Red Block */
function ARB(){

    let DIV = document.createElement('div')
    DIV.style.width='100px'
    DIV.style.height='100px'
    DIV.style.backgroundColor='#f00'
    DIV.style.margin='5px'
    body.appendChild(DIV)
    
}





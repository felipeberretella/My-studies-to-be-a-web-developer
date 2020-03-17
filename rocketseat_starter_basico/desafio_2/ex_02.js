/*           receive body      */
let body = document.querySelector('body#DOC') 

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



/*               Function Add Red Block            */
function ARB(){
    let DIV = document.createElement('div')

    /* Attribute "mouseover" calls the color function ... the color function returns a color randon ..variable "newColor" receives randon color and changes the background  */
         DIV.addEventListener("mouseover",function color(){
        let newColor = getRandomColor();
        DIV.style.backgroundColor = newColor;})
        //
    DIV.style.width='100px'
    DIV.style.height='100px'
    DIV.style.backgroundColor='#f00'
    DIV.style.margin='5px'
    body.appendChild(DIV)  
        
}    
function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}




/* receive div*/
const div = document.querySelector('div#res')

/*   input and button*/
const inputText = document.createElement('input')
inputText.setAttribute('id','inputText')
div.appendChild(inputText)

const buttonElement = document.createElement('button')
buttonElement.setAttribute('onclick','Addlist()')
const buttonText = document.createTextNode('Add List Item')
buttonElement.appendChild(buttonText)
div.appendChild(buttonElement)

/*  create unordered list */

let unordered = document.createElement('ul')
div.appendChild(unordered)

function Addlist () {
    let inText = document.querySelector('input#inputText')      
    let item = document.createElement('li')
    let textItem = document.createTextNode(inText.value)
    item.appendChild(textItem)
    unordered.appendChild(item)
    inText.focus()
    inText.value=''
}



function checaIdade() {
    
    const nomeGit = document.querySelector('#user').value
    
    var minhaPromise = () =>{
        return new Promise((resolve, reject)=>{
            var xhr = new XMLHttpRequest()
            xhr.open('GET',' https://api.github.com/users/'+nomeGit+'/repos')
            xhr.send(null)
            xhr.onreadystatechange = ()=>{
                if (xhr.readyState === 4){
                    if(xhr.status === 200){
                        resolve(nomeGit)

                    }else{
                        reject('[ERRO 404]Erro na Requisição')
                    }
                }

            }
        })
    }
    var divElement=document.querySelector('#divid')
    var ulElement=document.createElement('ul')
    var liElement=document.createElement('li')
    var liText=document.createTextNode('Carregando...')
    liElement.appendChild(liText)
    ulElement.appendChild(liElement)
    divElement.appendChild(ulElement)
    
    minhaPromise()
    .then((response)=>{liElement.innerHTML=response})
    .catch((error)=>{liElement.innerHTML=error})

}

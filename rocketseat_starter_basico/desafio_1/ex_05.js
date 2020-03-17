function find () {
    var usuarios = [{nome: "Diego", habilidades: ["Javascript", "ReactJS", "Redux"]},
    {nome: "Gabriel", habilidades: ["VueJS", "Ruby on Rails", "Elixir"]}]
    //console.log(usuarios)

    for (var prop of usuarios){
       
        console.log(`O ${prop.nome} possui as habilidades: ${prop.habilidades}` )
       
    }   
}



find()

function temHabilidade(skills) {
    var teste = (skills.indexOf("Javascript")!= -1)? true: false
     return teste
   }
   var skills = ["Javascript", "ReactJS", "React Native"];
  console.log(temHabilidade(skills))
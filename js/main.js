function convertTemp(direction) {
    //captura objetos
    var fire = document.convert.ftemp
    var grau = document.convert.ctemp
    var ku = document.convert.ktemp

    //faz as conversões

    
    if (direction == "fire") {
        grau.value = Math.round((fire.value - 32) * (5 / 9));
        ku.value = Math.round((parseFloat(grau.value) + 459.67) * (5 / 9));
      

        return
    }else if (direction == "ku") {
        fire.value = Math.round((parseFloat(grau.value) * (9 / 5)) - 459.67);
        grau.value = Math.round((fire.value - 32) * (5 / 9));
        
return
    }   else 
        fire.value = Math.round((parseFloat(grau.value) * (9 / 5)) + 32);
        ku.value = Math.round((parseFloat(grau.value) + 273));
return
  }

 
 











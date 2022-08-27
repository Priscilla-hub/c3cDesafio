function criarvetor() {
    const numero = document.getElementById('quest4').value;
    
    let valor = numero
    let vetor = []
    for(let i = 0; i < valor; i+=1){
        
        if( i == 0 ){
            vetor[i] =i+1
    }
       else if( (i+1) % 5 == 0 && (i+1) % 9 == 0){ 
             vetor[i]= "LuidyMoura"
            
    }   else if((i+1) % 5 == 0) {
             vetor[i] = "Luidy"

    }   else if((i+1) % 9 == 0){

            vetor[i] = "Moura"
    }   else{

            vetor[i] = i+1
    }

    }
        alert("Resultado do vetor:  " + vetor)
}



function bhask() {
    const ax2valor = document.getElementById('ax2').value;
     const bxvalor = document.getElementById('bx').value;
     const cvalor = document.getElementById('c').value;
     const ax2 = ax2valor;
     const bx = bxvalor;
     const c = cvalor;

let delta = bx * bx-4 * ax2 * c
if(delta < 0){
    alert("Delta é negativo.")
} else{
    let valorbhask1 = (-bx + Math.sqrt(delta))/2*ax2
    let valorbhask2 = (-bx - Math.sqrt(delta))/2*ax2 
    let vetor = [valorbhask1,valorbhask2]

   alert( "A solução 1, é:  "+ vetor[0] +  "  A solução 2, é:  "+ vetor[1] )
    }
}



 


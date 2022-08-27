function calculodanotafinal() {
    const nota = document.getElementById('nota').value;

let notaaluno = nota;
let resto = (notaaluno % 5);
let multipldecinco = (((notaaluno-resto)/5)+1)*5; //pegar o próximo múltiplo de cinco
let notafinal = 0;

//condição para arredondamento
if(multipldecinco-notaaluno < 3 && notaaluno >= 38){
     notafinal = multipldecinco;
}else {
     notafinal = notaaluno;
}
//condição para verificar se o aluno está reprovado ou aprovado.
    if(notafinal < 40 ){
    alert ("Aluno está reprovado! Nota :  " +notafinal);
} else {
    alert ("Aluno está aprovado! Nota:  "+ notafinal);
}
}

function tiposdetriangulo() {
     const lado01 = document.getElementById('lado1').value;
     const lado02 = document.getElementById('lado2').value;
     const lado03 = document.getElementById('lado3').value;
     const lado01valor = lado01;
     const lado02valor = lado02;
     const lado03valor = lado03;
     let triangulo = '';


// verificar os tipos de triângulos de acordo com o tamanho dos lados.
if (lado01valor == lado02valor && lado02valor == lado03valor) 
  {
    triangulo = 'Triangulo Equilátero';
    console.log(triangulo);
  } else if (lado01valor != lado02valor && lado02valor != lado03valor && lado01valor != lado03valor) 
  {
    triangulo = 'Triangulo Escaleno';
    console.log(triangulo);
  } else {
    triangulo = 'Triangulo Isósceles';
    console.log(triangulo);
  }  
  alert(triangulo);
}
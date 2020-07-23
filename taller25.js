let number = prompt('Introduzca un número')


for (let index = 3; index <= number; index++){
    console.log (index)
}
console.log('******************')
for (let index =number; index >= 0; index--){
    console.log(index)
}
console.log('******************')

for (let index = 1; index <= number; index = index * 2){
    console.log(index)
}

index = index + 1;
index++;

index = index -1;
index--;

/*
let number = prompt('Introduzca un número')


for (let index = 10; index <= number; index+1){
    console.log (index)
}
console.log('******************')
for (let index = number; index >= 0; index-1){
    console.log(index)
}
console.log('******************')

for (let index = 1; index <= number; index = index * 2){
    console.log(index)
}

index = index + 1;
index++;

index = index -1;
index--; 

*/




   


        let numero = prompt("Introduce un numero para saber si es par o impar");
        let resultado = parImpar(numero);
        console.log (numero)
        document.write("<h1>El numero "+numero+" es "+resultado+"</h1>");
                function parImpar(numero) {
            if(numero % 2 == 0) {
            return "par";
            }
            else {
            return "impar";
            }
        }
        console.log (resultado)

        </script>    


        if (isNaN(x) || isNaN(y)) {  
            text = "Es necesarios introducir dos números válidos";  
          } else {  
            //si no ponemos parseFloat concatenaría x con y  
            suma=parseFloat(x)+parseFloat(y);  
            text= suma; 
            console.log (suma) 
          }  
          document.getElementById("sumando").innerHTML = text;  
        }  
        
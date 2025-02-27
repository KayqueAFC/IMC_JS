const calcular = document.getElementById("calcular");

function imc () {
    const nome = document.getElementById("nome").value; //Pegar os valores caso contrario sera a tudo
    const altura = document.getElementById("altura").value; 
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");


    if (nome !== "" && altura !== "" && peso !== "") {  //Validacao se esta preenchido       
             
        if(isNaN(nome) !== true) {
            resultado.textContent = "Nome invalido" //Validacao nome correto
        return;
        }

        if (altura <= 0 || peso <=0) {
            resultado.textContent = "Altura e peso devem ser maiores que zero!"; // Validacao se é maior que zero
        return; //Interrupcao do codigo
        }

        const valorIMC = (peso / (altura * altura)).toFixed(1);
        let classificacao = "";

            if (valorIMC < 18.5){
                classificacao = "abaixo do peso";
            }
            else if (valorIMC < 25){
                classificacao = "com peso ideal. Parabéns!";
            }
            else if (valorIMC < 30){
                classificacao = "levemente acima do peso";
            }
            else if (valorIMC < 35){
                classificacao = "com obesidade grau I"
            }
            else if (valorIMC < 40){
                classificacao = "com obesidade grau II"
            }
            else {
                classificacao = "com obesidade grau III. Cuidado!"
            }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    }
    else{
        resultado.textContent = " Preencha todos os campos!"
    }  
}
calcular.addEventListener("click", imc); //Adiciona um "ouvinte" do clic para fazer a função IMC
var valor1;
var valor2;
var valor3;
var valor4;
var confere=false;
var valortotal1;
var valortotal;

function random1 (){
    valor1 = Math.floor(Math.random() * 6 + 1  );   
    document.querySelector('.jogada1').innerHTML = 'Valor da 1ª jogada é: '+ valor1;
    var pai = document.querySelector('.jogada1');
    pai.style.display = "block";
    var botao = document.querySelector('#clickMe');
    botao.style.display = "none";
    var botao = document.querySelector('#clickMe1');
    botao.style.display = "block";
    ramdom3();
}

function random2 (){
    valor2 = Math.floor(Math.random() * 6 + 1  );   
    document.querySelector('.jogada2').innerHTML = 'Valor da 2ª jogada é: '+ valor2;
    var pai = document.querySelector('.jogada2');
    pai.style.display = "block";
    var botao = document.querySelector('#clickMe1');
    botao.style.display = "none";
    var botao = document.querySelector('#soma');
    botao.style.display = "block";
}

function soma(){
    valortotal = valor1 + valor2; 
    document.querySelector('.soma').innerHTML = 'Valor somado é: '+ valortotal;
    var pai = document.querySelector('.soma');
    pai.style.display = "block";
    var pai1 = document.querySelector('.aviso');
    pai1.style.display = "block";
    confere=true;
    if(confere==true){ 
        let teste = setTimeout(computador1, 6000);
        let teste1 = setTimeout(computador2, 12000);
        let teste2 = setTimeout(computadorSoma, 18000); 
    }
}

function computador1(){
    var pai = document.querySelector('.imgjogador');
    pai.style.display = "none";
    var pai = document.querySelector('.imgcomputador');
    pai.style.display = "block";
     //1 valor do computador randomico
    valor3 = Math.floor(Math.random() * 6 + 1  );   
    document.querySelector('.jogada3').innerHTML = 'Valor da 1ª jogada é: '+ valor3;
    var pai = document.querySelector('.jogada3');
    pai.style.display = "block";   
}
function computador2(){
    //2 valor do computador randomico
    valor4 = Math.floor(Math.random() * 6 + 1  );   
    document.querySelector('.jogada4').innerHTML = 'Valor da 2ª jogada é: '+ valor4;
    var pai = document.querySelector('.jogada4');
    pai.style.display = "block";
}

function computadorSoma(){
   //soma do computador
    valortotal1 = valor3 + valor4; 
    document.querySelector('.soma1').innerHTML = 'Valor somado do computador é: '+ valortotal1;
    var pai = document.querySelector('.soma1');
    pai.style.display = "block";
    confereJogada();
}

function confereJogada(){
    if(valortotal>valortotal1){
        var pai = document.querySelector('.vitoria');
        pai.style.display = "block";  
    }else  if(valortotal>valortotal1){
        var pai = document.querySelector('.derrota');
        pai.style.display = "block"; 

    }else  if(valortotal==valortotal1){
        var pai = document.querySelector('.empate');
        pai.style.display = "block"; 
    }
}
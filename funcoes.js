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
  
    chamaDado();
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
    chamadado2();
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
        let teste = setTimeout(computador1, 3000);
        let teste1 = setTimeout(computador2, 5000);
        let teste2 = setTimeout(computadorSoma, 7000); 
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
    chamaDado3();   
}
function computador2(){
    //2 valor do computador randomico
    valor4 = Math.floor(Math.random() * 6 + 1  );   
    document.querySelector('.jogada4').innerHTML = 'Valor da 2ª jogada é: '+ valor4;
    var pai = document.querySelector('.jogada4');
    pai.style.display = "block";
    chamaDado4();
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
    }else  if(valortotal<valortotal1){
        var pai = document.querySelector('.derrota');
        pai.style.display = "block"; 

    }else  if(valortotal==valortotal1){
        var pai = document.querySelector('.empate');
        pai.style.display = "block"; 
    }
}

function chamaDado(){
    if(valor1==1){
        document.getElementById("imgJogador").src="img/1.png";
        var pai = document.querySelector('.dadoImgJogador');
        pai.style.display = "block"; 

    }else if(valor1==2){
        document.getElementById("imgJogador").src="img/2.png";
        var pai = document.querySelector('.dadoImgJogador');
        pai.style.display = "block"; 

    }else if(valor1==3){
        document.getElementById("imgJogador").src="img/3.png";
        var pai = document.querySelector('.dadoImgJogador');
        pai.style.display = "block"; 

    }else if(valor1==4){
        document.getElementById("imgJogador").src="img/4.png";
        var pai = document.querySelector('.dadoImgJogador');
        pai.style.display = "block"; 

    }else if(valor1==5){
        document.getElementById("imgJogador").src="img/5.png";
        var pai = document.querySelector('.dadoImgJogador');
        pai.style.display = "block"; 

    }else if(valor1==6){
        document.getElementById("imgJogador").src="img/6.png";
        var pai = document.querySelector('.dadoImgJogador');
        pai.style.display = "block"; 

    }
  
}
function chamadado2(){
  //dado 2
  if(valor2==1){
    document.getElementById("imgJogador2").src="img/1.png";
    var pai = document.querySelector('.dadoImgJogador2');
    pai.style.display = "block"; 

    }else if(valor2==2){
        document.getElementById("imgJogador2").src="img/2.png";
        var pai = document.querySelector('.dadoImgJogador2');
        pai.style.display = "block"; 

    }else if(valor2==3){
        document.getElementById("imgJogador2").src="img/3.png";
        var pai = document.querySelector('.dadoImgJogador2');
        pai.style.display = "block"; 

    }else if(valor2==4){
        document.getElementById("imgJogador2").src="img/4.png";
        var pai = document.querySelector('.dadoImgJogador2');
        pai.style.display = "block"; 

    }else if(valor2==5){
        document.getElementById("imgJogador2").src="img/5.png";
        var pai = document.querySelector('.dadoImgJogador2');
        pai.style.display = "block"; 

    }else if(valor2==6){
        document.getElementById("imgJogador2").src="img/6.png";
        var pai = document.querySelector('.dadoImgJogador2');
        pai.style.display = "block"; 

    }
}

function chamaDado3(){
    if(valor3==1){
        document.getElementById("imgComputador").src="img/1.png";
        var pai = document.querySelector('.dadoImgComputador');
        pai.style.display = "block"; 

    }else if(valor3==2){
        document.getElementById("imgComputador").src="img/2.png";
        var pai = document.querySelector('.dadoImgComputador');
        pai.style.display = "block"; 

    }else if(valor3==3){
        document.getElementById("imgComputador").src="img/3.png";
        var pai = document.querySelector('.dadoImgComputador');
        pai.style.display = "block"; 

    }else if(valor3==4){
        document.getElementById("imgComputador").src="img/4.png";
        var pai = document.querySelector('.dadoImgComputador');
        pai.style.display = "block"; 

    }else if(valor3==5){
        document.getElementById("imgComputador").src="img/5.png";
        var pai = document.querySelector('.dadoImgComputador');
        pai.style.display = "block"; 

    }else if(valor3==6){
        document.getElementById("imgComputador").src="img/6.png";
        var pai = document.querySelector('.dadoImgComputador');
        pai.style.display = "block"; 

    }
  
}


function chamaDado4(){
    if(valor4==1){
        document.getElementById("imgComputador2").src="img/1.png";
        var pai = document.querySelector('.dadoImgComputador2');
        pai.style.display = "block"; 

    }else if(valor4==2){
        document.getElementById("imgComputador2").src="img/2.png";
        var pai = document.querySelector('.dadoImgComputador2');
        pai.style.display = "block"; 

    }else if(valor4==3){
        document.getElementById("imgComputador2").src="img/3.png";
        var pai = document.querySelector('.dadoImgComputador2');
        pai.style.display = "block"; 

    }else if(valor4==4){
        document.getElementById("imgComputador2").src="img/4.png";
        var pai = document.querySelector('.dadoImgComputador2');
        pai.style.display = "block"; 

    }else if(valor4==5){
        document.getElementById("imgComputador2").src="img/5.png";
        var pai = document.querySelector('.dadoImgComputador2');
        pai.style.display = "block"; 

    }else if(valor4==6){
        document.getElementById("imgComputador2").src="img/6.png";
        var pai = document.querySelector('.dadoImgComputador2');
        pai.style.display = "block"; 

    }
  
}
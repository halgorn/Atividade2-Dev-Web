<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" >
    <link href="style.css" rel="stylesheet" >
    <script type="text/javascript" src="funcoes.js"></script>
    <title>Cadastro</title>
  </head>
  <body>   
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="Jogador">
                    <div class="imgjogador">
                        <img src="img/jogador.jpg" alt="HTML tutorial" style="width:120px;height:120px;">
                    </div>
                    <p>Jogador </p>
                    <div class="jogada1" style="display:none;">
                        <p>valor da 1ª jogada:</p> 
                    </div>
                    <div class="dadoImgJogador" style="display:none;">
                            <img id="imgJogador" src="img/1.png"  alt="HTML tutorial" style="width:120px;height:120px;">
                    </div>
                    <div class="dadoImgJogador" style="display:none;">
                        <img id="imgJogador" src="img/1.png"  alt="HTML tutorial" style="width:120px;height:120px;">
                    </div>
                    <div class="jogada2" style="display:none;" >
                        <p>valor da 2ª jogada:</p>
                    </div>
                    <div class="dadoImgJogador2" style="display:none;">
                        <img id="imgJogador2" src="img/1.png"  alt="HTML tutorial" style="width:120px;height:120px;">
                    </div>
                    <div class="soma" style="display:none;" >
                        <p>valor somado:</p>
                    </div>
                    <input id="clickMe" type="button" class = "btn btn-info" value = "Jogada 1"onclick="random1();" /> 
                    <input id="clickMe1" type="button"  style ="display:none;" class = "btn btn-info" value = "Jogada 2"onclick="random2();" /> 
                    <input id="soma" type="button"  style ="display:none;" class = "btn btn-info" value = "Somar Valores"onclick="soma();teste;" /> 
                </div>
                <div class="Computador">
                    <div class="imgcomputador"style =" display:none;">
                        <img src="img/computador.jpg" alt="HTML tutorial" style="width:120px;height:120px;">
                    </div>
                    <p>Computador</p>
                    <div class="aviso" style="display:none;">
                        <p>Computador está jogando os dados</p>
                    </div>
                    <div class="jogada3" style="display:none;">
                        <p>valor da 1ª jogada:</p>  
                    </div>
                    <div class="dadoImgComputador" style="display:none;">
                        <img id="imgComputador" src="img/1.png"  alt="HTML tutorial" style="width:120px;height:120px;">
                    </div>
                    <div class="jogada4" style="display:none;" >
                        <p>valor da 2ª jogada:</p>
                    </div>
                    <div class="dadoImgComputador2" style="display:none;">
                        <img id="imgComputador2" src="img/1.png"  alt="HTML tutorial" style="width:120px;height:120px;">
                    </div>
                    <div class="soma1" style="display:none;" >
                        <p>valor somado do computador:</p>
                    </div>
                </div>
                <div class="Resultado">
                    <div class="vitoria" style="display:none;">
                            <h2>Voce Venceu</h2>
                        </div>
                    </div>
                    <div class="derrota" style="display:none;">
                        <h2>voce Perdeu</h2>
                    </div>
                    <div class="empate" style="display:none;">
                        <h2>Empate com o computador</h2>
                    </div>
                </div>
                <div class="botao">
                    <a href="index.php" class="btn btn-info">Voltar para o Inicio</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
    -->
  </body>
</html>
var numeroSecreto = parseInt(Math.random() * 11);

var palpites = document.querySelector(".palpites");
var ultimoResultado = document.querySelector(".ultimoResultado");
var baixoOuAlto = document.querySelector(".baixoOuAlto");
var enviarPalpite = document.querySelector(".enviarPalpite");
var palpite = document.querySelector(".palpite");

var contarPalpites = 1;
var botaoReinicio;
palpite.focus();

function verificarChutes() {
  var chute = Number(palpite.value);
  if (contarPalpites == 1) {
    palpites.textContent = "Chutes anteriores: ";
  }
  palpites.textContent += chute + " , ";
  if (chute == numeroSecreto) {
    ultimoResultado.textContent = "Você chutou número correto!";
    baixoOuAlto.textContent = "";
    configFimJogo();
  } else if (contarPalpites == 5) {
    ultimoResultado.textContent = "!!!FIM DE JOGO😭😭😭";
    baixoOuAlto.textContent = "";
    configFimJogo();
  } else {
    ultimoResultado.textContent = "Errado!";
    if (chute < numeroSecreto) {
      baixoOuAlto.textContent = "Seu chute foi muito baixo!";
    } else if (chute > numeroSecreto) {
      baixoOuAlto.textContent = "Seu chute foi muito alto!";
    }
  }
  contarPalpites++;
  palpite.value = "";
  palpite.focus();
}
enviarPalpite.addEventListener("click", verificarChutes);

function configFimJogo() {
  palpite.disable = true;
  enviarPalpite.disable = true;
  botaoReinicio = document.createElement("button");
  botaoReinicio.textContent = "Iniciar novo Jogo";
  document.body.appendChild(botaoReinicio);
  botaoReinicio.addEventListener("click", reiniciarJogo);
}

function reiniciarJogo() {
  contarPalpites = 1;
  var reiniciarParas = document.querySelectorAll(".resultado p");
  for (var i = 0; i < reiniciarParas.length; i++) {
    reiniciarParas[i].textContent = "";
  }
  botaoReinicio.parentNode.removeChild(botaoReinicio);
  palpite.disable = false;
  enviarPalpite.disable = false;
  palpite.value = "";
  palpite.focus();
  numeroSecreto = parseInt(Math.random() * 11);
}

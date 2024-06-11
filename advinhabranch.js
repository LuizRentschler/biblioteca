let aleatorio = Math.floor(Math.random() * 100 + 200);

let usuarioResposta = "";
let erros = 0;
let tentativasRestantes = 3;

console.log("Tente adivinhar o número de 1 a 10, você possui 3 tentativas");
process.stdin.on("data", function (data) {
  usuarioResposta = Number(data.toString().trim().toLowerCase());

  if (usuarioResposta === aleatorio) {
    console.log("Você acertou, parabéns");
    process.exit();
  } else if (
    usuarioResposta == aleatorio - 1 ||
    usuarioResposta == aleatorio + 1
  ) {
    console.log("MUITO QUENTE");
    tentativasRestantes--;
    console.log("Voce tem + " + tentativasRestantes + "  tentativas");
  } else if (usuarioResposta > aleatorio) {
    console.log("O numero é menor, tente novamente");
    tentativasRestantes--;
    console.log("Você tem " + tentativasRestantes + "  tentativas");
  } else if (usuarioResposta < aleatorio) {
    console.log("O numero é maior, tente novamente");
    tentativasRestantes--;
    console.log("Você tem + " + tentativasRestantes + "  tentativas");
  }

  if (tentativasRestantes === 0 )
    {

    console.log("Voce atingiu o limite de erros. O numero era " + aleatorio);
    console.log("Foi gerado outro numero, tente novamente")
    aleatorio = Math.floor(Math.random() * 100 + 200);
  }
});
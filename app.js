alert('Boas vindas ao jogo do número secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}:`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (numeroSecreto > chute){
            alert(`O numero secreto é maior que ${chute}`);
        } else {
            alert(`O numero secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai, voce descobriu o numero secreto ${numeroSecreto}. Você acertou depois de ${tentativas} ${palavraTentativa}.`);

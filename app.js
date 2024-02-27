let listaDeNumerosSorteados = [];
let qtLimiteN = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.0});
}

function exibirMensagemInicial(){ 
        exibirTextoNaTela('h1', 'Jogo do numero secreto');
        exibirTextoNaTela('p', 'Digite um numero de 1 a 10');
}

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random()*qtLimiteN);
  let qtElementodLista = listaDeNumerosSorteados.length;

    if (qtElementodLista == qtLimiteN){
            listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
            return gerarNumeroAleatorio();        
    }else { 
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido
    }
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute==numeroAleatorio){
        exibirTextoNaTela('h1', 'acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Acertou,voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroAleatorio){
            exibirTextoNaTela('p', 'O numero secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
    }
    limparCampo();
}

function limparCampo(){
    chute = document.querySelector('input').value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
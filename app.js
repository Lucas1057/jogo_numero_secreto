
let listadenumerosSorteados=[];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroaleatorio();
let tentativas = 1;

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoTela('h1','Jogo do numero secreto');
    exibirTextoTela('p','escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
console.log('botao clicado');
if(chute == numeroSecreto){
    exibirTextoTela('h1','Acertou!');
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;

    exibirTextoTela('p',mensagemTentativas);
}else{
    if(chute > numeroSecreto){
        exibirTextoTela('p','O número secreto é menor');
    }else{
        exibirTextoTela('p','O número secreto é maior');
    }
    tentativas ++;
    limparCampo();
    document.getElementById('reiniciar').removeAttribute('disabled');
}
}

function  gerarNumeroaleatorio(){
    let numeroEscolhido =  parseInt(Math.random()* numeroLimite + 1);
    let quantidadeElementoNaLista = listadenumerosSorteados.length;

    if(quantidadeElementoNaLista == numeroLimite){
        listadenumerosSorteados = [];//limpa a lista
    }
    if(listadenumerosSorteados.includes(numeroEscolhido)){//o includes verifar se o elemento esta na lista se tiver é verdadeiro,se lista com numeros sorteados ja possue um numero escolido
        return gerarNumeroaleatorio();//recunção a função que vai chamar ela novamente. ela vai gerar outro numero caso o numero esteja na lista
    }else{
        listadenumerosSorteados.push(numeroEscolhido);//adicionando o numero no final da lista
        return numeroEscolhido;
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroaleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}

/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do numero secreto'; */

/* let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'escolha um número de 1 a 3'; */
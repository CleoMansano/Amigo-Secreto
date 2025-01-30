let listaAmigos = [];
let listaDeIndicesSorteados = [];

function adicionarAmigo(){
    let amigo = document.getElementById("amigo").value; 
    console.log(amigo);
    if (amigo.length < 2) {
    alert("Por favor, insira um nome válido."); 
    limparCampo();  
    } else {
        listaAmigos.push(amigo);

    atualizarLista();

    } 
    limparCampo();

}
    function limparCampo(){
        campo = document.querySelector('input');
        campo.value = '';
    }
    
function atualizarLista(){
    let listaVisivel = document.getElementById("listaAmigos");
  
    let quantidadeAmigos = listaAmigos.length;
    listaVisivel.innerHTML = "";

    for (let i = 0; i < quantidadeAmigos; i++){
      let item = document.createElement("li");
      item.textContent = listaAmigos[i];
      listaVisivel.appendChild(item)
    }

}

function sortearAmigo() {
    let numeroLimite = listaAmigos.length;
       let numeroEscolhido = parseInt(Math.random() * numeroLimite);
       if (numeroLimite < 3){
        alert("Você precisa adicionar no mínimo 3 nomes para o sorteio");
    }
       else {
        let indice = gerarIndiceAleatorio(numeroLimite);
        if (indice == NaN) {
            gerarIndiceAleatorio(numeroLimite);
        }
        console.log(indice);

        let amigoSorteado = listaAmigos[indice];
        let resultado = document.getElementById('resultado');

        resultado.innerHTML = "";

        let newItem = document.createElement("li");

        newItem.textContent = amigoSorteado;
        resultado.appendChild(newItem);
        
    }
}

function gerarIndiceAleatorio(max) {
    let indiceEscolhido = parseInt(Math.random() * max);
    let quantidadeDeIndicesNaLista = listaDeIndicesSorteados.length;

    if(quantidadeDeIndicesNaLista == max) {
        alert('Todos amigos ja foram sorteadas, refazer o sorteio. ')
        listaDeIndicesSorteados = [];
    }

    if (listaDeIndicesSorteados.includes(indiceEscolhido)){
        return gerarIndiceAleatorio(max);
    }
    else {
        listaDeIndicesSorteados.push(indiceEscolhido);
        //console.log(listaDeIndicesSorteados);
        return indiceEscolhido;
    }

}

function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}
        

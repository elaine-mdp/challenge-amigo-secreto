let amigos = [];

adicionarAmigo();

function adicionarAmigo(){

    let nome = document.querySelector('input').value;

    if(nome == "" || nome == " "){
        alert('Por favor, insira um nome.');
    }else{ 
       amigos.push(nome);
       //console.log(amigos);
    }
    exibirLista();
    limparCampo();
    
}


function limparCampo(){
    let nome = document.querySelector('input');
    nome.value = '';
}


function exibirLista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        let itemLista = document.createElement('li');  
        itemLista.innerHTML = amigos[i];               
        lista.appendChild(itemLista);                  
    }
}


function sortearAmigo(){
    if (amigos != ''){
    let tamanhoDaLista = amigos.length;
    let numeroSorteado = Math.random() * tamanhoDaLista;
    let indiceInteiro = Math.floor(numeroSorteado);

    let nomeSorteado = document.getElementById('resultado');
    nomeSorteado.innerHTML = amigos[indiceInteiro];

    //console.log(indiceInteiro + " " + numeroSorteado);
    } else{
        alert('Lista vazia, inclua os nomes dos amigos para realizar o sorteio.');
    }
}

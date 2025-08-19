let amigos = [];

function adicionarAmigo(){
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if(nome === ""){
        alert("Por favor, insira um nome.");
        return;
    } 

    amigos.push(nome);
    input.value = "";
    atualizarLista();
    limparResultado();
}

function limparResultado(){
    const ulResultado = document.getElementById("resultado");
    ulResultado.innetHTML = "";
}

function atualizarLista(){
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    for(const nome of amigos){
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    }

}

function sortearAmigo(){
    if(amigos.length ===0){
        alert("Adicione amigos para sortear.");
        return;
    }

    const indice = Math.floor(Math.random()*amigos.length);
    const sorteado = amigos [indice];

    const ulResultado = document.getElementById("resultado");
        ulResultado.innerHTML = "";

        const li = document.createElement("li");
        li.textContent = " O amigo secreto sorteado foi: "+ sorteado+ "!";
        ulResultado.appendChild(li);
}


let listaDeAmigosSorteio = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado")

let listaAmigos = [];
let listaAmigosSorteados = [];

function adicionarAmigo(){
  let item = document.createElement("li");
  let nome = document.querySelector("input").value;
 
  if (nome == "") {
    alert("Insira um nome válido!");
    return;
  }

  listaAmigos.push(nome);
  item.textContent = nome;
  listaDeAmigosSorteio.appendChild(item)
  document.querySelector("input").value = "";

  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function sortearAmigo(){
  if (listaAmigosSorteados.length === listaAmigos.length) {
    alert("Todos os nomes foram sorteados!");
    return;
  }

  let tamanho = listaAmigos.length;
  let numeroEscolhido = Math.floor(Math.random() * tamanho);
  let nome = listaAmigos[numeroEscolhido];
  let item = document.createElement("li");

  if(!listaAmigosSorteados.includes(nome)) {
    listaAmigosSorteados.push(nome);
    item.textContent = `O amigo secreto sorteado é: ${nome}`;
    resultado.appendChild(item)
  }
  
  while (listaDeAmigosSorteio.firstChild) {
    listaDeAmigosSorteio.removeChild(listaDeAmigosSorteio.firstChild);
  }
}

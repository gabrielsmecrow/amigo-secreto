let nomes = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo.trim() == "") {
    alert("Por favor, insira um nome.");
    return;
  } else {
    nomes.push(amigo);
    adicionandoNaLista();
    limparTela();
  }
}

function limparTela() {
  let amigo = document.getElementById("amigo");
  amigo.value = "";
}

function adicionandoNaLista() {
  let li = document.getElementById("listaAmigos");
  li.innerHTML = "";
  for (let i = 0; i < nomes.length; i++) {
    li.innerHTML += `${nomes[i]}<br>`;
  }
}

function sortearAmigo() {
  randomNumber = Math.floor(Math.random() * nomes.length);
  let resultado = document.getElementById("resultado");
  if (nomes.length == 0) {
    alert("Por favor, insira um nome.");
  } else {
    resultado.innerHTML = `${nomes[randomNumber]}`;
  }
}

let nomes = [];

function adicionarAmigo() {
  let amigo = document.getElementById("amigo").value;

  if (amigo == null) {
    alert("Por favor, insira um nome.");
  } else {
    nomes.push(amigo);
    adicionandoNaLista();
    limparTela();
  }
  console.log(nomes);
}

function limparTela() {
  let amigo = document.getElementById("amigo");
  amigo.value = "";
}

function adicionandoNaLista() {
  let li = document.getElementById("listaAmigos");
  li.innerHTML = "";
  for (i = 0; i < nomes.length; i++) {
    li.innerHTML += `${nomes[i]}<br>`;
  }
}

const frutas = [];
const laticinios = [];
const congelados = [];
const doces = [];

//permite usar o enter para apertar os buttons com id="enter"
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector("#enter");

    btn.click();
  }
});

function telaInicial() {
  document.getElementById("lista").innerHTML = `<h1>Lista de Compras</h1>
    <p>Adicione alimentos a sua lista de compras</p>
    <label for="alimento">Alimento: </label><input name="alimento" type="text" id="alimento" />
    <label for="categorias">Categoria:</label> <select name="categorias" id="categorias">
      <option value="frutas">Frutas</option>
      <option value="laticinios">Laticínios</option>
      <option value="congelados">Congelados</option>
      <option value="doces">Doces</option><br>
    </select>
    <button type="submit" onclick="adicionarAlimento()" id="enter">Adicionar</button><br>
    <p id="confirmacaoAlimentoAdicionado"></p>
    <button type="submit" onclick="telaRemoverAlimento()">Remover Alimentos</button> <button type="submit" onclick="listaPronta()">Finalizar</button><br><br><a href="https://github.com/nathancanedo" target="_blank"><img class="logos" id="github" src="https://cdn-icons-png.flaticon.com/512/733/733609.png"/></a> <a href="https://www.linkedin.com/in/nathancanedo/" target="_blank"><img class="logos" id="linkedin" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"/></a> <a href="https://www.instagram.com/nathancanedo/" target="_blank"><img class="logos" id="instagram" src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"/></a> <a href="https://twitter.com/nathancanedo" target="_blank"><img class="logos" id="twitter" src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"/></a>`;
}

function adicionarAlimento() {
  let alimento = document.getElementById("alimento").value;
  let categoriaSelecionada = document.getElementById("categorias").value;
  if (alimento === "") {
    alert("Você precisa escrever um alimento para adicionar!");
    document.getElementById('confirmacaoAlimentoAdicionado').innerHTML = ''

  } else if (categoriaSelecionada === "frutas") {
    if (alimentoRepetido(frutas, alimento)){
      frutas.push(alimento);
      document.getElementById(
        "confirmacaoAlimentoAdicionado"
      ).innerHTML = `${alimento} foi adicionado a lista`;
    } else {
        alert(`${alimento} já está na lista!`)
    }
  } else if (categoriaSelecionada === "laticinios") {
      if (alimentoRepetido(laticinios, alimento)){
        laticinios.push(alimento);
        document.getElementById(
        "confirmacaoAlimentoAdicionado"
        ).innerHTML = `${alimento} foi adicionado a lista`;
      } else {
        alert(`${alimento} já está na lista!`)
      }
  } else if (categoriaSelecionada === "congelados") {
    if (alimentoRepetido(congelados, alimento)){
      congelados.push(alimento);
      document.getElementById(
      "confirmacaoAlimentoAdicionado"
      ).innerHTML = `${alimento} foi adicionado a lista`;
    } else {
      alert(`${alimento} já está na lista!`)
    }
  } else if (categoriaSelecionada === "doces") {
    if (alimentoRepetido(doces, alimento)) {
      doces.push(alimento);
      document.getElementById(
        "confirmacaoAlimentoAdicionado"
      ).innerHTML = `${alimento} foi adicionado a lista`;
    } else {
      alert(`${alimento} já está na lista!`)
    }
  }

  document.getElementById("alimento").value = "";

  
}

function alimentoRepetido(categoria, alimento){
  if(categoria.indexOf(alimento) == -1) {
    return true
  } else {
    return false
  }
}

function telaRemoverAlimento() {
  document.getElementById(
    "lista"
  ).innerHTML = `<h1>Remover Itens</h1><br><p>Você quer remover um item de qual categoria?</p><br><select name="categorias" id="categorias">
      <option value="frutas">Frutas</option>
      <option value="laticinios">Laticínios</option>
      <option value="congelados">Congelados</option>
      <option value="doces">Doces</option><br>
    </select><br><br>
    <button id="enter" type="submit" onclick="telaCategoriaRemoverAlimento()">Selecionar</button> <button type="submit" onclick="telaInicial()">Voltar</button><br><br><a href="https://github.com/nathancanedo" target="_blank"><img class="logos" id="github" src="https://cdn-icons-png.flaticon.com/512/733/733609.png"/></a> <a href="https://www.linkedin.com/in/nathancanedo/" target="_blank"><img class="logos" id="linkedin" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"/></a> <a href="https://www.instagram.com/nathancanedo/" target="_blank"><img class="logos" id="instagram" src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"/></a> <a href="https://twitter.com/nathancanedo" target="_blank"><img class="logos" id="twitter" src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"/></a>`;
}

function telaCategoriaRemoverAlimento() {
  let categoriaSelecionada = document.getElementById("categorias").value;

  if (categoriaSelecionada === "frutas") {
    document.getElementById("lista").innerHTML = `<h1>Remover Itens</h1><br>
      <p>Os itens desta categoria são:<br><br> ${frutas}. <br><br> Qual você deseja remover?</p><br><br>
      <input type="text" id="itemRemover"/><br><br>
      <button type="submit" onclick="removerFrutas()" id="enter">Remover</button> <button type="submit" onclick="telaRemoverAlimento()">Voltar</button><br><br><a href="https://github.com/nathancanedo" target="_blank"><img class="logos" id="github" src="https://cdn-icons-png.flaticon.com/512/733/733609.png"/></a> <a href="https://www.linkedin.com/in/nathancanedo/" target="_blank"><img class="logos" id="linkedin" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"/></a> <a href="https://www.instagram.com/nathancanedo/" target="_blank"><img class="logos" id="instagram" src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"/></a> <a href="https://twitter.com/nathancanedo" target="_blank"><img class="logos" id="twitter" src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"/></a>
    `;
  } else if (categoriaSelecionada === "laticinios") {
    document.getElementById("lista").innerHTML = `<h1>Remover Itens</h1><br>
      <p>Os itens desta categoria são:<br><br> ${laticinios}. <br><br> Qual você deseja remover?</p><br><br>
      <input type="text" id="itemRemover"/><br><br>
      <button type="submit" onclick="removerLaticinios()" id="enter">Remover</button> <button type="submit" onclick="telaRemoverAlimento()">Voltar</button><br><br><a href="https://github.com/nathancanedo" target="_blank"><img class="logos" id="github" src="https://cdn-icons-png.flaticon.com/512/733/733609.png"/></a> <a href="https://www.linkedin.com/in/nathancanedo/" target="_blank"><img class="logos" id="linkedin" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"/></a> <a href="https://www.instagram.com/nathancanedo/" target="_blank"><img class="logos" id="instagram" src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"/></a> <a href="https://twitter.com/nathancanedo" target="_blank"><img class="logos" id="twitter" src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"/></a>
    `;
  } else if (categoriaSelecionada === "congelados") {
    document.getElementById("lista").innerHTML = `<h1>Remover Itens</h1><br>
      <p>Os itens desta categoria são:<br><br> ${congelados}. <br><br> Qual você deseja remover?</p><br><br>
      <input type="text" id="itemRemover"/><br><br>
      <button type="submit" onclick="removerCongelados()" id="enter">Remover</button> <button type="submit" onclick="telaRemoverAlimento()">Voltar</button><br><br><a href="https://github.com/nathancanedo" target="_blank"><img class="logos" id="github" src="https://cdn-icons-png.flaticon.com/512/733/733609.png"/></a> <a href="https://www.linkedin.com/in/nathancanedo/" target="_blank"><img class="logos" id="linkedin" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"/></a> <a href="https://www.instagram.com/nathancanedo/" target="_blank"><img class="logos" id="instagram" src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"/></a> <a href="https://twitter.com/nathancanedo" target="_blank"><img class="logos" id="twitter" src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"/></a>
    `;
  } else if (categoriaSelecionada === "doces") {
    document.getElementById("lista").innerHTML = `<h1>Remover Itens</h1><br>
      <p>Os itens desta categoria são:<br><br> ${doces}. <br><br> Qual você deseja remover?</p><br><br>
      <input type="text" id="itemRemover"/><br><br>
      <button type="submit" onclick="removerDoces()" id="enter">Remover</button> <button type="submit" onclick="telaRemoverAlimento()">Voltar</button><br><br><a href="https://github.com/nathancanedo" target="_blank"><img class="logos" id="github" src="https://cdn-icons-png.flaticon.com/512/733/733609.png"/></a> <a href="https://www.linkedin.com/in/nathancanedo/" target="_blank"><img class="logos" id="linkedin" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"/></a> <a href="https://www.instagram.com/nathancanedo/" target="_blank"><img class="logos" id="instagram" src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"/></a> <a href="https://twitter.com/nathancanedo" target="_blank"><img class="logos" id="twitter" src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"/></a>
    `;
  }
}

function removerFrutas() {
  let alimento = document.getElementById("itemRemover").value;

  let iFrutas = frutas.indexOf(alimento);
  frutas.splice(iFrutas, 1);
  alert(`${alimento} foi removido com sucesso!`);
  telaInicial();
}

function removerLaticinios() {
  let alimento = document.getElementById("itemRemover").value;

  let iLaticinios = laticinios.indexOf(alimento);
  laticinios.splice(iLaticinios, 1);
  alert(`${alimento} foi removido com sucesso!`);
  telaInicial();
}

function removerCongelados() {
  let alimento = document.getElementById("itemRemover").value;

  let iCongelados = congelados.indexOf(alimento);
  congelados.splice(iCongelados, 1);
  alert(`${alimento} foi removido com sucesso!`);
  telaInicial();
}

function removerDoces() {
  let alimento = document.getElementById("itemRemover").value;

  let iDoces = doces.indexOf(alimento);
  doces.splice(iDoces, 1);

  alert(`${alimento} foi removido com sucesso!`);
  telaInicial();
}

function listaPronta() {
    document.getElementById(
    "lista"
  ).innerHTML = `<h1>Lista de Compras</h1><br><div id='frutas'><h2>Frutas:</h2></div><div id='laticinios'><h2>Laticínios:</h2></div><div id='congelados'><h2>Congelados:</h2></div><div id='doces'><h2>Doces:</h2></div><button type="submit" onclick="adicionarMaisAlimentos()">Adicionar mais alimentos</button><br><br><button type="submit" onclick="removerListaFinal()">Remover alimentos</button> <button type="submit" onclick="limparLista()">Limpar a lista</button><br><br><a href="https://github.com/nathancanedo" target="_blank"><img class="logos" id="github" src="https://cdn-icons-png.flaticon.com/512/733/733609.png"/></a> <a href="https://www.linkedin.com/in/nathancanedo/" target="_blank"><img class="logos" id="linkedin" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"/></a> <a href="https://www.instagram.com/nathancanedo/" target="_blank"><img class="logos" id="instagram" src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"/></a> <a href="https://twitter.com/nathancanedo" target="_blank"><img class="logos" id="twitter" src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png"/></a>`;
  let divFrutas = document.getElementById('frutas')
  let divLaticinios = document.getElementById('laticinios')
  let divCongelados = document.getElementById('congelados')
  let divDoces = document.getElementById('doces')
  for (let iFru = 0; iFru < frutas.length; iFru++) {
    divFrutas.innerHTML += `<p>${frutas[iFru]}</p>`
  }
  for (let iLat = 0; iLat < laticinios.length; iLat++) {
    divLaticinios.innerHTML += `<p>${laticinios[iLat]}</p>`
  }
  for (let iCong = 0; iCong < congelados.length; iCong++) {
    divCongelados.innerHTML += `<p>${congelados[iCong]}</p>`
  }
  for (let iDoc = 0; iDoc < doces.length; iDoc++){
    divDoces.innerHTML += `<p>${doces[iDoc]}</p>`
  }
} 

function adicionarMaisAlimentos() {
  telaInicial();
}

function limparLista() {
  frutas.length = [];
  laticinios.length = [];
  congelados.length = [];
  doces.length = [];

  telaInicial();
}

function removerListaFinal() {
  telaRemoverAlimento();
}
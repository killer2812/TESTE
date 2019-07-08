function adicionaLinha(idTabela) {
    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    var celula3 = linha.insertCell(2);
    var celula4 = linha.insertCell(3);
    var celula5 = linha.insertCell(4);
    celula1.innerHTML = prompt("produto")
    celula2.innerHTML = prompt("quantidade")
    celula3.innerHTML = prompt("preço de compra")
    celula4.innerHTML = prompt("preço de venda")
    celula5.innerHTML = "<button onclick='removeLinha(this)';>Del</button>";
  
}


function removeLinha(linha) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('tbl').deleteRow(i);
    saveTostorage()
} 
celula1 = localStorage.getItem('celula1');
localStorage.setItem('celula1', celula1)


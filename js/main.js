function adicionaLinha(idTabela) {
    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    var celula3 = linha.insertCell(2);
    celula1.innerHTML = prompt("produto")
    celula2.innerHTML = prompt("valor")
    celula3.innerHTML = "<button onclick='removeLinha(this)'>Remover</button>";
}


function removeLinha(linha) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('tbl').deleteRow(i);
} 
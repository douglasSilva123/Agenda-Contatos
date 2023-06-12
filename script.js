function cadastrarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    if (nome && telefone) {
        var tabela = document.getElementById("tabelaContatos");
        var newRow = tabela.insertRow(tabela.rows.length);

        var celulaNome = newRow.insertCell(0);
        celulaNome.innerHTML = nome;

        var celulaTelefone = newRow.insertCell(1);
        celulaTelefone.innerHTML = telefone;

        document.getElementById("nome").value = "";
        document.getElementById("telefone").value = "";
    } else {
        alert("Preencha todos os campos!");
    }
}
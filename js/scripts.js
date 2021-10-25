// Máscara para formatar o campo CPF
function mascaraCpf(campoCpf) {
    var cpf = campoCpf.value;
    if (cpf.length == 3) {
        cpf = cpf + '.';
        document.forms[0].cpf.value = cpf;
    }
    if (cpf.length == 7) {
        cpf = cpf + '.';
        document.forms[0].cpf.value = cpf;
    }
    if (cpf.length == 11) {
        cpf = cpf + '-';
        document.forms[0].cpf.value = cpf;
    }
}

// Script do Via CEP para buscar o endereço

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};

// Máscara para formatar o campo telefone
function mascarat(telefone) {
    if (telefone.value.length == 0)
        telefone.value = '(' + telefone.value;
    if (telefone.value.length == 3)
        telefone.value = telefone.value + ') ';

    if (telefone.value.length == 9)
        telefone.value = telefone.value + '-';

}

// Máscara para formatar o campo celular

function mascarac(celular) {
    if (celular.value.length == 0)
        celular.value = '(' + celular.value;
    if (celular.value.length == 3)
        celular.value = celular.value + ') ';

    if (celular.value.length == 10)
        celular.value = celular.value + '-';
}


// Caso todos os campos sejam preenchidos, é aceito enviar
function sucesso() {
    window.alert("Os seus dados foram enviados com sucesso!");
}
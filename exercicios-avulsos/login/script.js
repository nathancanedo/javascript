var email
var Senha
var nome
var divLogin = document.getElementById('login')

function telaInicial() {
    divLogin.innerHTML = `<h1>Login</h1>
    <p>Email:</p>
    <p><input type="email" name="email" id="email"></p>
    <p>Senha:</p>
    <p><input type="password" name="senha" id="senha"></p>
    <input type="button" value="Login" onclick="fazerLogin()">
    <input type="button" value="Registrar" onclick="telaRegistro()">`
}
function fazerLogin() {
    let txtEmail = document.getElementById('email').value
    let txtSenha = document.getElementById('senha').value

    if (email == txtEmail && senha == txtSenha) {
        divLogin.innerHTML = `<h1>Seja Bem Vindo ${nome}!</h1>
        <p>Seu email é ${email}</p>
        <input type="button" value="Sair" onclick="telaInicial()">`
        window.location.href = 'https://nathancanedo.com.br/'
    } else if (txtEmail == '' || txtSenha == '') {
        alert('[ERRO] Você não pode deixar campos em branco!')
    } else {
        alert('Email ou Senha Incorretos!')
    }
}

function telaRegistro() {
    divLogin.innerHTML = `<h1>Registro</h1><p>Seu Nome:</p>
    <input type='text' id='nome'>

    <p>Email:</p>
    <p><input type="email" name="email" id="email"></p>
    <p>Senha:</p>
    <p><input type="password" name="senha" id="senha"></p>
    <p>Confirmar Senha:</p>
    <p><input type="password" name="senha" id="confirmarSenha"></p>
    <input type="button" value="Registrar" onclick="registrar()">
    <input type="button" value="Voltar" onclick="telaInicial()">`
}

function registrar() {
    var txtNome = document.getElementById('nome').value
    let txtEmail = document.getElementById('email').value
    let txtSenha = document.getElementById('senha').value
    let txtConfirmarSenha = document.getElementById('confirmarSenha').value

    if (txtNome == '' || txtEmail == '' || txtSenha == ''){
        alert('[ERRO] Você não pode deixar campos em branco!')
    } else if (txtSenha == txtConfirmarSenha) {
        nome = txtNome
        email = txtEmail
        senha = txtSenha

        alert('Registro Efetuado!')

        telaInicial()
    } else {
        alert('[ERRO] As senhas não coincidem!')
    }
}
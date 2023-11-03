function login(){
    window.location = "login.html"
}
function msg(){
    window.alert('Teste')
}
function loginAction(){
    const user = document.getElementById('user').value
    const pasw  = document.getElementById('pasw').value
    if(user == '8596' && pasw == 'a153'){
        window.alert('Login realizado com sucesso, seja bem vindo Guilherme Breve!')
        window.location = 'main.html'
    }
    else if(user != '8596'){
        window.alert('Login Incorreto, confirme seu Email ou CIP!')
    }
    else if(pasw != 'a153'){
        window.alert('Senha Incorreta!')
    }
    else{
        window.alert('Login Incorreto')
    }
}
function sair(){
    window.alert("Saindo...")
    window.location= 'home.html'
}
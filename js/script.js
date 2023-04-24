//efeito do botão voltar ao Topo
function topo (){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:"smooth"
        }
    )
}

//Validação de Login
function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario == "douglas" && senha == "brandao"){
        window.location="index.html";
        logado=1;
    }

    if(logado==0){
        alert("Senha ou nome de usuário incorreto");
    }
}

function cadastro() {
alert("Cadastro realizado com sucesso")
windows.location.href = "index.html";
}

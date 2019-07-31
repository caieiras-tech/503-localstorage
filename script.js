let div = document.querySelector("div");
let section = document.querySelector("section");
let caixaTexto = document.querySelector("input");
let botao = document.querySelector("button");
let texto = document.querySelector("h2");
let naoSou = document.querySelector("a");

if(localStorage.nome){
    div.style.display = "none";
    texto.innerHTML=`Seja bem vindo ${localStorage.nome}`;
    naoSou.innerHTML=`Não sou ${localStorage.nome}`;
}
else{
    div.style.display="block";
    section.style.display="none";
    function cadastrar(){
        localStorage.setItem("nome", caixaTexto.value);
        if(localStorage.nome){
            div.style.display = "none";
            section.style.display="block"
            texto.innerHTML=`Seja bem vindo ${localStorage.nome}`;
            naoSou.innerHTML=`Não sou ${localStorage.nome}`;
        }
    }
}


 function limparStorage(){
    localStorage.clear();
}

botao.onclick = cadastrar;
naoSou.onclick = limparStorage;
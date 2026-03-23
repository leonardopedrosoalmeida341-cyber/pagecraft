//mapeamento
const quemsomos = document.getElementById('quemsomos');
const btnOuvir = document.getElementById('btnOuvir');
let corAtual = 0;
let sombraAtual = 0;
let fonteAtual = 0;


function lerTexto() {
    
    window.speechSynthesis.cancel();

    
    const mensagem = new SpeechSynthesisUtterance(quemsomos.value);    
    
    window.speechSynthesis.speak(mensagem);
}


btnOuvir.addEventListener('click', lerTexto);

//perfil
function abrirConfig(){
    document.getElementById("configMenu").classList.add("ativo");
}

function fecharConfig(){
    document.getElementById("configMenu").classList.remove("ativo");
}


function abrirConfig(){
    document.getElementById("configMenu").classList.add("ativo");
}

function fecharConfig(){
    document.getElementById("configMenu").classList.remove("ativo");
}
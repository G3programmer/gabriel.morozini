const texto = `Sou um programador em desenvolvimento, grande apreciador de games.
<br> Amo estar com os meus amigos, com a família e me divertir! 
<br> E sou um guitarrista por diversão :)`;

const elemento = document.querySelector(".descricao");
let index = 0;

function digitar() {
    if (index < texto.length) {
        elemento.innerHTML = texto.substring(0, index + 1) + '<span class="cursor">|</span>';
        index++;
        setTimeout(digitar, 40);
    } else {
        elemento.innerHTML = texto + '<span class="cursor">|</span>';
    }
}

// Inicia a digitação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    if (elemento) {
        digitar();
    }
});
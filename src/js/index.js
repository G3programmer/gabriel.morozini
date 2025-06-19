/*Aqui é o textoapresentado no perfil do arquivo html*/
const texto = `Sou um programador em desenvolvimento, grande apreciador de games, filmes, séries e festivais medievais.
<br> Amo fazer novos amigos, me divertir com eles é um grande privilégio! Também gosto de passar o tempo com a minha família.<br>
Aprecio também os momentos em que estou só, assim posso ouvir as minhas músicas enquanto programo.<br> E sou um músico por diversão :)`;

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
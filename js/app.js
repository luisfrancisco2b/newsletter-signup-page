// selecionar elementos

// Pega o HTML
const root = document.documentElement;

// Pega o botão para alterar o tema
const btn = document.getElementById("btnTema");

// Pega o span(ano) dentro do small
const ano = document.getElementById("ano");


// preenchendo ano atual
ano.textContent = new Date().getFullYear();


// tema light/dark
btn.addEventListener("click", () => {
    const escuro = root.getAttribute("data-tema") === 'escuro'

    if (escuro) {
        root.removeAttribute("data-tema");
    } else {
        root.setAttribute("data-tema", "escuro")
    }
})
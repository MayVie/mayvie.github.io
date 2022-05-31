


//Menu hamburguer para smartphone

const iconeMenu = document.querySelector('[data-icone-menu]');
const divMenu = document.querySelector('[data-div-menu]');


function abreMenu(){
    divMenu.classList.toggle('cabecalho__menu-aberto');
    
}

iconeMenu.addEventListener("click", abreMenu);





// Feature: mudar cor do editor

const inputCor = document.querySelector('[data-input-color]');


function pegarCor(){
    const cor = inputCor.value;
    const caixaColorida = document.querySelector('[data-caixa-colorida]');
    caixaColorida.setAttribute('style', `background-color: ${cor}`)
}
inputCor.addEventListener("input", pegarCor);

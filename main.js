
const inputCor = document.querySelector('[data-input-color]');


function pegarCor(){
    const cor = inputCor.value;
    const caixaColorida = document.querySelector('[data-caixa-colorida]');
    caixaColorida.setAttribute('style', `background-color: ${cor}`)
}
inputCor.addEventListener("input", pegarCor);






const seletorLinguagem = document.querySelector('[data-editor-linguagem]');
const areaCodigo = document.querySelector('[data-caixa-codigo]');
const botaoHighlight = document.querySelector('[data-botao-highlight]');


function visualizarComHighlight(){
    const codigo = areaCodigo.innerText;

    areaCodigo.innerHTML = `<pre><code class="editor__code hljs ${seletorLinguagem.value}"  contenteditable="true" aria-label="editor de código"></code></pre>`;

    areaCodigo.querySelector("code").textContent = codigo;
    
    const codeReescrito = areaCodigo.querySelector("code");
    hljs.highlightElement(codeReescrito);
}

botaoHighlight.addEventListener('click', () => {visualizarComHighlight()});





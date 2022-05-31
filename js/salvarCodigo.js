function salvarCodigo(){

    const codigo = document.querySelector("code").textContent;
    const titulo = document.querySelector('[data-form-titulo]').value;
    const descricao = document.querySelector('[data-form-descricao]').value;
    const linguagem = document.querySelector('[data-editor-linguagem]').value;
    const cor = document.querySelector('[data-input-color]').value;
    
    console.log(titulo);
    
    const paginaComunidade = document.querySelector('[data-comunidade-card]');
    console.log(paginaComunidade);
    // paginaComunidade.innerHTML = `<section class="card">
    // <a href="#" class="editor editor__comunidade">
    //     <div class="editor__caixa-colorida  editor__caixa-colorida__comunidade">
    //         <div class="editor__caixa-codigo  editor__caixa-codigo__comunidade">
    //             <div class="editor__bolinhas">
    //                 <div class="editor__bolinha-vermelha"></div>
    //                 <div class="editor__bolinha-amarela"></div>
    //                 <div class="editor__bolinha-verde"></div>
    //             </div>
    //             <div class="editor__input-codigo editor__input-codigo__comunidade">
    //                 <p></p>
    //             </div>                   
    //         </div>
    //     </div>
        
    //     <div class="editor__card">
    //         <div class="editor__card-content">
    //             <h2>${titulo}</h2>
    //             <p>${descricao}</p>
    //         </div>
    
    //         <div class="editor__card-actions">
    //             <div class="editor__card-actions-icons">
    //                 <div class="editor__card-actions-comment">
    //                     <img src="imagens-card/icon-comentario.png" alt="ícone comentário">
    //                     <p>9</p>
    //                 </div>
    //                 <div class="editor__card-actions-fav">
    //                     <img src="imagens-card/icon-coraçao.png" alt="ícone coração">
    //                     <p>9</p>
    //                 </div>
    //             </div>
    //             <div class="editor__card-actions-autor">
    //             <img src="imagens-card/foto-autor.png" alt="foto do autor">
    //             <p>@Harry</p>
    //             </div>
    //         </div>
    //     </div>
    // </a>
    // </section>`
    
}

const botaoSalvar = document.querySelector('[data-salvar-projeto]');
botaoSalvar.addEventListener('click', () => {salvarCodigo()});















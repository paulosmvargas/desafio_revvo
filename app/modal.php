<div id="modal" class="modal">
    <div class="modal-content">
        <button class="close">&times;</button>
        <img src="https://picsum.photos/600/400?random=15" alt="Imagem do Modal" class="modal-image">
        <h2>EGESTAS TORTOR VULPUTATE</h2>
        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.</p>
        <a href="#" class="btn">INSCREVA-SE</a>
    </div>
</div>

<!-- Modal para Adicionar/Editar Curso -->
<div id="curso-modal" class="modal-curso">
    <div class="modal-curso-content">
        <button class="close close-curso">&times;</button>
        <h2 id="modal-title">Adicionar Curso</h2>
        <form id="curso-form">
            <input type="hidden" id="curso-id">
            <label for="curso-titulo">Título</label>
            <input type="text" id="curso-titulo" required>

            <label for="curso-descricao">Descrição</label>
            <textarea id="curso-descricao" required></textarea>

            <label for="curso-imagem">URL da Imagem</label>
            <input type="text" id="curso-imagem" required>

            <label for="curso-slideshow">Link do Slideshow</label>
            <input type="text" id="curso-slideshow" required>

            <button type="submit" id="save-curso" class="btn-curso">Salvar</button>
            <button type="button" id="delete-curso" style="display: none;" class="btn-danger">Deletar</button>
        </form>
    </div>
</div>

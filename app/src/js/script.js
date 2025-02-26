document.addEventListener("DOMContentLoaded", function () {
    fetch(ROOT_URL + "src/api.php")
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById("cursos-container");
            container.innerHTML = "";
            data.forEach(curso => {
                let cursoHTML = `
                    <div class="curso">
                        <img src="${curso.imagem}" alt="Imagem do curso">
                        <h2>${curso.titulo}</h2>
                        <p>${curso.descricao}</p>
                        <a href="${curso.slideshow}" class="btn">Ver Curso</a>
                    </div>
                `;
                container.innerHTML += cursoHTML;
            });
        })
        .catch(error => console.error("Erro ao carregar cursos:", error));
});
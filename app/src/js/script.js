document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("modal");
    if (!modal) {
      console.error("Modal não encontrado!");
      return;
    }
  
    let closeBtn = document.querySelector(".close");
    modal.style.display = "none";
  
    if (!localStorage.getItem("modalShown")) {
      console.log("Modal sendo exibido...");
      setTimeout(() => {
        modal.style.display = "flex";
      }, 500);
      localStorage.setItem("modalShown", "true");
    } else {
      console.log("Modal já foi exibido anteriormente.");
    }
  
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  
    fetch("src/api.php")
      .then((response) => response.json())
      .then((data) => {
        let container = document.getElementById("cursos-container");
        container.innerHTML = "";
  
        data.forEach((curso) => {
          let cursoHTML = `
              <div class="curso">
                  <img src="${curso.imagem}" alt="Imagem do curso">
                  <h2>${curso.titulo}</h2>
                  <p>${curso.descricao}</p>
                  <a href="${curso.slideshow}" class="btn-curso">Ver Curso</a>
              </div>
          `;
          container.innerHTML += cursoHTML;
        });
  
        let addCursoHTML = `
          <div class="curso add-curso">
            <img src="public/images/plus.png" alt="Adicionar Curso">
            <h2>Adicionar Curso</h2>
          </div>
        `;
        container.innerHTML += addCursoHTML;
      })
      .catch((error) => console.error("Erro ao carregar cursos:", error));
  });
  
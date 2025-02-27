document.addEventListener("DOMContentLoaded", function () {

  let modal = document.getElementById("modal");
  if (!modal) {
    console.error("Modal inicial não encontrado!");
    return;
  }

  let closeBtn = document.querySelector(".close");

  modal.style.display = "none";

  if (!localStorage.getItem("modalShown")) {
    setTimeout(() => {
      modal.style.display = "flex";
    }, 500);
    localStorage.setItem("modalShown", "true");
  }

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // ========== MODAL DE CURSOS ==========
  let cursoModal = document.getElementById("curso-modal");
  let closeCursoBtn = document.querySelector(".close-curso");
  let cursoForm = document.getElementById("curso-form");

  let tituloInput = document.getElementById("curso-titulo");
  let descricaoInput = document.getElementById("curso-descricao");
  let imagemInput = document.getElementById("curso-imagem");
  let slideshowInput = document.getElementById("curso-slideshow");
  let cursoIdInput = document.getElementById("curso-id");

  let saveBtn = document.getElementById("save-curso");
  let deleteBtn = document.getElementById("delete-curso");

  cursoModal.style.display = "none";

  function carregarCursos() {
    fetch(ROOT_URL + "src/api.php")
      .then((response) => response.json())
      .then((data) => {
        let container = document.getElementById("cursos-container");
        container.innerHTML = "";

        data.forEach((curso) => {
          let cursoHTML = `
                        <div class="curso" data-id="${curso.id}">
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

        adicionarEventosCursos();
      })
      .catch((error) => console.error("Erro ao carregar cursos:", error));
  }

  function adicionarEventosCursos() {
    document.querySelectorAll(".curso").forEach((cursoCard) => {
      cursoCard.addEventListener("click", function (event) {
        if (cursoCard.classList.contains("add-curso")) {
          abrirModalCurso();
        } else if (!event.target.classList.contains("btn-curso")) {
          let cursoId = cursoCard.dataset.id;
          abrirModalCurso(cursoId);
        }
      });
    });
  }

  function abrirModalCurso(cursoId = null) {
    cursoModal.style.display = "flex";

    if (cursoId) {
      fetch(`src/api.php?id=${cursoId}`)
        .then((response) => response.json())
        .then((data) => {
          cursoIdInput.value = data.id;
          tituloInput.value = data.titulo;
          descricaoInput.value = data.descricao;
          imagemInput.value = data.imagem;
          slideshowInput.value = data.slideshow;
          document.getElementById("modal-title").textContent = "Editar Curso";
          deleteBtn.style.display = "inline-block";
        })
        .catch((error) => console.error("Erro ao buscar curso:", error));
    } else {
      cursoIdInput.value = "";
      tituloInput.value = "";
      descricaoInput.value = "";
      imagemInput.value = "";
      slideshowInput.value = "";
      document.getElementById("modal-title").textContent = "Adicionar Curso";
      deleteBtn.style.display = "none";
    }
  }

  if (closeCursoBtn) {
    closeCursoBtn.addEventListener("click", function () {
      cursoModal.style.display = "none";
    });
  }

  window.addEventListener("click", function (event) {
    if (event.target === cursoModal) {
      cursoModal.style.display = "none";
    }
  });

  cursoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let cursoId = cursoIdInput.value;
    let method = cursoId ? "PUT" : "POST";

    fetch(`src/api.php${cursoId ? `?id=${cursoId}` : ""}`, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        titulo: tituloInput.value,
        descricao: descricaoInput.value,
        imagem: imagemInput.value,
        slideshow: slideshowInput.value,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        cursoModal.style.display = "none";
        carregarCursos();
      })
      .catch((error) => console.error("Erro ao salvar curso:", error));
  });

  deleteBtn.addEventListener("click", function () {
    let cursoId = cursoIdInput.value;
    if (!cursoId || !confirm("Tem certeza que deseja deletar este curso?"))
      return;

    fetch(`src/api.php?id=${cursoId}`, { method: "DELETE" })
      .then((response) => response.json())
      .then(() => {
        cursoModal.style.display = "none";
        carregarCursos();
      })
      .catch((error) => console.error("Erro ao deletar curso:", error));
  });

  carregarCursos();
});

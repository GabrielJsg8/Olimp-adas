function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim(); // Remove espaços em branco no início e no fim
  
    // Limpa a lista de resultados se o campo de pesquisa estiver vazio
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Por favor. digite alguma coisa.</p>";
      return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Percorre cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
      // Verifica se o título inclui a palavra pesquisada, ignorando case
      if (titulo.includes(campoPesquisa) || (descricao.includes(campoPesquisa)) || (tags.includes(campoPesquisa))) {
        resultados += `
            <div class="item-resultado">
            <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `
      }
    }
  
    // Se não houver resultados, exibe a mensagem
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
    }
      section.innerHTML = resultados;

  }
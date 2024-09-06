function pesquisar() {
    //Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultado-casa");

    //Coleta o nome digitado
    let coletaNome = document.getElementById("nome").value

    //Se não for nada digitado, retorna mensagem de erro
    if (!coletaNome) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o seu nome</p>"
        return
    }

    //Inicializa uma string vazia para armazenar os resultados 
    let resultados = ""

    //Inicializa variável com os nomes das casas
    const casasHogwarts = ['Grifinória', 'Sonserina', 'Corvinal', 'LufaLufa'];

    //Cálcula qual a casa será escolhida
    const casaAleatoria = casasHogwarts[Math.floor(Math.random() * casasHogwarts.length)];

    // Mapeamento de casas para imagens
    const imagensCasas = {
        Grifinória: "imagens/grifinoria.jpg",
        Sonserina: "imagens/sonserina.jpg",
        Corvinal: "imagens/corvinal.jpg",
        LufaLufa: "imagens/lufa.jpg"
    };

    //Analisa o resultado das casas e mostra o resultado
    for (let dado of dados) {
        if (dado.titulo.includes(casaAleatoria)) {
            resultados = `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>`
            // Atualiza a imagem de fundo
            document.body.style.backgroundImage = `url('${imagensCasas[casaAleatoria]}')`;
        }

    }

    section.innerHTML = resultados
}










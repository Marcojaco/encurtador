// Carregar links já armazenados no localStorage
const linksEncurtados = JSON.parse(localStorage.getItem("links")) || {};

// Verifica se há um código na URL para redirecionar
const params = new URLSearchParams(window.location.search);
const codigo = params.get("l");

if (codigo) {
    if (linksEncurtados[codigo]) {
        window.location.href = linksEncurtados[codigo]; // Redireciona para o link real
    } else {
        alert("Link encurtado não encontrado!"); // Exibe mensagem se o link não for encontrado
    }
}

console.log("Links armazenados:", linksEncurtados);
console.log("Código da URL:", codigo);




function encurtarLink() {
    const originalUrl = document.getElementById("originalUrl").value;

    if (!originalUrl) {
        alert("Por favor, insira um link válido.");
        return;
    }

    const codigo = Math.random().toString(36).substring(2, 8);

    // Salvar o link no localStorage
    linksEncurtados[codigo] = originalUrl;
    localStorage.setItem("links", JSON.stringify(linksEncurtados));

    // Criar e exibir o link encurtado
    const shortUrl = `${window.location.origin}${window.location.pathname}?l=${codigo}`;
    document.getElementById("shortenedUrl").innerHTML = 
        `Seu link encurtado: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
}

console.log(JSON.parse(localStorage.getItem("links")));

// Função para mostrar o tooltip
function mostrarTooltip() {
    document.getElementById("tooltip").style.display = "block";
}

// Função para esconder o tooltip
function esconderTooltip() {
    document.getElementById("tooltip").style.display = "none";
}

// Função para calcular o risco
function calcularRisco() {
    // Obter valores do formulário
    const linhas = parseFloat(document.getElementById("linhas").value);
    const quasiIdentificadores = parseFloat(document.getElementById("quasi-identificadores").value);
    const identificadoresPrimarios = parseFloat(document.getElementById("identificadores-primarios").value);
    const compartilhamento = parseFloat(document.getElementById("compartilhamento").value);

    const dadosSensiveis = document.getElementById("dados-sensiveis").checked ? 1 : 0;
    const dadosMenores = document.getElementById("dados-menores").checked ? 1 : 0;
    const dadosFinanceiros = document.getElementById("dados-financeiros").checked ? 1 : 0;

    // Calcular probabilidade
    const probabilidade = linhas + quasiIdentificadores + identificadoresPrimarios + compartilhamento;

    // Calcular impacto
    const impacto = dadosSensiveis + dadosMenores + dadosFinanceiros;

    // Calcular soma total
    const total = probabilidade + impacto;

    // Verificar o nível de risco
    let nivelRisco = "";
    if (total >= 0 && total <= 3) {
        nivelRisco = "Nível de Risco: Baixo";
    } else if (total > 3 && total <= 6) {
        nivelRisco = "Nível de Risco: Médio";
    } else {
        nivelRisco = "Nível de Risco: Alto";
    }

    // Exibir resultado
    document.getElementById("resultado").innerHTML = `
        <p>Soma da Probabilidade: ${probabilidade.toFixed(2)}</p>
        <p>Soma do Impacto: ${impacto}</p>
        <p>Soma Total: ${total.toFixed(2)}</p>
        <p>${nivelRisco}</p>
    `;
}

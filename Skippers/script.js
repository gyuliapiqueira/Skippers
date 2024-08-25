// Função para mostrar o tooltip
function mostrarTooltip() {
    document.getElementById("tooltip-linhas").style.display = "block";
}

// Função para esconder o tooltip
function esconderTooltip() {
    document.getElementById("tooltip-linhas").style.display = "none";
}

// Função para mostrar o tooltip
function mostrarTooltipP() {
    document.getElementById("tooltip-primarios").style.display = "block";
}

// Função para esconder o tooltip
function esconderTooltipP() {
    document.getElementById("tooltip-primarios").style.display = "none";
}

// Função para mostrar o tooltip
function mostrarTooltipQ() {
    document.getElementById("tooltip-quasi").style.display = "block";
}

// Função para esconder o tooltip
function esconderTooltipQ() {
    document.getElementById("tooltip-quasi").style.display = "none";
}

function calcularRisco() {
    // Obter valores do formulário
    const linhas = parseFloat(document.getElementById("linhas").value);
    const quasiIdentificadores = parseFloat(document.getElementById("quasi-identificadores").value);
    const identificadoresPrimarios = parseFloat(document.getElementById("identificadores-primarios").value);

    let compartilhamento = 0;
    if (document.getElementById("interno").checked) compartilhamento += parseFloat(document.getElementById("interno").value);
    if (document.getElementById("externo").checked) compartilhamento += parseFloat(document.getElementById("externo").value);
    if (document.getElementById("internacional").checked) compartilhamento += parseFloat(document.getElementById("internacional").value);

    const dadosSensiveis = document.getElementById("dados-sensiveis").checked ? 1 : 0;
    const dadosMenores = document.getElementById("dados-menores").checked ? 1 : 0;
    const dadosFinanceiros = document.getElementById("dados-financeiros").checked ? 1 : 0;

    // Calcular probabilidade
    const probabilidade = linhas + quasiIdentificadores + identificadoresPrimarios + compartilhamento;

    // Calcular impacto
    const impacto = dadosSensiveis + dadosMenores + dadosFinanceiros;

    // Calcular soma total
    const total = probabilidade * impacto;

  // Verificar o nível de risco
let nivelRisco = ""; 
let imagemRisco = ""; // Variável para armazenar o caminho da imagem

if (total >= 0 && total <= 3) {
    nivelRisco = "O nível de risco de reidentificação da sua base de dados é <b>baixo</b>!";
    imagemRisco = "imgs/baixa.png"; // Caminho da imagem para risco baixo
} else if (total > 3 && total <= 6) {
    nivelRisco = "Atente-se. O nível de risco de reidentificação da sua base de dados é <b>médio</b>.";
    imagemRisco = "imgs/media.png"; // Caminho da imagem para risco médio
} else {
    nivelRisco = "Cuidado!⚠️ O nível de risco de reidentificação da sua base de dados é <b>alto</b>.";
    imagemRisco = "imgs/alta.png"; // Caminho da imagem para risco alto
}

// Exibir resultado com a imagem correspondente
document.getElementById("resultado").innerHTML = `
    <p>${nivelRisco}</p>
    <img src="${imagemRisco}" alt="${nivelRisco}" style="width: 300px; height: auto; margin-left: -70px">
`;

    // Ativar o efeito de flip
    document.querySelector('.caixa-flip').classList.add('flip-active');
}

function voltarFormulario() {
    // Voltar para o formulário
    document.querySelector('.caixa-flip').classList.remove('flip-active');
}


$(document).ready(function() {
    $('#onoff-sensiveis').on('change', function() {
        var el = this;
        $.ajax({
            url: "save.php",
            data: {
                estado: this.checked
            }
        }).done(function(msg) {
            if (msg == 'failed') return el.checked = !el.checked; // caso o servidor retorne "failed" mudar o estado do botão
            else alert("Info gravada: " + msg);
        });
    });

    $('#onoff-menores').on('change', function() {
        var el = this;
        $.ajax({
            url: "save.php",
            data: {
                estado: this.checked
            }
        }).done(function(msg) {
            if (msg == 'failed') return el.checked = !el.checked; 
            else alert("Info gravada: " + msg);
        });
    });

    $('#onoff-financeiros').on('change', function() {
        var el = this;
        $.ajax({
            url: "save.php",
            data: {
                estado: this.checked
            }
        }).done(function(msg) {
            if (msg == 'failed') return el.checked = !el.checked;
            else alert("Info gravada: " + msg);
        });
    });
});

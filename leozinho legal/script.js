const nomeTarefaInput = document.getElementById("nomeTarefa");
const tempoTarefaInput = document.getElementById("tempoTarefa");
const mensagem = document.getElementById("mensagem");
const botaoAdicionar = document.getElementById("botaoAdicionar");

// Função assíncrona para gerenciar a tarefa
async function gerenciarTarefa(nome, tempo) {
    mensagem.textContent = `A tarefa ${nome} está em andamento...`;

    // Converte o tempo de segundos para milissegundos
    const tempoEmMilissegundos = tempo * 1000;

    // Espera a promessa ser resolvida após o tempo especificado
    await new Promise((resolve) => setTimeout(resolve, tempoEmMilissegundos));

    // Atualiza a mensagem quando a tarefa é concluída
    mensagem.textContent = `Tarefa ${nome} concluída!`;
}

// Adiciona um ouvinte de evento para o botão de adicionar
botaoAdicionar.addEventListener("click", function() {
    const nomeTarefa = nomeTarefaInput.value.trim();
    const tempoTarefa = Number(tempoTarefaInput.value);

    // Verifica se o nome da tarefa está vazio e se o tempo é um número positivo
    if (nomeTarefa === "" || isNaN(tempoTarefa) || tempoTarefa <= 0) {
        mensagem.textContent = "Por favor, preencha todos os campos corretamente.";
    } else {
        // Chama a função para gerenciar a tarefa
        gerenciarTarefa(nomeTarefa, tempoTarefa);

        // Limpa os campos de entrada
        nomeTarefaInput.value = "";
        tempoTarefaInput.value = "";
    }
});

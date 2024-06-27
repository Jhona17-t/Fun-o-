const prompt = require("prompt-sync")();

const lista = [{
     id : 1
    
}
   
];

console.clear();

function mostrarLista() {
  console.log(lista)
}

function adicionarTarefa() {
 lista.push({
    
    lista.tarefa = prompt("digite uma tarefa     "),
    
})
}

function marcarTarefa() {
  let m = 
    lista.push()
}

function removerTarefa() {
  // escreva seu código aqui
}

function continuar() {
  prompt.hide("pressione Enter para continuar ...");
}

while (true) {
  console.log(
    `MENU
    1 - ver lista
    2 - adicionar tarefa
    3 - marcar tarefa
    4 - remover tarefa
    5 - encerrar`
  );

  const option = Number(prompt("Digite a opção: "));

  if (option === 5) {
    console.clear();
    console.log("Programa encerrado!");
    break;
  }

  console.clear();

  switch (option) {
    case 1:
      mostrarLista();
      continuar();
      break;
    case 2:
      adicionarTarefa();
      continuar();
      break;
    case 3:
      marcarTarefa();
      continuar();
      break;
    case 4:
      removerTarefa();
      continuar();
      break;
    default:
      console.log("Opção inválida");
      continuar();
  }

  console.clear();
}
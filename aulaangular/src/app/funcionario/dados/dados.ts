import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  standalone: false,
  templateUrl: './dados.html',
  styleUrl: './dados.css'
})
export class Dados {
  
 logado: boolean = false;

  // 2. Cria um método que inverte o valor de 'logado'.
  // Se for 'true', vira 'false'. Se for 'false', vira 'true'.
  alternarLogin() {
    this.logado = !this.logado;
 }

  tarefas: string[] = [
    'Estudar Angular',
    'Fazer exercício físico',
    'Comprar pão'
  ];

  // 2. Variável para armazenar a nova tarefa digitada pelo usuário.
  novaTarefa: string = '';

  // 3. Método para adicionar uma nova tarefa à lista.
  adicionarTarefa() {
    // Verifica se o campo de texto não está vazio antes de adicionar.
    if (this.novaTarefa.trim() !== '') {
      // Adiciona a nova tarefa no final do array.
      this.tarefas.push(this.novaTarefa);
      // Limpa a variável para o próximo item.
      this.novaTarefa = '';
    }
  }

  // 4. Método para remover uma tarefa da lista pelo seu índice.
  removerTarefa(indice: number) {
    // Usa o método 'splice' para remover o item no índice especificado.
    this.tarefas.splice(indice, 1);
}
}

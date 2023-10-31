import { Component } from '@angular/core';

interface Tarefa {
  descricao: string;
  concluido: boolean;
}

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
  tarefas: Tarefa[] = [
    {descricao: 'Comprar leite', concluido: false},
    {descricao: 'Pagar a conta de luz', concluido: true},
    {descricao: 'Fazer exercícios', concluido: false}
  ];

  adicionarTarefa(descricao: string) {
    this.tarefas.push({descricao, concluido: false});
  }

  excluirTarefa(tarefa: Tarefa) {
    const indice = this.tarefas.indexOf(tarefa);
    if (indice !== -1) {
      this.tarefas.splice(indice, 1);
    }
  }
}
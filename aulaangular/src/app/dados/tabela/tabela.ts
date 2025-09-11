import { Component } from '@angular/core';
import { Produto } from '../modelo/Produto';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {
  
  displayedColumns: string[] = ['nome', 'valor', 'acao'];
  
  dataSource: Produto[] = [
    {nome: 'coca-cola', valor: 10},
    {nome: 'fanta', valor: 8}
  ]
  
  editarProduto(produto: Produto) {
    console.log('Você clicou em editar o produto:', produto);
  }

  excluirProduto(produto: Produto) {
    console.log('Você clicou em excluir o produto:', produto);
  }
}

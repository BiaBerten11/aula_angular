import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
produtos = [
    { nome: 'Notebook Gamer', preco: 3500, estoque: 10 },
    { nome: 'Smartphone', preco: 1800, estoque: 0 },
    { nome: 'Monitor 4K', preco: 2200, estoque: 5 },
    { nome: 'Mouse', preco: 150, estoque: 0 },
    { nome: 'Teclado Mecânico', preco: 400, estoque: 3 }
  ];

  aumentarPrecos(): void {
    this.produtos = this.produtos.map(p => ({
      ...p,
      preco: +(p.preco * 1.1).toFixed(2)
    }));
  }

  diminuirPrecos(): void {
    this.produtos = this.produtos.map(p => ({
      ...p,
      preco: +(p.preco * 0.9).toFixed(2)
    }));
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {
  

 mostrarMensagem = true;
 toggleMensagem() {
 this.mostrarMensagem = !this.mostrarMensagem;
 }

 listaItens = ['Maçã', 'Banana', 'Laranja'];

  isDestaque = true;
  hasError = false;

  corFundo = 'yellow';
  tamanhoFonte = '20px';

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-conta',
  standalone: false,
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta {

    valor = 0

 

    aumentar(){
      this.valor = (this.valor + 1)
    }

    diminuir(){
      this.valor = (this.valor - 1)
    }

    zerar(){
      this.valor = 0
    }

   

   

}
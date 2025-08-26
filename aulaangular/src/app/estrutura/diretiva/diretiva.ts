import { Component } from '@angular/core';

@Component({
selector: 'app-diretiva',
templateUrl: './diretiva.component.html',
styleUrls: ['./diretiva.component.css']
})
export class DiretivaComponent {

// Lista de alunos
alunos = [
{ id: 1, nome: 'Maria', status: true },
{ id: 2, nome: 'João', status: false },
{ id: 3, nome: 'Ana', status: true }
];

// Controle para exibir/ocultar a lista
mostrarLista = true;

// Controle do tamanho da fonte
fontSize = 16;

alternarLista() {
this.mostrarLista = !this.mostrarLista;
}

aumentarFonte() {
this.fontSize += 2;
}

diminuirFonte() {
this.fontSize -= 2;
}
}
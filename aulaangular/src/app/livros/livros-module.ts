import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing-module';
import { Cadastrar } from './cadastrar/cadastrar';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    Cadastrar
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    MatToolbarModule
  ]
})
export class LivrosModule { }

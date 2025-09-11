import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosRoutingModule } from './dados-routing-module';
import { Tabela } from './tabela/tabela';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    Tabela
  ],
  imports: [
    CommonModule,
    DadosRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class DadosModule { }

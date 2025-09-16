import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing-module';
import { Dados } from './dados/dados';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    Dados
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
    MatTableModule
  ]
})
export class FuncionarioModule { }

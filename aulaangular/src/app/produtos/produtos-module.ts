import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing-module';
import { Estoque } from './estoque/estoque';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    Estoque
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ProdutosModule { }

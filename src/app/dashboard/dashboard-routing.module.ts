import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BancoDeQuestoesComponent } from './banco-de-questoes/banco-de-questoes.component';
import { CorrecaoQuestoesComponent } from './correcao-questoes/correcao-questoes.component';
import { CorrigirProvasComponent } from './corrigir-provas/corrigir-provas.component';

import { HomeComponent } from './home/home.component';
import { RealizarProvaComponent } from './realizar-prova/realizar-prova.component';
import { VisualizarCorrecoesComponent } from './visualizar-correcoes/visualizar-correcoes.component';
import { VisualizarEstatisticasComponent } from './visualizar-estatisticas/visualizar-estatisticas.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'visualizar-correcoes', component: VisualizarCorrecoesComponent},
  {path: 'realizar-prova', component: RealizarProvaComponent},
  {path: 'banco-de-questoes', component: BancoDeQuestoesComponent},
  {path: 'corrigir-provas', component: CorrigirProvasComponent},
  {path: 'visualizar-estatistica', component: VisualizarEstatisticasComponent},
  {path: 'corrigir', component: CorrecaoQuestoesComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

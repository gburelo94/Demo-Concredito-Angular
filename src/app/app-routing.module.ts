import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProspectosComponent } from './components/prospectos/prospectos.component';
import { ListaProspectosComponent } from './components/lista-prospectos/lista-prospectos.component';
import { EvaluacionProspectosComponent } from './components/evaluacion-prospectos/evaluacion-prospectos.component';
import { VerProspectosComponent } from './components/ver-prospectos/ver-prospectos.component';


const routes: Routes = [
  { path: '', component: ListaProspectosComponent },
  { path: 'prospectos', component: ProspectosComponent },
  { path: 'evaluacion-prospectos', component: EvaluacionProspectosComponent },
  { path: 'ver-prospectos/:id', component: VerProspectosComponent},
  { path: 'evaluar-prospectos/:id', component: EvaluacionProspectosComponent},
  { path: '**', component: ListaProspectosComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

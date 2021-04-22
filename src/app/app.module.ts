import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ProspectosComponent } from './components/prospectos/prospectos.component';
import { ListaProspectosComponent } from './components/lista-prospectos/lista-prospectos.component';
import { EvaluacionProspectosComponent } from './components/evaluacion-prospectos/evaluacion-prospectos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { VerProspectosComponent } from './components/ver-prospectos/ver-prospectos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


@NgModule({
  declarations: [
    AppComponent,
    ProspectosComponent,
    ListaProspectosComponent,
    EvaluacionProspectosComponent,
    VerProspectosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

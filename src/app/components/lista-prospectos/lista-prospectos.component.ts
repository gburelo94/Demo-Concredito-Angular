import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import { ProspectosService } from 'src/app/services/prospectos.service';

@Component({
  selector: 'app-lista-prospectos',
  templateUrl: './lista-prospectos.component.html',
  styleUrls: ['./lista-prospectos.component.css']
})
export class ListaProspectosComponent implements OnInit {

  listaProspectos: any[] = []
  constructor(private prospectoService: ProspectosService) {

   }

  ngOnInit(): void {
    this.obtenerProspectos();
  }

  obtenerProspectos(){
    this.prospectoService.getListProspectos().subscribe(data => {
      console.log(data);
      this.listaProspectos = data;
    },error => {
      console.log(error);
    })
  }

  obtenerProspecto(idx: number){
    this.prospectoService.getProspectoById(idx).subscribe(data => {
      console.log(data);
    },error => {
      console.log(error);
    })
  }

}

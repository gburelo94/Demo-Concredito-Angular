import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { ProspectosService } from 'src/app/services/prospectos.service';

@Component({
  selector: 'app-ver-prospectos',
  templateUrl: './ver-prospectos.component.html',
  styleUrls: ['./ver-prospectos.component.css']
})
export class VerProspectosComponent implements OnInit {
  public parametro: any;
  formulario: FormGroup;


  constructor(private prospectoService: ProspectosService, private _route: ActivatedRoute, private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: [''],
      apPaterno: [''],
      apMaterno: [''],
      calle: [''],
      numero: [''],
      colonia: [''],
      codigoPostal: [''],
      telefono: [''], 
      rfc: [''],
      observaciones: [''],
      status: ['']
    })
  }

  ngOnInit(): void {
      this._route.paramMap.subscribe((params: ParamMap) => {
        this.parametro = params.get('id')
      })

      this.prospectoService.getProspectoById(this.parametro).subscribe(data =>{
        console.log(data);
        this.formulario.patchValue({
          nombre: data.nombre,
          apPaterno: data.apPaterno,
          apMaterno: data.apMaterno,
          calle: data.calle,
          numero: data.numero,
          colonia: data.colonia,
          codigoPostal: data.codigoPostal,
          telefono: data.telefono,
          rfc: data.rfc,
          observaciones: data.observaciones,
          status: data.status
        })
      })
  }

  

}

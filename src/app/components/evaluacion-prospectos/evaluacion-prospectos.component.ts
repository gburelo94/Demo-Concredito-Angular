import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProspectosService } from 'src/app/services/prospectos.service';

@Component({
  selector: 'app-evaluacion-prospectos',
  templateUrl: './evaluacion-prospectos.component.html',
  styleUrls: ['./evaluacion-prospectos.component.css']
})
export class EvaluacionProspectosComponent implements OnInit {
  public parametro: any;
  formulario: FormGroup;
  situacion: any = ['Enviado','Autorizado','Rechazado'];
  
  constructor(private prospectoService: ProspectosService, 
    private _route: ActivatedRoute, private fb: FormBuilder,
    private toastr: ToastrService) { 
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
        observaciones: [{value:null,disabled:true},[Validators.required]],
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

  cambio(){
    if(this.formulario.get('status')?.value === 'Rechazado'){
      this.formulario.get('observaciones')?.enable();
    }
    else{
      this.formulario.get('observaciones')?.disable();
    }
  }

  cambiarSituacion(){
    const prospecto: any = {
      id: this.parametro, 
      observaciones: this.formulario.get('observaciones')?.value, 
      status:this.formulario.get('status')?.value
    }
    this.prospectoService.updateStatusProspecto(prospecto).subscribe(data => {
        this.toastr.success('El prospecto ha sido evaluado correctamente.', 'Operación éxitosa');
    },error => {
      console.log(error);
      this.toastr.error('Ha ocurrido un error inesperado al enviar los datos. Por favor intente nuevamente.', 'Error');
    })
  }
}



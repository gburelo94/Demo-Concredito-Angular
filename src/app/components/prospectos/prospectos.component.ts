import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProspectosService } from 'src/app/services/prospectos.service';

@Component({
  selector: 'app-prospectos',
  templateUrl: './prospectos.component.html',
  styleUrls: ['./prospectos.component.css'],
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})

export class ProspectosComponent implements OnInit {
  formulario: FormGroup;
  closeResult = '';

  selectedFiles!: FileList;
  message = '';
  fileName = "";
  idProspectoNuevo = '';
  nombreArchivo = '';
  url = '';

  constructor(private fBuilder: FormBuilder,
    private toastr: ToastrService,
    private prospectoService: ProspectosService,
    private modalService: NgbModal) { 
    this.formulario = this.fBuilder.group({
      nombre: ['', [Validators.required]],
      apPaterno: ['', [Validators.required]],
      apMaterno: [''],
      calle: ['', [Validators.required, Validators.maxLength(80)]],
      numero: ['',[Validators.required, Validators.maxLength(80)]],
      colonia: ['',[Validators.required, Validators.maxLength(80)]],
      codigoPostal: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      telefono: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      rfc: ['', [Validators.required, Validators.maxLength(13), Validators.minLength(10)]],
      archivo:['',[Validators.required]]
    })
  }

  ngOnInit(): void { }
  
  openVerticallyCentered(content: any) {
    this.modalService.open(content, { centered: true });
  }

  crearProspecto(){
    const prospecto: any = {
      nombre: this.formulario.get('nombre')?.value,
      apPaterno: this.formulario.get('apPaterno')?.value,
      apMaterno: this.formulario.get('apMaterno')?.value,
      calle: this.formulario.get('calle')?.value,
      numero: this.formulario.get('numero')?.value,
      colonia: this.formulario.get('colonia')?.value,
      codigoPostal: this.formulario.get('codigoPostal')?.value,
      telefono: this.formulario.get('telefono')?.value,
      rfc: this.formulario.get('rfc')?.value,
      status: 'Enviado'  
    }
    this.prospectoService.saveProspecto(prospecto).subscribe(data => {
      this.toastr.success('El prospecto ha sido enviado.', 'Registro éxitoso');
      this.uploadFiles();
      this.crearArchivo(data.id);
      //this.obtenerUrl(this.nombreArchivo);
      this.formulario.reset();
    },error => {
      console.log(error);
      this.toastr.error('Ha ocurrido un error inesperado al enviar los datos. Por favor intente nuevamente.', 'Error');
    });
  }

  crearArchivo(idProspecto: any){
    const archivo: any = {
        nombre: this.nombreArchivo,
        id: idProspecto
    }
    this.prospectoService.saveFile(archivo).subscribe(data =>{

    }, error =>{
      console.log(error);
      this.toastr.error('Ha ocurrido un error inesperado al enviar los datos. Por favor intente nuevamente.', 'Error');
    });
  }

  /*obtenerUrl(nameFile: any){
    this.prospectoService.getUrlFile(nameFile).subscribe(data =>{
      console.log(data);
    },error =>{
      console.log(error);
      this.toastr.error('X', 'Error');
    })
  }

  actualizarArchivo(){
  }*/

  selectFiles(event:any) {
    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }

  uploadFiles() {
    this.message = '';
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }
  
  upload(index: any, file:any) {
    this.nombreArchivo = file.name;
    this.prospectoService.uploadFile(file).subscribe(event => {
    },err => {
        this.message = 'No se puede subir el archivo ' + file.name;
    });
  }
}


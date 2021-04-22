import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProspectosService {

  private myAppUrl = 'http://localhost:8080/';
  private myApiUrl = 'prospectos/'

  constructor(private http: HttpClient) { }
  
  getListProspectos(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

  getProspectoById(id: number): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + id)
  }

  saveProspecto(prospecto: any): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl + "add", prospecto);
  }

  updateStatusProspecto(prospecto: any): Observable<any>{
    return this.http.patch(this.myAppUrl + this.myApiUrl + "cambiarsituacion",prospecto);
  }

  uploadFile(files: File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('files',files);
    const req = new HttpRequest('POST',`${this.myAppUrl}/archivos/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  saveFile(archivo: any): Observable<any>{
    return this.http.post(this.myAppUrl + "/archivos/add", archivo);
  }

  updateFile(file: any): Observable<any>{
    return this.http.patch(this.myAppUrl + "/archivos/update",file);
  }

  getUrlFile(filename: any): Observable<any>{
    return this.http.get(this.myAppUrl + "/archivos/" + filename);
  }
}

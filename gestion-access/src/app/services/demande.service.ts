import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {demandeur} from "../model/demandeur.model";
import {environment} from "../../environments/environment";
import {Demande} from "../model/Demande.model";

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  public host:string="http://localhost:8081";

  constructor(private http:HttpClient) {}

  update(id: any,demandeStatus:String): Observable<any> {
    console.log(id)
    return this.http.put(environment.backendHost+"/demandes/"+ id,demandeStatus);
  }

  public getDemande():Observable<Array<Demande>>{
    return this.http.get<Array<Demande>>(environment.backendHost+"/demandes");
  }

  public searchDemande(keyword : number ):Observable<Array<Demande>>{
    return this.http.get<Array<Demande>>(environment.backendHost+"/demandes/search?keyword="+keyword)
  }

  // @ts-ignore
  public saveDemande(formData : FormData ):Observable<any>{
    if(formData.get('TYPE')=="ENGIIN"){
      return this.http.post<any>(environment.backendHost+"/demandes-engin",formData);
    }

    if(formData.get('TYPE')=="PERSONNE"){
      return this.http.post<any>(environment.backendHost+"/demandes-personne",formData);
    }

    if(formData.get('TYPE')=="TRANSITAIRE"){
      return this.http.post<any>(environment.backendHost+"/demandes-transitaire",formData);
    }




  }
  public deleteDemande(id: String){
    return this.http.delete(environment.backendHost+"/demande"+id);
  }
  // uploadPhotoProduct(formData : FormData): Observable<HttpEvent<{}>> {
  //
  //   const req = new HttpRequest('POST', this.host+'/uploadPhoto/'+idProduct, formdata, {
  //     reportProgress: true,
  //     responseType: 'text'
  //   });
  //
  //   return this.http.request(req);
  // }


  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', environment.backendHost+"/upload", formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(environment.backendHost+"/files");
  }



  download(url: string): Observable<any> {
    return this.http.get(url, {

      // responseType: 'blob'
    })
  }
}

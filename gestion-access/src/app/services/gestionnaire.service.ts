import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {demandeur} from "../model/demandeur.model";
import {environment} from "../../environments/environment";
import {GestionnaireModel} from "../model/Gestionnaire.model";

@Injectable({
  providedIn: 'root'
})
export class GestionnaireService {

  constructor(private http:HttpClient) { }

  public getGestionnaires():Observable<Array<GestionnaireModel>>{
    return this.http.get<Array<GestionnaireModel>>(environment.backendHost+"/gestionnaires")
  }
  public searchGestionnaires(keyword : string ):Observable<Array<GestionnaireModel>>{
    return this.http.get<Array<GestionnaireModel>>(environment.backendHost+"/gestionnaires/search?keyword="+keyword)
  }

  public saveGestionnaires(dem : GestionnaireModel ):Observable<GestionnaireModel>{
    return this.http.post<GestionnaireModel>(environment.backendHost+"/gestionnaires",dem);
  }

  public deleteGestionnaires(id: string){
    return this.http.delete(environment.backendHost+"/gestionnaires"+id);
  }
}

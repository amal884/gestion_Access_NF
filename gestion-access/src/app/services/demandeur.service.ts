import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {demandeur} from "../model/demandeur.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DemandeurService {

  constructor(private http:HttpClient) {
  }
  public getDemandeurs():Observable<Array<demandeur>>{
    return this.http.get<Array<demandeur>>(environment.backendHost+"/demandeurs")
  }
  public searchDemandeurs(keyword : string ):Observable<Array<demandeur>>{
    return this.http.get<Array<demandeur>>(environment.backendHost+"/demandeurs/search?keyword="+keyword)
  }

  public saveDemandeurs(dem : demandeur ):Observable<demandeur>{
    return this.http.post<demandeur>(environment.backendHost+"/demandeurs",dem);
  }


  public deleteDemandeurs(id: string){
    return this.http.delete(environment.backendHost+"/demandeurs"+id);
  }
}

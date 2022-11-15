import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {demandeur} from "../model/demandeur.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {GestionnaireModel} from "../model/Gestionnaire.model";
import {GestionnaireService} from "../services/gestionnaire.service";

@Component({
  selector: 'app-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.css']
})
export class GestionnaireComponent implements OnInit {

  gestionnaire! : Observable<Array<GestionnaireModel>>;
  errorMesssage! : string ;
  searchFormGroup! :FormGroup;

  constructor(private gestionnaireService:GestionnaireService, private fb :FormBuilder) { }

  ngOnInit(): void {

    this.searchFormGroup=this.fb.group({
      keyword :this.fb.control("")
    });
    this.handleSearchGestionnaire();
  }

  handleSearchGestionnaire() {
    let kw = this.searchFormGroup?.value.keyword;
    this.gestionnaire= this.gestionnaireService.searchGestionnaires(kw).pipe(
      catchError(err=>{
        this.errorMesssage=err.message;
        return throwError(err);
      })
    );}

  handleDeleteGestionnaire(d: GestionnaireModel) {
    let conf= confirm("Are you sure ?");
    if(!conf) return ;
    this.gestionnaireService.deleteGestionnaires(d.nom).subscribe({
        next : value => {
          this.gestionnaire=this.gestionnaire.pipe(
            map(data=>{
              let index = data.indexOf(d);
              data.slice(index,1)
              return data;
            })
          );

        },
        error : err => {
          console.log(err);
        }
      }

    )

  }


}

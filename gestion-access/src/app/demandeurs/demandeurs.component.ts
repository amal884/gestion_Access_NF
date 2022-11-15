import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DemandeurService} from "../services/demandeur.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {demandeur} from "../model/demandeur.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-demandeurs',
  templateUrl: './demandeurs.component.html',
  styleUrls: ['./demandeurs.component.css']
})
export class DemandeursComponent implements OnInit {
  demandeurs! : Observable<Array<demandeur>>;
  errorMesssage! : string ;
  searchFormGroup! :FormGroup;

  constructor(private demandeurService:DemandeurService, private fb :FormBuilder) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword :this.fb.control("")
    });
    this.handleSearchDemandeur();
  }

  handleSearchDemandeur() {
    let kw = this.searchFormGroup?.value.keyword;
    this.demandeurs= this.demandeurService.searchDemandeurs(kw).pipe(
      catchError(err=>{
        this.errorMesssage=err.message;
        return throwError(err);
      })
    );}

  handleDeleteDemandeur(d: demandeur) {
    let conf= confirm("Are you sure ?");
    if(!conf) return ;                                         
   this.demandeurService.deleteDemandeurs(d.cin).subscribe({
     next : value => {
       this.demandeurs=this.demandeurs.pipe(
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


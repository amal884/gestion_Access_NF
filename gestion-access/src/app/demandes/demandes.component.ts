import {Component, Input, OnInit} from '@angular/core';
import {catchError, map, Observable, throwError} from "rxjs";
import {demandeur} from "../model/demandeur.model";
import {Demande} from "../model/Demande.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DemandeurService} from "../services/demandeur.service";
import {DemandeService} from "../services/demande.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CustomHttpRespone} from "../model/CustomHttpRespone.model";
import {NotificationType} from "../enum/notification-type.enum";
// import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  demandes! : any
  errorMesssage! : string ;
  searchFormGroup! :FormGroup;



  @Input() currentTutorial: any = {
    title: '',
    description: '',
    published: false
  };
  private message!: string;



  constructor(private fb :FormBuilder , private demandeService:DemandeService, private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8081/demandes").subscribe(data=>{
      this.demandes=data;
      // const a = document.createElement('a')
      // const objectUrl = URL.createObjectURL(data)
      // a.href = objectUrl
      // a.download = 'archive.zip';
      // a.click();
      // URL.revokeObjectURL(objectUrl);
    },error => {
      console.log(error);
    })
  }




  //  handleSearchDemande() {
  //   let kw = this.searchFormGroup?.value.keyword;
  //   this.demande= this.demandeService.searchDemande(kw).pipe(
  //     catchError(err=>{
  //       this.errorMesssage=err.message;
  //       return throwError(err);
  //     })
  //   );
  // }
  // handleDeleteDemande(d: Demande) {
  //   let conf= confirm("Are you sure ?");
  //   if(!conf) return ;
  //   this.demandeService.deleteDemande(d.).subscribe({
  //       next : value => {
  //         this.demande=this.demande.pipe(
  //           map(data=>{
  //             let index = data.indexOf(d);
  //             data.slice(index,1)
  //             return data;
  //           })
  //         );
  //
  //       },
  //       error : err => {
  //         console.log(err);
  //       }
  //     }
  //
  //   )
  //
  // }


  dowloadZip(id: any ){
    let anchor = document.createElement("a");
    document.body.appendChild(anchor);
    let file = 'http://localhost:8081/zip/'+id;

    let headers = new Headers();
    headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJVc2VyIE1hbmFnZW1lbnQgUG9ydGFsIiwic3ViIjoiYW1hbCIsImlzcyI6IkdldCBBcnJheXMsIExMQyIsImV4cCI6MTY2ODQ4NTM1MiwiaWF0IjoxNjY3Njg1MzUyLCJhdXRob3JpdGllcyI6WyJ1c2VyOnJlYWQiXX0.V9n6nvBa9HUpYVIImh84KWlWinddvDUy1qBQT9f-SgdaGy9zfwofOvF44fqsZ1vC68Rt1FhZDlNfZrCt8lS3kw');

    fetch(file, { headers })
      .then(response => response.blob())
      .then(blobby => {

        console.log(blobby)
        let objectUrl = window.URL.createObjectURL(blobby);

        anchor.href = objectUrl;
        anchor.download = 'test.zip';
        anchor.click();

        window.URL.revokeObjectURL(objectUrl);
      });



  }
  updateAccepte(id: any): void {

      this.demandeService.update(id,"ACCEPTE").subscribe(
        (response: CustomHttpRespone) => {
          alert(" Bien modifier !");
        },
        (error: HttpErrorResponse) => {
          this.sendNotification(NotificationType.ERROR, error.error.message);
        }
      )
    ;
}
  private sendNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      alert(" Bien modifier !");
    } else {
      alert(" Bien modifier !");
    }
  }




}


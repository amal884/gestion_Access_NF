import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DemandeService} from "../services/demande.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {DownloadServiceService} from "../download-service.service";
import {FileData} from "../model/FileData.model";
import {saveAs} from "file-saver";



@Component({
  selector: 'app-demande-status',
  templateUrl: './demande-status.component.html',
  styleUrls: ['./demande-status.component.css']
})
export class DemandeStatusComponent implements OnInit {
  demandes! : any
  errorMesssage! : string ;
  searchFormGroup! :FormGroup;
  constructor(private fb :FormBuilder ,private downloadService: DownloadServiceService, private demandeService:DemandeService, private http: HttpClient) { }

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

  // return this.http.put(environment.backendHost+"/demandes/"+ id,demandeStatus)

  downloadBadge(id: any ) {
    const toto ="amal"
    let anchor = document.createElement("a");
    document.body.appendChild(anchor);
    let file = 'http://localhost:8081/getdetails/'+id;

    let headers = new Headers();
    headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJVc2VyIE1hbmFnZW1lbnQgUG9ydGFsIiwic3ViIjoiYW1hbCIsImlzcyI6IkdldCBBcnJheXMsIExMQyIsImV4cCI6MTY2ODQ4NTM1MiwiaWF0IjoxNjY3Njg1MzUyLCJhdXRob3JpdGllcyI6WyJ1c2VyOnJlYWQiXX0.V9n6nvBa9HUpYVIImh84KWlWinddvDUy1qBQT9f-SgdaGy9zfwofOvF44fqsZ1vC68Rt1FhZDlNfZrCt8lS3kw');

    fetch(file, { headers })
      .then(response => response.blob())
      .then(blobby => {

        console.log(blobby)
        let objectUrl = window.URL.createObjectURL(blobby);

        anchor.href = objectUrl;
        anchor.download = 'test.pdf';
        anchor.click();

        window.URL.revokeObjectURL(objectUrl);
      });

    // this.http.post<any>('http://localhost:8081/getdetails/'+id,toto).subscribe(
    //   res => {
    //
    //     alert('PDF created successfully');
    //
    //   }
    // );
  }


  downloadFile(id : any): void {
    let anchor = document.createElement("a");
    document.body.appendChild(anchor);
    let file = 'http://localhost:8085/badge/'+id;
    let headers = new Headers();
    headers.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJhdWQiOiJVc2VyIE1hbmFnZW1lbnQgUG9ydGFsIiwic3ViIjoiYW1hbCIsImlzcyI6IkdldCBBcnJheXMsIExMQyIsImV4cCI6MTY2ODQ4NTM1MiwiaWF0IjoxNjY3Njg1MzUyLCJhdXRob3JpdGllcyI6WyJ1c2VyOnJlYWQiXX0.V9n6nvBa9HUpYVIImh84KWlWinddvDUy1qBQT9f-SgdaGy9zfwofOvF44fqsZ1vC68Rt1FhZDlNfZrCt8lS3kw');
    fetch(file, { headers })
      .then(response => response.blob())
      .then(blobby => {

        console.log(blobby)
        let objectUrl = window.URL.createObjectURL(blobby);

        anchor.href = objectUrl;
        anchor.download = 'test.pdf';
        anchor.click();

        window.URL.revokeObjectURL(objectUrl);
      });


    // this.downloadService
    //   .download(id)
    //   .subscribe(blob =>
    //     saveAs(blob, "testBadge")
    //   );
  }


}

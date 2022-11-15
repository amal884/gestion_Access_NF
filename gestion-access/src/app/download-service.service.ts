import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";
import {FileData} from "./model/FileData.model";

@Injectable({
  providedIn: 'root'
})
export class DownloadServiceService {

  constructor(private http: HttpClient) {
  }

  download(id: number | undefined): Observable<Blob> {
    return this.http.get('http://localhost:8085/badge/'+id, {
      responseType: 'blob'
    });
  }

  list(): Observable<FileData[]> {
    return this.http.get<FileData[]>(`${environment.apiUrl}/files`);
  }
}

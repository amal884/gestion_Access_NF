import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-url-test',
  templateUrl: './url-test.component.html',
  styleUrls: ['./url-test.component.css']
})
export class UrlTestComponent implements OnInit {

  title = 'CreatePDF';
  // @ts-ignore
  dataset: Details = {
    name:'',
    age:null,
    country:''
  };

  constructor(private https: HttpClient) { }

  ngOnInit(): void {


  }
  onSubmit()
  {
    this.https.post<Details>('http://localhost:8080/testapp/getdetails', this.dataset).subscribe(
      res => {
        this.dataset = res;
        alert('PDF created successfully');
        // @ts-ignore
        this.dataset.age = null;
        this.dataset.name = '';
        this.dataset.country = '';
      });
  }
}
interface Details
{
  name:string;
  age:any;
  country:string;
}

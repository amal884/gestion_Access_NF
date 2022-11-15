import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {DemandeService} from "../services/demande.service";
import {demandeur} from "../model/demandeur.model";
import {Demande} from "../model/Demande.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-new-demande-engins',
  templateUrl: './new-demande-engins.component.html',
  styleUrls: ['./new-demande-engins.component.css']
})
export class NewDemandeEnginsComponent implements OnInit {
  zones : Array<any> =[
    {name: 'ANP', value:'ANP'},
    {name: 'SOMAPORT', value:'SOMAPORT'},
    {name: 'MARSAMAROC', value:'MARSAMAROC'},
    {name: 'PORTNET', value:'PORTNET'},
    {name: 'MASSCEREALES', value:'MASSCEREALES'},
    {name: 'ONCF', value:'ONCF'},
    {name: 'TC3', value:'TC3'},
    {name: 'DGSN', value:'DGSN'},
    {name: 'PROTECTIONCIVIL', value:'PROTECTIONCIVIL'},
    {name: 'ONSA', value:'ONSA'},
    {name: 'CHANTIERNAVAL', value:'CHANTIERNAVAL'},
    {name: 'MOULAYYOUSSEF', value:'MOULAYYOUSSEF'},
  ]

  badeType:any;


// form group
  form: FormGroup;
   public  fileSourcePhoto: any = File ;
  public fileSourcecinFront: any = File;
  public fileSourcecinBack: any = File;
  public fileSourcemarcheFront: any = File;
  public  fileSourcemarcheBack: any = File;
  public fileSourcemarcheDure:any = File;
  public fileSourcecnss: any = File ;
  public fileSourcedemandeAccess: any = File ;
  public fileSourcecarteGrise:any = File;


  constructor(private http: HttpClient, private fb: FormBuilder, private demandeService: DemandeService,private router1 :ActivatedRoute ) {

    this.form = this.fb.group({
      cin: ['', [Validators.required]],
      nom: ['', [Validators.required]],
      prenom: [''],
      adresse: [''],
      email: [''],
      telephone: [''],
      organisme: [''],
      checkArray: this.fb.array([]),
      // photo: [''],
      // cinFront: [''],
      // cinBack: [''],
      // marcheFront: [''],
      // marcheBack: [''],
      // marcheDure: [''],
      // cnss: [''],
      // demandeAccess: [''],
      // carteGrise :[''],
      // ANP:false,
      // SOMAPORT : false,
      // MARSAMAROC : false,
      // PORTNET : false,
      // MASSCEREALES :false,
      // ONCF :false,
      // OCP : false,
      // TC3 : false,
      // DGSN : false,
      // PROTECTIONCIVIL : false,
      // ONSA : false,
      // CHANTIERNAVAL : false,
      // MOULAYYOUSSEF : false,
      // fileSourcePhoto: [null],
      // fileSourcecinFront: [null],
      // fileSourcecinBack: [null],
      // fileSourcemarcheFront: [null],
      // fileSourcemarcheBack: [null],
      // fileSourcemarcheDure: [null],
      // fileSourcecnss: [null],
      // fileSourcedemandeAccess: [null],
      // fileSourcecarteGrise: [null],
    });
  }
  onCheckChange(e:any){
    const checkArray:FormArray=this.form.get('checkArray') as FormArray
    console.log(checkArray)
    if(e.target.checked){
      checkArray.push(new FormControl(e.target.value));
      console.log(e.target.value);
    }
    else{
      var i =0;
      checkArray.controls.forEach((item: any) => {
        if(item.value == e.target.value){
          checkArray.removeAt(i)
          return;
        }
        i++
      });


    }
  }

  ngOnInit(): void {
    this.router1.queryParams.subscribe((params: any)=>{
      console.log(params.data)
      this.badeType = params.data ;

    })
  }
  get f() {
    return this.form.controls;
  }

  // on file select event
  onFileChangePhoto(event: Event) {
    // @ts-ignore
    this.fileSourcePhoto = event.target.files[0];
    console.log(this.fileSourcePhoto);
  }
  onFileChangecinFront(event: Event) {
    // @ts-ignore
    this.fileSourcecinFront = event.target.files[0];
    console.log(this.fileSourcecinFront);
  }
  onFileChangecinBack(event: Event) {
    // @ts-ignore
    this.fileSourcecinBack = event.target.files[0];
    console.log(this.fileSourcecinBack);
  }
  onFileChangemarcheFront(event: Event) {
    // @ts-ignore
    this.fileSourcemarcheFront = event.target.files[0];
    console.log(this.fileSourcemarcheFront);
  }
  onFileChangemarcheBack(event: Event) {
    // @ts-ignore
    this.fileSourcemarcheBack = event.target.files[0];
    console.log(this.fileSourcemarcheBack);
  }
  onFileChangemarcheDure(event: Event) {
    // @ts-ignore
    this.fileSourcemarcheDure = event.target.files[0];
    console.log(this.fileSourcemarcheDure);
  }
  onFileChangecnss(event: Event) {
    // @ts-ignore
    this.fileSourcecnss = event.target.files[0];
    console.log(this.fileSourcecnss);
  }
  onFileChangedemandeAccess(event: Event) {
    // @ts-ignore
    this.fileSourcedemandeAccess = event.target.files[0];
    console.log(this.fileSourcedemandeAccess);
  }
  onFileChangecarteGrise(event: Event) {
    // @ts-ignore
    this.fileSourcecarteGrise = event.target.files[0];
    console.log(this.fileSourcecarteGrise);
  }






  // on form submit function
  onSubmit() {
    const formData = new FormData();
    const demandeRequestDto = this.form.value;

    // @ts-ignore
    formData.append('demandeRequestDto',JSON.stringify(demandeRequestDto))
    // @ts-ignore
    formData.append('photo', this.fileSourcePhoto);
    // @ts-ignore
    formData.append('cinFront', this.fileSourcecinFront);
    // @ts-ignore
    formData.append('cinBack', this.fileSourcecinBack);
    // @ts-ignore
    formData.append('marcheFront', this.fileSourcemarcheFront);
    // @ts-ignore
    formData.append('marcheBack', this.fileSourcemarcheBack);
    // @ts-ignore
    formData.append('marcheDure', this.fileSourcemarcheDure);
    // @ts-ignore
    formData.append('cnss', this.fileSourcecnss);
    // @ts-ignore
    formData.append('demandeAccess', this.fileSourcedemandeAccess);
    // @ts-ignore
    formData.append('carteGrise', this.fileSourcecarteGrise);

    formData.append('TYPE', "ENGIIN");
    formData.append('badgeType', this.badeType);

    // @ts-ignore
    for (let [key, value] of formData.entries()) {
      console.log(key, ':', value);
    }



    alert('Uploaded Successfully.');
    this.demandeService.saveDemande(formData).subscribe({
      next : data=>{
        alert(" Bien enregistre !");
        // this.newDemandeurFormGroup.reset();
      },
      error : err=>{
        console.log(err);
      }
    })
    ;


}

}


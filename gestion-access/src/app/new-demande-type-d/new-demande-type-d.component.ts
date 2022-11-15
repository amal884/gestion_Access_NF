import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {DemandeService} from "../services/demande.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {User} from "../model/user.model";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-new-demande-type-d',
  templateUrl: './new-demande-type-d.component.html',
  styleUrls: ['./new-demande-type-d.component.css']
})
export class NewDemandeTypeDComponent implements OnInit {
  private titleSubject = new BehaviorSubject<string>('Users');
  public titleAction$ = this.titleSubject.asObservable();
  demandeurType! : FormGroup;
  constructor(private fb: FormBuilder, private demandeService: DemandeService , private router1 :ActivatedRoute ,private router :Router , private authenticationService: AuthenticationService) { }
  badeType: any;
  isAdmin: any;
  public user!: User;
  ngOnInit(): void {
    this.user = this.authenticationService.getUserFromLocalCache();

    this.demandeurType = this.fb.group({
      demandeurT: ['male']
    })
    this.router1.queryParams.subscribe((params: any)=>{
      console.log(params.data)
      this.badeType = params.data ;

    })
  }

  onSubmitDem() {
    // @ts-ignore
    if ("PERSONNE" == this.demandeurType.get('demandeurT').value) {
      this.router.navigate(['/new-demande-personne'],{queryParams:{data: this.badeType} });

    }
    else// @ts-ignore
    if ("TRANSITAIRE" == this.demandeurType.get('demandeurT').value) {
      this.router.navigate(['/new-demande-transitaire'],{queryParams:{data: this.badeType} });
    }

    else
    { // @ts-ignore
      if ("ENGIIN" == this.demandeurType.get('demandeurT').value) {

        this.router.navigate(['/new-demande-engins'],{queryParams:{data: this.badeType} });

      }
    }
  }


  changeTitle(settings: string) {

  }
}

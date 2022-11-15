import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {demandeur} from "../model/demandeur.model";
import {DemandeurService} from "../services/demandeur.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-demandeur',
  templateUrl: './new-demandeur.component.html',
  styleUrls: ['./new-demandeur.component.css']
})
export class NewDemandeurComponent implements OnInit {
  newDemandeurFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private demandeurService: DemandeurService , private router :Router) {
  }

  ngOnInit(): void {
    this.newDemandeurFormGroup = this.fb.group({
      cin: this.fb.control(null,[Validators.required ]),
      nom: this.fb.control(null,[Validators.required ]),
      prenom: this.fb.control(null,[Validators.required ]),
      adresse: this.fb.control(null,[Validators.required ]),
      email: this.fb.control(null,[Validators.required ,Validators.email ]),
      telephone: this.fb.control(null,[Validators.required ]),
      organisme: this.fb.control(null,[Validators.required ]),
    })
  }

  handleSaveDemandeur() {
    let dem: demandeur = this.newDemandeurFormGroup.value;
    this.demandeurService.saveDemandeurs(dem).subscribe({
     next : data=>{
       alert(" Bien enregistre !");
       // this.newDemandeurFormGroup.reset();
       this.router.navigateByUrl("/demandeurs");
     },
      error : err=>{
       console.log(err);
      }
  })
    ;

  }
}

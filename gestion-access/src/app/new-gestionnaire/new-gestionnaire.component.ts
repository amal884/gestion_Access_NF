
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {GestionnaireService} from "../services/gestionnaire.service";
import {GestionnaireModel} from "../model/Gestionnaire.model";

@Component({
  selector: 'app-new-gestionnaire',
  templateUrl: './new-gestionnaire.component.html',
  styleUrls: ['./new-gestionnaire.component.css']
})
export class NewGestionnaireComponent  implements OnInit{
  newGestionnaireFormGroup!: FormGroup;
  zones : any = ['SOMAPORT' ,
    'MARSAMAROC',
    'PORTNET',
    'MASSCEREALES',
    'ONCF',
    'OCP',
    'TC3',
    'DGSN',
    'PROTECTIONCIVIL',
    'ONSA',
    'CHANTIERNAVAL',
    'MOULAYYOUSSEF'];
  constructor(private fb: FormBuilder, private gestionnaireService: GestionnaireService , private router :Router) {}


  changeZone(e: any) {
    this.zone?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  get zone() {
    return this.newGestionnaireFormGroup.get('zone');
  }

  handleSaveGesetionnaire() {
    let dem: GestionnaireModel = this.newGestionnaireFormGroup.value;
    console.log(JSON.stringify(this.newGestionnaireFormGroup.value));
    this.gestionnaireService.saveGestionnaires(dem).subscribe({
      next : data=>{
        alert(" Bien enregistre !");
        // this.newDemandeurFormGroup.reset();
        this.router.navigateByUrl("/gestionnaires");
      },
      error : err=>{
        console.log(err);
      }
    })
    ;

  }

  ngOnInit(): void {
    this.newGestionnaireFormGroup = this.fb.group({
      cin: this.fb.control(null,[Validators.required ]),
      nom: this.fb.control(null,[Validators.required ]),
      prenom: this.fb.control(null,[Validators.required ]),
      adresse: this.fb.control(null,[Validators.required ]),
      email: this.fb.control(null,[Validators.required ,Validators.email ]),
      telephone: this.fb.control(null,[Validators.required ]),
      zone: this.fb.control(null,[Validators.required ]),
    })
  }

}

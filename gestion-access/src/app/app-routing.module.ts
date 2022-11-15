import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemandesComponent} from "./demandes/demandes.component";
import {DemandeursComponent} from "./demandeurs/demandeurs.component";
import {NewDemandeurComponent} from "./new-demandeur/new-demandeur.component";
import {NewDemandeComponent} from "./new-demande/new-demande.component";
import {GestionnaireComponent} from "./gestionnaire/gestionnaire.component";
import {NewGestionnaireComponent} from "./new-gestionnaire/new-gestionnaire.component";
import {NewDemandePersonneComponent} from "./new-demande-personne/new-demande-personne.component";
import {NewDemandeTransitaireComponent} from "./new-demande-transitaire/new-demande-transitaire.component";
import {NewDemandeEnginsComponent} from "./new-demande-engins/new-demande-engins.component";
import {NewDemandeTypeDComponent} from "./new-demande-type-d/new-demande-type-d.component";
import {UrlTestComponent} from "./url-test/url-test.component";
import {DemandeStatusComponent} from "./demande-status/demande-status.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UserComponent} from "./user/user.component";
import {AuthenticationGuard} from "./guard/authentication.guard";
import {HomeComponent} from "./home/home.component";
// import {LoginComponent} from "./login/login.component";
// import {RegisterComponent} from "./register/register.component";
// import {UserComponent} from "./user/user.component";
// import {AuthenticationGuard} from "./guard/authentication.guard";

const routes: Routes = [
  {path :"demandes" , component : DemandesComponent },
  {path :"demandeurs" , component : DemandeursComponent },
  {path :"new-demandeur" , component : NewDemandeurComponent },
  {path :"new-demande" , component : NewDemandeComponent },
  {path :"gestionnaires" , component : GestionnaireComponent },
  {path :"new-gestionnaire" , component : NewGestionnaireComponent },
  {path :"new-demande-personne" , component : NewDemandePersonneComponent },
  {path :"new-demande-transitaire" , component : NewDemandeTransitaireComponent },
  {path :"new-demande-engins" , component : NewDemandeEnginsComponent },
  {path :"new-demande-type" , component : NewDemandeTypeDComponent },
  {path :"testUrl" , component : UrlTestComponent },
  {path :"demande-status" , component : DemandeStatusComponent },
  //
  { path: 'login', component: LoginComponent },
  {path: 'home', component:HomeComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'user/management', component: UserComponent, canActivate: [AuthenticationGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DemandesComponent } from './demandes/demandes.component';
import { DemandeursComponent } from './demandeurs/demandeurs.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewDemandeurComponent } from './new-demandeur/new-demandeur.component';
import { NewDemandeComponent } from './new-demande/new-demande.component';
import { GestionnaireComponent } from './gestionnaire/gestionnaire.component';
import { NewGestionnaireComponent } from './new-gestionnaire/new-gestionnaire.component';
import { NewDemandeTransitaireComponent } from './new-demande-transitaire/new-demande-transitaire.component';
import { NewDemandeEnginsComponent } from './new-demande-engins/new-demande-engins.component';
import { NewDemandePersonneComponent } from './new-demande-personne/new-demande-personne.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "../material.module";
import { NewDemandeTypeDComponent } from './new-demande-type-d/new-demande-type-d.component';
import { UrlTestComponent } from './url-test/url-test.component';
import { DemandeStatusComponent } from './demande-status/demande-status.component';
import {AuthenticationService} from "./services/authentication.service";
import {UserService} from "./services/user.service";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {UserComponent} from "./user/user.component";
import {NotificationService} from "./notification-service.service";
import {AuthenticationGuard} from "./guard/authentication.guard";
import {AuthInterceptor} from "./interceptor/auth.interceptor";
import {NotificationModule} from "./notification.model";
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginDesignComponent } from './login-design/login-design.component';
import { HomeComponent } from './home/home.component';
// import {AuthInterceptor} from "./auth.interceptor";
// import {AuthenticationGuard} from "./guard/authentication.guard";
// import {NotificationModule} from "./notification.model";
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DemandesComponent,
    DemandeursComponent,
    NewDemandeurComponent,
    NewDemandeComponent,
    GestionnaireComponent,
    NewGestionnaireComponent,
    NewDemandeTransitaireComponent,
    NewDemandeEnginsComponent,
    NewDemandePersonneComponent,
    NewDemandeTypeDComponent,
    UrlTestComponent,
    DemandeStatusComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    NavMenuComponent,
    LoginDesignComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule, // interagir avec backend
    NotificationModule
  ],
  providers: [NotificationService, AuthenticationGuard, AuthenticationService, UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

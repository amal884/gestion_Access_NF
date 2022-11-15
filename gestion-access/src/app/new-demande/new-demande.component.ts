import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DemandeService} from "../services/demande.service";
import {demandeur} from "../model/demandeur.model";
import {Demande} from "../model/Demande.model";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {query} from "@angular/animations";
import {Role} from "../enum/role.enum";
import {AuthenticationService} from "../services/authentication.service";
import {User} from "../model/user.model";
import {NotificationType} from "../enum/notification-type.enum";
// import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-new-demande',
  templateUrl: './new-demande.component.html',
  styleUrls: ['./new-demande.component.css']
})
export class NewDemandeComponent implements OnInit {
  private titleSubject = new BehaviorSubject<string>('Users');
  public titleAction$ = this.titleSubject.asObservable();
  newDemandeFormGroup!: FormGroup;
  badgeType! :FormGroup ;
  public user!: User;

  public isButtonVisible = false;

  public isNewDemandeVisible = true;

  demandeurType! : FormGroup;

  constructor(private fb: FormBuilder, private demandeService: DemandeService ,  private router :Router, private authenticationService: AuthenticationService,) { }

  ngOnInit(): void {
    this.user = this.authenticationService.getUserFromLocalCache();
    // this.getUsers(true);
    this.badgeType = this.fb.group({
      badgeT: ['male']
    })







  }
  public changeTitle(title: string): void {
    this.titleSubject.next(title);
    this.isNewDemandeVisible=false;
  }

  public get isAdmin(): boolean {
    return this.getUserRole() === Role.ADMIN || this.getUserRole() === Role.SUPER_ADMIN;
  }

  public onLogOut(): void {
    this.authenticationService.logOut();
    this.router.navigate(['/login']);
    this.sendNotification(NotificationType.SUCCESS, `You've been successfully logged out`);
  }
  private sendNotification(notificationType: NotificationType, message: string): void {
    if (message) {

    } else {

    }
  }

  private getUserRole(): string {
    return this.authenticationService.getUserFromLocalCache().role;
  }

  // Submit Registration Form
  onSubmitBadge() {
    this.router.navigate(['/new-demande-type'],{queryParams:{data: this.badgeType.get('badgeT')?.value} })
  }



  // Getter method to access form control
  isSubmitted: any;
  fileStatus: any;
  refreshing: any;


  updateProfileImage() {

  }

  onUpdateCurrentUser(value: any) {

  }
}

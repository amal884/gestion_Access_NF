import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Observable} from "rxjs";
import {NotificationType} from "../enum/notification-type.enum";
import {NotificationService} from "../notification-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  loginStatus$ : Observable<boolean> | undefined
  userName$  :  Observable<string> | undefined
  userRole$  :  Observable<string> | undefined


  constructor(private authenticationService: AuthenticationService ,private router: Router, private notificationService: NotificationService) {
    // this.loginStatus$ = this.authenticationService.isLogedIn;
    //
    // // @ts-ignore
    // this.userName$ = this.authenticationService._userName;
    // // @ts-ignore
    // this.userRole$ = this.authenticationService._userRole

  }


  ngOnInit(): void {
    this.loginStatus$ = this.authenticationService.isLogedIn;
    // @ts-ignore
    this.userName$ = this.authenticationService._userName;
    // @ts-ignore
    this.userRole$ = this.authenticationService._userRole
  }

  public onLogOut(): void {
    this.authenticationService.logOut();
    this.router.navigate(['/home']);
    this.sendNotification(NotificationType.SUCCESS, `You've been successfully logged out`);
  }

  private sendNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }

}

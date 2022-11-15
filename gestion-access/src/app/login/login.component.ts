import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {NotificationType} from "../enum/notification-type.enum";
import {HeaderType} from "../enum/header-type.enum";
import {NotificationService} from "../notification-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public showLoading!: boolean;
  private subscriptions: Subscription[] = [];

  constructor(private router: Router, private authenticationService: AuthenticationService,
              private notificationService: NotificationService) { }

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      if(this.authenticationService.getUserFromLocalCache().role =="ROLE_USER")
         this.router.navigateByUrl('/new-demande');
      if(this.authenticationService.getUserFromLocalCache().role =="ROLE_SUPER_ADMIN")
        this.router.navigateByUrl('/user/management');

    } else {
      this.router.navigateByUrl('/login');
    }
  }

  public onLogin(user: User): void {
    this.showLoading = true;


    this.subscriptions.push(
      this.authenticationService.login(user).subscribe(
        (response: HttpResponse<User>) => {

          const token = response.headers.get(HeaderType.JWT_TOKEN);
          console.log(token)

          this.authenticationService.saveToken(token);
          this.authenticationService.addUserToLocalCache(response.body);

          if(this.authenticationService.getUserFromLocalCache().role =="ROLE_USER")
            this.router.navigateByUrl('/new-demande');
          if(this.authenticationService.getUserFromLocalCache().role =="ROLE_SUPER_ADMIN")
            this.router.navigateByUrl('/user/management');

          // this.router.navigateByUrl('/new-demande');
          this.showLoading = false;
        },
        (errorResponse: HttpErrorResponse) => {
          this.sendErrorNotification(NotificationType.ERROR, errorResponse.error.message);
          this.showLoading = false;
        }
      )
    );
  }
  private sendErrorNotification(notificationType: NotificationType, message: string): void {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
    }
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}

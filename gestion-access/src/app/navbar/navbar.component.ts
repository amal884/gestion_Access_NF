import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Role} from "../enum/role.enum";
import {User} from "../model/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private titleSubject = new BehaviorSubject<string>('Users');
  public users!: User[];
  public user!: User;
  fileStatus: any;
  refreshing: any;
  profile=false



  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.user = this.authenticationService.getUserFromLocalCache();


  }

  public get isAdmin(): boolean {
    return this.authenticationService.getUserFromLocalCache().role === Role.ADMIN || this.authenticationService.getUserFromLocalCache().role === Role.SUPER_ADMIN;
  }

  public changeTitle(title: string): void {
    this.titleSubject.next(title);
    this.profile = true
  }

  public get _Profile(): boolean{
    return this.profile;
  }

  updateProfileImage() {

  }

  onUpdateCurrentUser(value: any) {

  }

  onLogOut() {

  }
}

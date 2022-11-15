import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {User} from "../model/user.model";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public host = environment.apiUrl;
  private token: any ;
  private loggedInUsername: any;

  private jwtHelper = new JwtHelperService();

  private loginStatus = new BehaviorSubject<boolean>(this.isUserLoggedIn());
  private userName = new BehaviorSubject<string|null>(localStorage.getItem('username'));

  private userRole = new BehaviorSubject<string|null>(localStorage.getItem('role'));


  constructor(private http:HttpClient) {
  }

  public login(user: User): Observable<HttpResponse<User>> {

    return this.http.post<User>(`${this.host}/user/login`, user, { observe: 'response' });

  }


  public register(user: User): Observable<User> {
    return this.http.post<User >(`${this.host}/user/register`, user);
  }


  public logOut(): void {


    this.token = null;
    this.loggedInUsername = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('users');
  }

  public saveToken(token: string | null): void {
    this.token = token;

    if (typeof token === "string") {
      localStorage.setItem('token', token);
    }
  }

  public addUserToLocalCache(user: User | null): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromLocalCache(): User {
    // @ts-ignore
    return JSON.parse(localStorage.getItem('user'));
  }

  public loadToken(): void {
    console.log(localStorage.getItem('token'))
    this.token = localStorage.getItem('token');
  }

  public getToken(): string {
    return this.token;
  }

  // @ts-ignore
  public isUserLoggedIn(): boolean {
    this.loadToken();
    if (this.token != null && this.token !== ''){
      if (this.jwtHelper.decodeToken(this.token).sub != null || '') {
        if (!this.jwtHelper.isTokenExpired(this.token)) {
          this.loggedInUsername = this.jwtHelper.decodeToken(this.token).sub;
          return true;
        }
      }
    } else {
      this.logOut();
      return false;
    }
  }


  get _userName() {
    return this.userName.asObservable();
  }

  get isLogedIn(){
    return this.loginStatus.asObservable();
  }

  get _userRole(){
    return this.userRole.asObservable();
  }
}

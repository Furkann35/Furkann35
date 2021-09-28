import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { ResponseModel } from '../models/responseModel';
import { RegisterModel } from '../models/registerModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelperService: JwtHelperService = new JwtHelperService();
  apiUrl = 'https://localhost:44318/api/auth/';
  userName:string
  userEmail:string
  currentUserId: number;
  constructor(private httpClient: HttpClient,
    private localStorageService: LocalStorageService,) { }

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "login", loginModel)
  }
  register(registerModel: RegisterModel) {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "register", registerModel)
  }

  logOut() {
    this.localStorageService.removeToken();
    // this.toastrService.success('Çıkış yapıldı', 'Başarılı');
  }

  decodeToken(token: string) {
    return this.jwtHelperService.decodeToken(token);
  }

  getToken(): string {
    return this.localStorageService.get('token');
  }


  isAuthenticated() {
    if (localStorage.getItem("token")) {
      return true;
    }
    else {
      return false;
    }
  }


  getDecodedToken() {
    try {
      return this.jwtHelperService.decodeToken(
        this.localStorageService.getToken()
      );
    } catch (Error) {
      return null;
    }
  }
  setCurrentUserId() {
    var decoded = this.getDecodedToken();
    var propUserId = Object.keys(decoded).filter((x) =>
      x.endsWith('/nameidentifier')
    )[0];
    this.currentUserId = Number(decoded[propUserId]);
    console.log(this.currentUserId)
  }

  getUserId(): number {
    var decoded = this.getDecodedToken();
    var propUserId = Object.keys(decoded).filter((x) =>
      x.endsWith('/nameidentifier')
    )[0];
    this.currentUserId = Number(decoded[propUserId]);
    console.log(this.currentUserId)
    return this.currentUserId;
  }

  setUserName(){
    var decoded = this.getDecodedToken()
    var propUserName = Object.keys(decoded).filter(x => x.endsWith("/name"))[0];
    this.userName = decoded[propUserName];
  }

  getUserNameReturn(): string {
    var decoded = this.getDecodedToken()
    var propUserName = Object.keys(decoded).filter(x => x.endsWith("/name"))[0];
    this.userName = decoded[propUserName];
    return this.userName;
    }



  getUserRolesWithJWT(): string[] {
    let token = this.decodeToken(this.getToken());

    if (token != null) {
      let roles =
        token[Object.keys(token).filter((r) => r.endsWith('/role'))[0]];

      if (!Array.isArray(roles)) {
        let array = [];
        array.push(roles);

        return array;
      }

      return roles;
    }

    return [];
  }
}

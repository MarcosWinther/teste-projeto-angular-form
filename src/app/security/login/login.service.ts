/*
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/enviroments";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private httpClient:HttpClient) {}

  public login(username:string, password:string):Observable<any> {
    const url = `${environment.baseUrlBackEnd}/login`;

    return this.httpClient.post(url, {username, password}, {responseType:'json'}).pipe(
      map((data) => this.setTokenLocalStorage(data)),
      catchError((err) => {
        this.removerTokenLocalStorage();
        throw 'Falha ao efetuar login.'
      })
    )
  }

  public getToken(): string | null {
    return localStorage.getItem(environment.token);
  }

  private setTokenLocalStorage(response:any):void {
    const {type, token, _} = response;
    localStorage.setItem(environment.token, token)
  }

  private removerTokenLocalStorage():void {
    localStorage.removeItem(environment.token);
  }
}
*/

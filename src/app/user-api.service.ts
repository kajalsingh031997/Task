import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserApiService {

  constructor(private httpClient: HttpClient) { }

  public getUserData(param : string) : Observable <any> {
    return this.httpClient.get("https://vast-shore-74260.herokuapp.com/banks?city="+param);
  }
}

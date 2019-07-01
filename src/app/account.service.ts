import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account';
import { Observable } from 'rxjs';


import { HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class AccountService {
  
  private _url: string="/assets/data/account.json";
  
  constructor(private http: HttpClient) { }

  getAccountDetail(): Observable<Account[]> {
    return this.http.get<Account[]>(this._url);
  }
}
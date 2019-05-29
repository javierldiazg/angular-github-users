import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SearchService {
  baseUrl: String = ' https://api.github.com/users/';

  constructor(private _http: HttpClient) { }

  getUser(searchText) {
    const url = this.baseUrl + searchText;
    return this._http.get(url);
  }

  getData(url) {
    return this._http.get(url);
  }

}

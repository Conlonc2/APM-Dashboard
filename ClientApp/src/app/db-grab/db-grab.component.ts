import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Injectable()
export class DbGrabComponent {

  constructor(private _http: HttpClient) { }

  grabData() {
    // fetch("http://localhost:3000/all", mode).then( res => pipe(map(result => result)))
    return this._http.get("http://localhost:3000/all").pipe(map(result => result));
    // return this._http.get("https://angular-http-guide.firebaseio.com/").pipe(map(result => result));
  
  }
}


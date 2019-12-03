import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class DbGrabComponent {
  data = [];
  constructor(private _http: HttpClient) { }

  gatherData() {
    return this._http.get("http://localhost:3000/team/1").pipe(map(result => result));
  }

}

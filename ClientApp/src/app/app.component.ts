import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DbGrabComponent } from './db-grab/db-grab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _db: DbGrabComponent){}
  ngOnInit(){
    this._db.grabData()
    .subscribe((res) => {
      console.log(res);
    })
  }
}

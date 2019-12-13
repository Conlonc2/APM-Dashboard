import { Component } from '@angular/core';
import { DbGrabComponent } from './db-grab/db-grab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = [];
  constructor(private _db: DbGrabComponent){}
  ngOnInit(){  }
}

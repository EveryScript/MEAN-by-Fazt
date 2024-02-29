import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-breaking-bad',
  templateUrl: './breaking-bad.component.html',
  styleUrls: ['./breaking-bad.component.css']
})
export class BreakingBadComponent {
  constructor(
    private _http: HttpClient
  ) {
      this.getAllData();
  }

  getAllData() {
    this._http.get(environment.api_url+'users').subscribe(
      res => console.table(res),
      err => console.error(err)
    );
  }

  filterName(e:any) {
    console.log(e.target.value);
  }
}

import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public items: Items[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Items[]>(baseUrl + 'items').subscribe(result => {
      this.items = result;
    }, error => console.error(error));
  }
}

interface Items {
  id: string;
  name: string;
  price: number;
  createdDate: string;
}

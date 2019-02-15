import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  baseUrl = 'https://data.cityofnewyork.us/resource/5scm-b38n.json';

  constructor(private httpClient: HttpClient) {}

  getDefaultData() {
    return this.httpClient.get(this.baseUrl);
  }

  getFilterData(firstName: string = null, lastName: string = null) {
    let newUrl = this.baseUrl;
    if (firstName && lastName) {
      newUrl = `${newUrl}?first_name=${firstName}&&last_name=${lastName}`;
    } else if (firstName) {
      newUrl = `${newUrl}?first_name=${firstName}`;
    } else if (lastName) {
      newUrl = `${newUrl}?last_name=${lastName}`;
    }
    return this.httpClient.get(newUrl);
  }
}

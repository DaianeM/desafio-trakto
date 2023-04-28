import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursewareService  {

  private readonly API: string = 'https://api.trakto.io/document';

  constructor(private httpClient: HttpClient) { }


  listAllDesigns() {
    const token = window.localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.httpClient.get<any>(this.API, { headers });
  }


}

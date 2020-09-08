import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: null
  };
  constructor(private http: HttpClient) {
  }
  get(url) {
    return this.http.get<any>(url, this.httpOptions);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpRequestService} from './../core/http-request.service';
import { Urls } from './../../environments/http-config';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient,
    private HttpRequest:HttpRequestService
  ) { }
  usersList(qStr) {
        return this.HttpRequest.get(`${Urls.ApiUrl}${Urls.launches}${qStr}`);
  }
}

import {Injectable} from "@angular/core";
import {HttpModule, Http, Response} from '@angular/http';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class SharedService {
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
    constructor(private http:HttpClient){

    }

    postJson(url,body):Observable<any> {
        return this.http.post(url,body,this.httpOptions);
    }
}
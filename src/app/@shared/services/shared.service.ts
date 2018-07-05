import {
    Injectable, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef,
    ComponentFactoryResolver, ChangeDetectorRef, TemplateRef, Output, EventEmitter, OnDestroy
} from "@angular/core";
import { HttpModule, Http, Response } from '@angular/http';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { AlertComponentComponent } from "../messages/alert-component/alert-component.component";


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class SharedService implements OnDestroy {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient, private router: Router,
        private resolver: ComponentFactoryResolver) { }

    postJson(url, body): Observable<any> {
        return this.http.post(url, body, this.httpOptions);
    }

    setToken(token) {
        sessionStorage.setItem('token', token);
    }
    checkToken() {
        return sessionStorage.getItem('token');
    }

    isLoggedIn() {
        return this.checkToken()
    }
    logout() {
        sessionStorage.removeItem('token');
        this.router.navigate(["login"])
    }
    componentRef: ComponentRef<any>;
    addDynamicComponent(msg, container, dynamicComponent) {
        container.clear();
        const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(dynamicComponent);
        this.componentRef = container.createComponent(factory);
        this.componentRef.instance.msg = msg;
    }
    ngOnDestroy() {

    }
}
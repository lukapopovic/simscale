import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { IProject } from '.';

@Injectable()
export class DataService {
    PROJECTS_URL = 'https://www.simscale.com/api/v1/projects';

    constructor(private http: Http) { }

    getProjects(): Observable<IProject[]> {
        return this.http.get(this.PROJECTS_URL)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // simply logging the error message
        return Observable.throw(errMsg);
    }

}

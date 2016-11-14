import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
    private username:string;
    private client_id:string = 'bc84a290ea149dbef43e';
    private client_secret:string = '70b77f4ada7d1c6c66fc669d231b281890a9b61d';

    constructor(private _http:Http) {
        console.log('Github service ready...');
        this.username = 'jhnmeelr';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUser(username:string) {
        this.username = username;
    }
}
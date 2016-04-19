import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {

    http;

    constructor(http: Http) {
        this.http = http;
    }

    login() {
        return this.http.post('http://52.39.63.210:8000/users/login', JSON.stringify({
                mail: 'info@michaelknoch.de',
                password: 'qwert1'
            }))
            .map(res => res.json())
    }

}

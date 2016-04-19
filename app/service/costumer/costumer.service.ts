import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class CostumerService {

    http;

    constructor(http: Http) {
        this.http = http;
    }

    getCostumer() {
        return this.http.get('dist/service/costumer/costumer.mock.json')
            .map(res => res.json())
    }

}

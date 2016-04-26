import {Injectable} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class DataService {

    private sharedData = [];

    constructor() {

    }

    getData(key: String) {
        return this.sharedData[key];
    }

    setData(key: String, obj) {
        this.sharedData[key] = obj;
    }

}


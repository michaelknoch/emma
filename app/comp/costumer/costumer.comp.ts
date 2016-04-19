import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CostumerService} from "../../service/costumer/costumer.service";
declare var __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'costumer',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'costumer.html',
    styleUrls: ['costumer.css'],
    bindings: [CostumerService],
})

export class Costumer {

    costumer;

    constructor(private _costumerService: CostumerService) {

        _costumerService.getCostumer().subscribe(
            data => {
                this.costumer = data;
                console.info(data);
            },
            err => console.error(err)
        );
    }

}

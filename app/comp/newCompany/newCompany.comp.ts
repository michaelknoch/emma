import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CompanyService} from "../../service/company/company.service";
import {Modal} from 'angular2-modal';
import {Router} from "angular2/router";


declare var __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'new-company',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'newCompany.html',
    styleUrls: ['newCompany.css'],
    providers: [Modal],
})

export class NewCompany {

    mail: string;
    name: string;
    url: string;

    address = {
        street: '',
        number: '',
        plz: '',
        city: ''
    };

    constructor(private companyService: CompanyService, private modal: Modal, private _router: Router) {
    }

    newCompany() {
        this.companyService.createCompanie(this.mail, this.name, this.url, this.address).subscribe(
            data => {
                console.info('create company success');
                this._router.navigate(['CompanyList']);
            },
            err => this.err(err)
        )
    }

    err(msg) {
        console.error(msg);
        this.modal.alert()
            .title('Hoppla').body(msg.status + ':' + msg._body).open();
    }

}

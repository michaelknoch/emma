import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CompanyService} from "../../service/company/company.service";
import {Router} from "angular2/router";
import {DataService} from "../../service/data.service";
declare var __moduleName: any;

@Component({
    moduleId: __moduleName,
    selector: 'company-list',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'companyList.html',
    styleUrls: ['companyList.css'],
})

export class CompanyList {

    companies;

    constructor(private companyService: CompanyService, private _router: Router, private _dataService: DataService) {
        companyService.getCompanies().subscribe(
            data => {
                this.companies = data;
                console.info(data);
            },
            err => console.error(err)
        );
    }

    selectCompany(company) {
        this.companyService.selectCompany(company._id).subscribe(data => {
            this._dataService.setData('current-company', company);
            console.info('select company', data);
            this._router.navigate(['Root'])
        });
    }

}

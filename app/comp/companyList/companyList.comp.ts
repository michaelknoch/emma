import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CompanyService} from "../../service/company/company.service";
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

    constructor(private companyService: CompanyService) {
        companyService.getCompanies().subscribe(
            data => {
                this.companies = data;
                console.info(data);
            },
            err => console.error(err)
        );
    }

    selectCompany(company) {
        this.companyService.selectCompany(company.id).subscribe(data => {
            console.info('select company success')
        });
    }

}

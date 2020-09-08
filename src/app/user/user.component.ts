import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { textLang } from './../../environments/lang.enum';
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
    loading = false;
    userQString = {
        limit: 100,
        year: '',
        launchSuccess: '',
        landSuccess: '',
    };
    userList = [];
    userListCount: number = 0;
    launchYearList = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2017, 2018, 2019, 2020];
    launchSuccess = ['true', 'false'];
    textLang = textLang;
    constructor(private userService: UserService) {}
    ngOnInit(): void {
        this.getUsersList();
    }
    getUsersList() {
        this.loading = true;
        let Qstr1 = '';
        let Qstr2 = '';
        let Qstr3 = '';
        let finalQstr = '';
        if (this.userQString.year) {
            Qstr1 = `&launch_year=${this.userQString.year}`;
        }
        if (this.userQString.launchSuccess) {
            Qstr2 = `&launch_success=${this.userQString.launchSuccess}`;
        }
        if (this.userQString.landSuccess) {
            Qstr3 = `&land_success=${this.userQString.landSuccess}`;
        }
        finalQstr = Qstr1 + Qstr2 + Qstr3;
        this.userService.usersList(`?limit=${this.userQString.limit}${finalQstr}`).subscribe(
            (res) => {
                this.onSuccessUserList(res);
            },
            (error) => {}
        );
    }
    onSuccessUserList(res) {
        this.userList = res;
        this.userListCount = res.length;
        this.loading = false;
    }
    searchbyYear(val) {
        if (this.userQString.year == val) {
            this.userQString.year = '';
        } else {
            this.userQString.year = val;
        }
        this.getUsersList();
    }
    searchbySuccessLaunch(val) {
        if (this.userQString.launchSuccess == val) {
            this.userQString.launchSuccess = '';
        } else {
            this.userQString.launchSuccess = val;
        }
        this.getUsersList();
    }
    searchbySuccessLand(val) {
        if (this.userQString.landSuccess == val) {
            this.userQString.landSuccess = '';
        } else {
            this.userQString.landSuccess = val;
        }
        this.getUsersList();
    }
}

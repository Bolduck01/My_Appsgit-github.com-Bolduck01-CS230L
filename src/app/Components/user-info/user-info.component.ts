import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from '@angular/core';
import { UserInfo } from "./user-info.model";

@Injectable()
@Component ({
    selector: "hbo-user-info",
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit {
    myInfo: UserInfo | undefined;

    constructor(private http: HttpClient) {
    }
    ngOnInit(): void{
        console.log('initializing component');
        this.getUserInfo();
        console.log('Registering showUserInfo as a subscriber');
        this.showUserInfo();
    }

    getUserInfo() {
        return this.http.get<UserInfo>('https://hbo-app-86135-default-rtdb.firebaseio.com/my-info.json');
    }
    showUserInfo() {
        this.getUserInfo().subscribe( (data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
           
        })

    }
}
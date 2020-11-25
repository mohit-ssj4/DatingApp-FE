import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user";
import { AccountService } from "../services/account.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedInUser: string;
  constructor(public accountService: AccountService) {}

  ngOnInit() {}

  login(loginForm) {
    this.loggedInUser = this.model.username;
    this.accountService.login(this.model).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
    loginForm.reset();
  }

  logout() {
    this.accountService.logout();
  }
}

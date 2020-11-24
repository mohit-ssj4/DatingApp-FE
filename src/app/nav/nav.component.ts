import { Component, OnInit } from "@angular/core";
import { AccountService } from "../services/account.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedInUser: string;
  loggedIn: boolean;
  constructor(private accountService: AccountService) {}

  ngOnInit() {}

  login(loginForm) {
    this.loggedInUser = this.model.username;
    this.accountService.login(this.model).subscribe(
      response => {
        console.log(response);
        this.loggedIn = true;
      },
      error => {
        console.log(error);
      }
    );
    loginForm.reset();
  }

  logout() {
    this.loggedIn = false;
  }
}

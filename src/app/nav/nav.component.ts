import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../services/account.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public accountService: AccountService, private router: Router) {}

  ngOnInit() {}

  login(loginForm) {
    this.accountService.login(this.model).subscribe(
      response => {
        console.log(response);
        loginForm.reset();
        this.router.navigateByUrl("/members");
      },
      error => {
        console.log(error);
      }
    );
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl("/");
  }
}

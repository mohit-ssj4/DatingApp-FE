import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../services/account.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {}

  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl("/members");
    });
  }

  logout() {
    this.accountService.logout();
    this.toastrService.success("You have successfully logged out");
    this.router.navigateByUrl("/");
  }
}

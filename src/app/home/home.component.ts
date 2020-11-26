import { Component, OnInit } from "@angular/core";
import { AccountService } from "../services/account.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  model: any = {};
  isSuccessful: boolean;
  constructor(public accountService: AccountService) {}

  ngOnInit() {}

  register() {
    this.accountService.register(this.model).subscribe(
      response => {
        console.log(response);
        this.isSuccessful = true;
      },
      error => {
        console.log(error);
      }
    );
  }
}

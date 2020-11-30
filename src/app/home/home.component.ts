import { Component, OnInit } from "@angular/core";
import { AccountService } from "../services/account.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  model: any = {};
  isSuccessful: boolean;
  constructor(
    public accountService: AccountService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {}

  register() {
    this.accountService.register(this.model).subscribe(
      response => {
        console.log(response);
        this.isSuccessful = true;
      },
      error => {
        console.log(error);
        this.toastrService.error(error.error);
      }
    );
  }
}

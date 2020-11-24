import { HttpClient } from "@angular/common/http";
import { Component, OnInit, VERSION } from "@angular/core";
import { User } from "./models/user";
import { AccountService } from "./services/account.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  users: any;
  url: string = "https://localhost:5001/api/users";

  constructor(
    private http: HttpClient,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem("user"));
  }

  getUsers() {
    this.http.get(this.url).subscribe(
      response => {
        this.users = response;
      },
      error => {
        console.log(error);
      }
    );
  }
}

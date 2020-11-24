import { HttpClient } from "@angular/common/http";
import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  users: any;
  url: string = "https://localhost:5001/api/users";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
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

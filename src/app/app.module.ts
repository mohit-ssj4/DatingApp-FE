import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HelloComponent } from "./hello.component";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AccountService } from "./services/account.service";
import { NavComponent } from "./nav/nav.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [AppComponent, HelloComponent, NavComponent],
  bootstrap: [AppComponent],
  providers: [AccountService]
})
export class AppModule {}

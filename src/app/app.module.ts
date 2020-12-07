import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HelloComponent } from "./hello.component";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AccountService } from "./services/account.service";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { ListsComponent } from "./lists/lists.component";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MessagesComponent } from "./messages/messages.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      progressBar: true,
      timeOut: 2500
    }),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    MemberListComponent,
    ListsComponent,
    MemberDetailComponent,
    MessagesComponent
  ],
  bootstrap: [AppComponent],
  providers: [AccountService]
})
export class AppModule {}

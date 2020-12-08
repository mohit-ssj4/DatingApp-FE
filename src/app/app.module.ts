import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HelloComponent } from "./hello.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AccountService } from "./services/account.service";
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { MemberListComponent } from "./members/member-list/member-list.component";
import { ListsComponent } from "./lists/lists.component";
import { MemberDetailComponent } from "./members/member-detail/member-detail.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MessagesComponent } from "./messages/messages.component";
import { SharedModule } from "./modules/shared.module";
import { TestErrorsComponent } from "./errors/test-errors/test-errors.component";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { NotFoundComponent } from "./errors/not-found/not-found.component";
import { ServerErrorComponent } from "./errors/server-error/server-error.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
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
    MessagesComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    AccountService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ]
})
export class AppModule {}

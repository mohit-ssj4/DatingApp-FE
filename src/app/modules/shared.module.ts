import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      progressBar: true,
      timeOut: 2000,
      positionClass: "toast-bottom-right"
    })
  ],
  exports: [ToastrModule],
  declarations: []
})
export class SharedModule {}

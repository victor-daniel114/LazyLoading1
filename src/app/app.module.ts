import { AppRoutingModule } from "./app-routing.module";

import { NavComponent } from "./nav/nav.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

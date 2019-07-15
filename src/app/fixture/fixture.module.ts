import { Wc2019Component } from "./wc2019/wc2019.component";
import { IndiatourComponent } from "./indiatour/indiatour.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FixtureRoutingModule } from "./fixture-routing.module";

@NgModule({
  imports: [CommonModule, FixtureRoutingModule],
  declarations: [IndiatourComponent, Wc2019Component]
})
export class FixtureModule {}

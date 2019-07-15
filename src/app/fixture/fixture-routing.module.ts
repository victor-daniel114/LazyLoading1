import { FixtureComponent } from "./fixture.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { Wc2019Component } from "./wc2019/wc2019.component";
import { IndiatourComponent } from "./indiatour/indiatour.component";

const fixtureroutes: Routes = [
  {
    path: "",
    component: FixtureComponent,
    children: [
      {
        path: "worldcup",
        component: Wc2019Component
      },
      {
        path: "indiatour",
        component: IndiatourComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(fixtureroutes)],
  exports: [RouterModule],
  declarations: []
})
export class FixtureRoutingModule {}

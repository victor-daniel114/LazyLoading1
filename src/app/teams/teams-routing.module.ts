import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TeamsComponent } from "./teams.component";

const teamsroutes: Routes = [
  {
    path: "",
    component: TeamsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(teamsroutes)],
  declarations: [TeamsComponent],
  exports: [RouterModule]
})
export class TeamsRoutingModule {}

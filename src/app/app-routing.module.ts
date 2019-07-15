import { MaincontainerComponent } from "./maincontainer/maincontainer.component";
import { AppComponent } from "./app.component";

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "teams",
    loadChildren:  () => import('./teams/teams.module').then(mod => mod.TeamsModule)
  },
  {
    path: "fixture",
    loadChildren: () => import('./fixture/fixture.module').then(mod => mod.FixtureModule)

    
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
    component: MaincontainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [MaincontainerComponent],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}

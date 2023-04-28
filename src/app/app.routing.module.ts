import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { OpeningComponent } from "./opening/opening.component";
import { AuthGuard } from "./guards/auth.guard";
import { CoursewareGuard } from "./guards/courseware.guard";


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'opening', component: OpeningComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

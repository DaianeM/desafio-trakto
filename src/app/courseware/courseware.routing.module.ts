import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoursewareComponent } from "./courseware.component";
import { SeeAllComponent } from "./see-all/see-all.component";
import { AuthGuard } from "../guards/auth.guard";


const coursewareRoutes: Routes = [
  { path: 'courseware', component: CoursewareComponent, canActivate: [AuthGuard] },
  { path: 'courseware/seall', component: SeeAllComponent, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [RouterModule.forChild(coursewareRoutes)],
  exports: [RouterModule]
})
export class CoursewareRoutingModule { }

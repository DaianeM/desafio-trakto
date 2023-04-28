import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursewareComponent } from './courseware.component';
import { SeeAllComponent } from './see-all/see-all.component';
import { CoursewareRoutingModule } from './courseware.routing.module';
import { HeaderModule } from '../header/header.module';


@NgModule({
  imports: [
    CommonModule,
    CoursewareRoutingModule,
    HeaderModule
  ],
  exports: [],
  declarations: [
    CoursewareComponent,
    SeeAllComponent,
  ],
  providers: [],
})

export class CoursewareModule { }

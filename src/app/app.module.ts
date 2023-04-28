import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { OpeningComponent } from './opening/opening.component';
import { AppRoutingModule } from './app.routing.module';
import { CoursewareModule } from './courseware/courseware.module';
import { HeaderModule } from './header/header.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CoursewareGuard } from './guards/courseware.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OpeningComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CoursewareModule,
    AppRoutingModule,
    HeaderModule,
  ],
  providers: [AuthService, AuthGuard, CoursewareGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

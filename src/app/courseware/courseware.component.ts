import { Component, OnInit } from '@angular/core';
import { CoursewareService } from './courseware.service';

@Component({
  selector: 'app-courseware',
  templateUrl: './courseware.component.html',
  styleUrls: ['./courseware.component.css']
})
export class CoursewareComponent implements OnInit {

  logoPath: string = "./assets/logo-light.png";
  userImg: string = "./assets/user.png";
  calendarIcon: string = "./assets/calendar-blue.svg";
  notificationIcon: string = "./assets/notification-blue.svg";
  logoutIcon: string = "./assets/logout.svg";

  coursewares: any = [];

  constructor(private service: CoursewareService) { }

  ngOnInit() {
    this.service.listAllDesigns().subscribe({
      next: (data) => {
        console.log('Designs', data.data);
        this.coursewares = data.data;
      },
      error: error => {
        console.log('Erro ao buscar designs.', error);
      },
    })
  }
}

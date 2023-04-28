import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logoPath: string = "./assets/logo-dark.png";
  userImg: string = "./assets/user.png";
  calendarIcon: string = "./assets/calendar.svg";
  notificationIcon: string = "./assets/notification.svg";

  currentUrl: string = '';
  bgHeader: string = '#252323';

  constructor(private router: Router, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        // console.log('URL ALTERADA', this.currentUrl);
        if (this.currentUrl === '/courseware') {
          this.bgHeader = '#FFFFFF';
        } else {
          this.bgHeader = '#252323';
        }
        this.cdRef.detectChanges();
      }
    });
  }
}

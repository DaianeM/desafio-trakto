import { Component } from '@angular/core';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.css']
})
export class OpeningComponent {

  cardBg1: string = './assets/bg-blue.png';
  cardBg2: string = './assets/bg-green.png';
  cardBg3: string = './assets/bg-pink.png';
  cardBg4: string = './assets/bg-pink2.png';

  cardImg1: string = './assets/study-book.png';
  cardImg2: string = './assets/medal.png';
  cardImg3: string = './assets/paint.png';
  cardImg4: string = './assets/youtube.png';

}
